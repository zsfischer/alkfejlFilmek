'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
    films () {
        return this.hasMany('App/Model/Film')
    }
}

module.exports = Category
