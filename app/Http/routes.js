'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'FilmController.index')
Route.get('/films/create', 'FilmController.create').middleware('auth')
Route.post('/films/create', 'FilmController.doCreate').middleware('auth')
Route.get('/films/:id/edit', 'FilmController.edit').middleware('auth')
Route.post('/films/:id/edit', 'FilmController.doEdit').middleware('auth')
Route.get('/films/:id/delete', 'FilmController.delete').middleware('auth')
Route.get('/films/:id', 'FilmController.show')
Route.get('/films', 'FilmController.search')

Route.get('/me', 'FilmController.me').middleware('auth')
Route.get('/users', 'FilmController.users').middleware('auth')

Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')
Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.logout')

Route.group('ajax', function () {
  Route.delete('/films/:id/delete', 'FilmController.ajaxDelete').middleware('auth')
  Route.post('/login', 'UserController.ajaxLogin')
  Route.get('/logout', 'UserController.ajaxLogout')
  Route.post('/register', 'UserController.ajaxRegister')
}).prefix('/ajax')
