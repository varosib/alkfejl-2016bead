'use strict'

const Schema = use('Schema')

class CategoriesSchema extends Schema {

  up () {
    this.drop('categories')
  }

  down () {
    this.drop('categories')
  }

}

module.exports = CategoriesSchema
