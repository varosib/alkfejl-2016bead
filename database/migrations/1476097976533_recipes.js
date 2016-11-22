'use strict'

const Schema = use('Schema')

class RecipesSchema extends Schema {

  up () {
    this.drop('recipes')
  }

  down () {
    this.drop('recipes')
  }

}

module.exports = RecipesSchema
