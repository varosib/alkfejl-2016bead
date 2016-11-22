'use strict'

const Route = use('Route')

Route.get('/', 'SubjectController.index')
Route.get('/subjects/create', 'SubjectController.create').middleware('auth')
Route.post('/subjects/create', 'SubjectController.doCreate').middleware('auth')
Route.get('/subjects/:id/edit', 'SubjectController.edit').middleware('auth')
Route.post('/subjects/:id/edit', 'SubjectController.doEdit').middleware('auth')
Route.get('/subjects/:id/delete', 'SubjectController.doDelete').middleware('auth')
Route.get('/subjects/:id', 'SubjectController.show')
Route.get('/subjects', 'SubjectController.search').middleware('auth')

Route.get('/register', 'UserController.register')
Route.get('/login', 'UserController.login')
Route.post('/register', 'UserController.doRegister')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')