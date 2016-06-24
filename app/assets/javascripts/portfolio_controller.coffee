app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      @all_skills = {}
      @all_projects = (new Project(data, @all_skills) for data in window.data.projects)

    skills: ->
      if !@query
        skill for _,skill of @all_skills
      else
        @all_skills[skill] for skill in @query.split()

    projects: ->
      if !@query
        @all_projects
      else
        project for project in @all_projects when project.skills.indexOf(@query) >= 0
