'use strict'

const Lucid = use('Lucid')

class Check extends Lucid {
  user () {
    return this.belongsTo('App/Model/User')
  }
  subject () {
    return this.belongsTo('App/Model/Subject')
  }
}

module.exports = Check