app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      @skills = {}
      @projects = (new Project(data, @skills) for data in window.data.projects)
