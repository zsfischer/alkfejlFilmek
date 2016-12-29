'use strict'

const Schema = use('Schema')

class FilmsSchema extends Schema {

  up () {
    this.create('films', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.text('mainch').notNullable()
      table.text('instructions').notNullable()
      table.string('runningtime').notNullable()
      table.string('IMDb').notNullable()
      table.string('release').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('films')
  }

}

module.exports = FilmsSchema
