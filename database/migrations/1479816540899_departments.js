'use strict'

const Schema = use('Schema')

class DepartmentsSchema extends Schema {

  up () {
    this.create('departments', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('departments')
  }

}

module.exports = DepartmentsSchema
