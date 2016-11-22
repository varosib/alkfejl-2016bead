'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')
const Department = use('App/Model/Department')
const Recipe = use('App/Model/Recipe')
const Subject = use('App/Model/Subject')
const User = use('App/Model/User')
const Validator = use('Validator')

class SubjectController {

  * index(request, response) {
    yield response.sendView('main', {})  
  }

  * create (request, response) {
    const departments = yield Department.all()
    yield response.sendView('subjectCreate', {
      departments: departments.toJSON()
    });
  }

  * doCreate (request, response) {
    const subjectData = request.except('_csrf');

    const rules = {
      code: 'required',
      name: 'required',
      time: 'required',
      location: 'required',
      department_id: 'required'
    };

    const validation = yield Validator.validateAll(subjectData, rules)

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }

    subjectData.user_id = request.currentUser.id
    const subject = yield Subject.create(subjectData)
    response.redirect('/')
  }

  * edit (request, response) {
    const categories = yield Category.all()
    const id = request.param('id');
    const recipe = yield Recipe.find(id);
    // console.log(recipe.toJSON())

    if (request.currentUser.id !== recipe.user_id) {
      response.unauthorized('Access denied.')
      return
    }


    yield response.sendView('recipeEdit', {
      categories: categories.toJSON(),
      recipe: recipe.toJSON()
    });
  }

  * doEdit (request, response) {
    const recipeData = request.except('_csrf');

    const rules = {
      name: 'required',
      ingredients: 'required',
      instructions: 'required',
      category_id: 'required'
    };

    const validation = yield Validator.validateAll(recipeData, rules)

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }

    const id = request.param('id');
    const recipe = yield Recipe.find(id);

    // Object.assign(recipe, recipeData)
    
    recipe.name = recipeData.name;
    recipe.ingredients = recipeData.ingredients; 
    recipe.instructions = recipeData.instructions;
    recipe.category_id = recipeData.category_id;

    yield recipe.save()
    
    response.redirect('/')
  }

  * show (request, response) {
    const id = request.param('id');
    const subject = yield Subject.find(id);
    yield subject.related('subject').load();

    yield response.sendView('subjectShow', {
      subject: subject.toJSON()
    })
  }

  * doDelete (request, response) {
    const id = request.param('id');
    const recipe = yield Recipe.find(id);

    if (request.currentUser.id !== recipe.user_id) {
      response.unauthorized('Access denied.')
      return
    }

    yield recipe.delete()
    response.redirect('/')
  }

  * search (request, response) {
    const page = Math.max(1, request.input('p'))
    const filters = {
      subjectName: request.input('subjectName') || '',
      department: request.input('department') || 0,
      createdBy: request.input('createdBy') || 0
    }

    const subjects = yield Subject.query()
      .where(function () {
        if (filters.department > 0) this.where('department_id', filters.department)
        if (filters.createdBy > 0) this.where('user_id', filters.createdBy)
        if (filters.subjectName.length > 0) this.where('name', 'LIKE', `%${filters.subjectName}%`)
      })
      .with('user')
      .paginate(page, 9)

    const departments = yield Department.all()
    const users = yield User.all()

    yield response.sendView('subjectSearch', {
      subjects: subjects.toJSON(),
      departments: departments.toJSON(),
      users: users.toJSON(),
      filters
    })
  }

}

module.exports = SubjectController