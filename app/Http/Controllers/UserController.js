'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {
  * login(request, response) {
    const isLoggedIn = yield request.auth.check()
    if (isLoggedIn) {
      response.redirect('/')
    }

    yield response.sendView('login')
  }

  * doLogin (request, response) {
    const username = request.input('username')
    const password = request.input('password')

    try {
      const login = yield request.auth.attempt(username, password) 

      if (login) {
        response.redirect('/subjects')
        return
      }
    } 
    catch (err) {
      yield request
        .withAll()
        .andWith({errors: [
          {
            message: 'Invalid credentails'
          }
        ]})
        .flash()

      response.redirect('/login')
    }
  }

  * doLogout (request, response) {
    yield request.auth.logout()
    response.redirect('/')
  }

  * profile (request, response) {
    const id = request.currentUser.id;

    const user = yield User.find(id);

    yield response.sendView('profile', {
      user: user.toJSON()
    });
  }

  * doProfile (request, response) {
    const data = request.except('_csrf');

    const rules = {
      username: 'required',
      lastname: 'required',
      firstname: 'required',
      email: 'required'
    };

    const validation = yield Validator.validateAll(data, rules)

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }

    const id = request.currentUser.id;
    const user = yield User.find(id);
    
    user.email = data.email;

    yield user.save()
    
    response.redirect('/subjects')
  }

  * ajaxLogin(request, response) {
    const username = request.input('username')
    const password = request.input('password')

    try {
      const login = yield request.auth.attempt(username, password) 
      if (login) {
        response.send({ success: true })
        return
      }
    } 
    catch (err) {
      response.send({ success: false })
    }
  }

  * ajaxProfile(request, response) {
    const data = request.except('_csrf');
    const email = request.input('email')

    const rules = {
      email: 'required'
    };

    const validation = yield Validator.validateAll(data, rules)

    if (validation.fails()) {
      response.send({ success: false })
    } else {
      const id = request.currentUser.id;
      const user = yield User.find(id);

      try {
        if (user) {
          user.email = email;
          yield user.save()
          response.send({ success: true })
          return
        }
      } 
      catch (err) {
        response.send({ success: false })
      }
    }
  }
}

module.exports = UserController
