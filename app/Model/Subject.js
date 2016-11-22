'use strict'

const Lucid = use('Lucid')

class Subject extends Lucid {
  department () {
    return this.belongsTo('App/Model/Department')
  }

  user () {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Subject