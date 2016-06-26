app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      for data in window.data.projects
        Project.create data

    skills: ->
      return Skill.all if !@query
      e for e in Skill.all when e.matches @query.split(' ')

    projects: ->
      return Project.all if !@query
      e for e in Project.all when e.matches @query.split(' ')
