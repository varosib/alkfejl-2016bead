'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  subjects () {
    return this.hasMany('App/Model/Subject')
  }

}

module.exports = User
