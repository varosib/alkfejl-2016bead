'use strict'

const Schema = use('Schema')

class CheckSchema extends Schema {

  up () {
    this.create('check', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('subject_id').unsigned().references('id').inTable('subjects')
      table.timestamps()
    })
  }

  down () {
    this.drop('check')
  }

}

module.exports = CheckSchema
