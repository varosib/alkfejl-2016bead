'use strict'

const Schema = use('Schema')

class SubjectsSchema extends Schema {

  up () {
    this.create('subjects', (table) => {
      table.increments()
      table.string('code').notNullable()
      table.string('name').notNullable()
      table.text('time').notNullable()
      table.text('location').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('department_id').unsigned().references('id').inTable('department')
      table.timestamps()
    })
  }

  down () {
    this.drop('subjects')
  }

}

module.exports = SubjectsSchema
