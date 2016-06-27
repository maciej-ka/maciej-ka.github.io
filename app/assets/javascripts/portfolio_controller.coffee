app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      for data in window.data.projects
        Project.create data
      # @draw_skills_graph()
      @draw_projects_graph()
      # @watch @projects, @draw_projects_graph, true
      # @watch @query, ->
      #   console.log 'test'
      # @watch @projects, ->
      #   console.log 'test'

    skills: ->
      return Skill.all if !@query
      e for e in Skill.all when e.matches @query.split(' ')

    projects: ->
      return Project.all if !@query
      e for e in Project.all when e.matches @query.split(' ')

    query_changed: ->
      @draw_projects_graph()

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

    draw_projects_graph: ->
      console.log @projects()
      chart = d3.select '.projects_chart'
      scale = d3.time.scale()
        .domain [Project.min_date, moment()]
        # .range [100, 600]
        .range [0, 800]

      # chart.axis()
      #   .orient 'bottom'
      #   .scale scale
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
