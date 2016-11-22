'use strict'

const Schema = use('Schema')

class ChecksSchema extends Schema {

  up () {
    this.create('checks', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('subject_id').unsigned().references('id').inTable('subjects')
      table.timestamps()
    })
  }

  down () {
    this.drop('checks')
  }

}

module.exports = ChecksSchema
