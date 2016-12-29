'use strict'

const Route = use('Route')

Route.get('/', 'SubjectController.index')
Route.get('/subjects/mysubjects', 'SubjectController.mySubjects').middleware('auth')
Route.post('/subjects/mysubjects', 'SubjectController.leave').middleware('auth')
Route.post('/subjects/take', 'SubjectController.take').middleware('auth')
Route.get('/subjects/create', 'SubjectController.create').middleware('auth')
Route.post('/subjects/create', 'SubjectController.doCreate').middleware('auth')
Route.get('/subjects/:id/edit', 'SubjectController.edit').middleware('auth')
Route.post('/subjects/:id/edit', 'SubjectController.doEdit').middleware('auth')
Route.get('/subjects/:id/delete', 'SubjectController.doDelete').middleware('auth')
Route.get('/subjects/:id', 'SubjectController.show').middleware('auth')
Route.get('/subjects', 'SubjectController.search').middleware('auth')
Route.get('/profile', 'UserController.profile').middleware('auth')
Route.post('/profile', 'UserController.doProfile').middleware('auth')
Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')

Route.group('ajax', function () {
    Route.delete('/subjects/:id/delete', 'SubjectController.ajaxDelete').middleware('auth')
}).prefix('/ajax')