'use strict'

const Lucid = use('Lucid')

class Department extends Lucid {
  subjects () {
    return this.hasMany('App/Model/Subject')
  }
}

module.exports = Department