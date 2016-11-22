'use strict'

const Schema = use('Schema')

class DepartmentSchema extends Schema {

  up () {
    this.create('department', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('department')
  }

}

module.exports = DepartmentSchema
