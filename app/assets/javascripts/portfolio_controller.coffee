app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      for data in window.data.projects
        Project.create data
      @draw_projects_graph()
      @summary = Summary.calculate()

    skills: ->
      return Skill.all if !@query
      e for e in Skill.all when e.matches @query.split(' ')

    projects: ->
      return Project.all if !@query
      e for e in Project.all when e.matches @query.split(' ')

    draw_projects_graph: ->
      chart = d3.select '.projects_chart'

      scale = d3.time.scale()
        .domain [Project.min_date, moment()]
        .range [0, 800]

      bars = chart
        .selectAll 'rect'
        .data @projects()

      bars.enter()
        .append 'rect'
        .style 'opacity', 0.8
        .attr 'width', (d) -> scale(d.end) - scale(d.start)
        .attr 'height', 30
        .attr 'x', (d) -> scale d.start
        .attr 'y', 0

      bars.exit()
        .remove()
