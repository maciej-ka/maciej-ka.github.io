app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      for data in window.data.projects
        Project.create data
      @draw_skills_graph()

    skills: ->
      return Skill.all if !@query
      e for e in Skill.all when e.matches @query.split(' ')

    projects: ->
      return Project.all if !@query
      e for e in Project.all when e.matches @query.split(' ')

    draw_skills_graph: ->
      d3
      .select '.skills_chart'
      .selectAll 'rect'
      .data @skills
      .enter()
        .append 'rect'
        .attr 'width', 30
        .attr 'height', (d) -> d.months * 10
        .attr 'x', (d, i) -> i * 35
        .attr 'y', (d) -> 300 - d.months * 10

