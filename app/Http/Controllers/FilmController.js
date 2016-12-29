'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')
const Film = use('App/Model/Film')
const User = use('App/Model/User')
const Validator = use('Validator')

class FilmController {

    * index(request, response) {

        const categories = yield Category.all()

        for (let category of categories) {
            const films = yield category.films().limit(5).fetch();
            category.topFilms = films.toJSON();
        }

        yield response.sendView('main', {
            categories: categories.toJSON()
        })

    }

    * create(request, response) {
        const categories = yield Category.all()
        yield response.sendView('createFilm', {
            categories: categories.toJSON()
        });
    }

    * doCreate(request, response) {
        const filmData = request.except('_csrf');
        const rules = {
            name: 'required',
            mainch: 'required',
            instructions: 'required',
            category_id: 'required',
            release: 'required',
            IMDb: 'required',
            runningtime: 'required'
        };
        const validation = yield Validator.validateAll(filmData, rules)

        if (validation.fails()) {
            yield request
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()
            response.redirect('back')
            return
        }

        filmData.user_id = request.currentUser.id
        const film = yield Film.create(filmData)
        response.redirect('/')
    }

    * edit(request, response) {
        const categories = yield Category.all()
        const id = request.param('id');
        const film = yield Film.find(id);

        if (request.currentUser.id !== film.user_id) {
            response.unauthorized('Access denied.')
            return
        }

        yield response.sendView('editFilm', {
            categories: categories.toJSON(),
            film: film.toJSON()
        });
    }

    * doEdit(request, response) {
        const filmData = request.except('_csrf');

        const rules = {
            name: 'required',
            mainch: 'required',
            instructions: 'required',
            category_id: 'required',
            runningtime: 'required',
            IMDb: 'required',
            release: 'required'
        };

        const validation = yield Validator.validateAll(filmData, rules)

        if (validation.fails()) {
            yield request
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()
            response.redirect('back')
            return
        }

        const id = request.param('id');
        const film = yield Film.find(id);

        film.name = filmData.name;
        film.mainch = filmData.mainch;
        film.instructions = filmData.instructions;
        film.category_id = filmData.category_id;
        film.runningtime = filmData.runningtime;
        film.IMDb = filmData.IMDb;
        film.release = filmData.release;

        yield film.save()

        response.redirect('/')
    }

    * delete(request, response) {
        const id = request.param('id');
        const film = yield Film.find(id);

        if (request.currentUser.id !== film.user_id) {
            response.unauthorized('Access denied.')
            return
        }

        yield film.delete()
        response.redirect('/')
    }

    * show(request, response) {
        const id = request.param('id');
        const film = yield Film.find(id);
        yield film.related('category').load();

        yield response.sendView('showFilm', {
            film: film.toJSON()
        })
    }

    * search(request, response) {
        const page = Math.max(1, request.input('p'))
        const filters = {
            filmName: request.input('filmName') || '',
            category: request.input('category') || 0,
            createdBy: request.input('createdBy') || 0
        }

        const films = yield Film.query()
            .where(function () {
                if (filters.category > 0) this.where('category_id', filters.category)
                if (filters.createdBy > 0) this.where('user_id', filters.createdBy)
                if (filters.filmName.length > 0) this.where('name', 'LIKE', `%${filters.filmName}%`)
            })
            .with('user')
            .paginate(page, 9)

        const categories = yield Category.all()
        const users = yield User.all()

        yield response.sendView('searchFilm', {
            films: films.toJSON(),
            categories: categories.toJSON(),
            users: users.toJSON(),
            filters
        })
    }

    * users(request, response) {
        const users = yield User.all()

        yield response.sendView('showUsers', {
            users: users.toJSON()
        })
    }

    *me(request, response) {
        const id = request.currentUser.id;
        const films = yield Film.all();
        const categories = yield Category.all()
        yield response.sendView('me', {
            films: films.toJSON(),
            categories: categories.toJSON()
        })

    }

    * ajaxDelete(request, response) {
     const id = request.param('id');
     const film = yield Film.find(id);

     if (film) {
       if (request.currentUser.id !== film.user_id) {
         response.unauthorized('Access denied.')
         return
       }

       yield film.delete()
       response.ok({
         success: true
       })
       return
     }
    
    response.notFound('Film not found!')
  }

}

module.exports = FilmController
