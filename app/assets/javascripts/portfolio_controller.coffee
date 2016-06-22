app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      @projects = (new Project(data) for data in window.data.projects)
      @skills = {}
