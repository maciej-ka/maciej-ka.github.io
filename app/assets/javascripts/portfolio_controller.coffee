app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      window.c = @
      @all_skills = []
      @all_projects = (new Project(data, @all_skills) for data in window.data.projects)
      @all_skills = (e for i,e of @all_skills)

    skills: ->
      return @all_skills if !@query
      searched = @query.split()
      e for e in @all_skills when searched.indexOf(e.name) >= 0

    projects: ->
      return @all_projects if !@query
      e for e in @all_projects when e.skills.indexOf(@query) >= 0
