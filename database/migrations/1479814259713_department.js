'use strict'

const Schema = use('Schema')

class DepartmentSchema extends Schema {

  up () {
    this.drop('department')
  }

  down () {
    this.drop('department')
  }

}

module.exports = DepartmentSchema
