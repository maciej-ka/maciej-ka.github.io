app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      for data in window.data.projects
        Project.create data
      @summary = Summary.calculate()
      @draw_projects_chart()
      @draw_roles_chart()

    skills: ->
      return Skill.all if !@query
      e for e in Skill.all when e.matches @query.split(' ')

    projects: ->
      return Project.all if !@query
      e for e in Project.all when e.matches @query.split(' ')

    activate_role: (@active_role) ->
      # @arcs.data @pie @summary.roles
      @draw_roles_chart()

    draw_projects_chart: ->
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

    draw_roles_chart: ->
      # width = 660
      width = $('.roles_chart').width()
      height = $('.roles_chart').height()
      radius = Math.min(width/1.3, height/1.3) / 2
      active_role = @active_role

      # color = d3.scale.ordinal().range([
      #   '#98abc5'
      #   '#8a89a6'
      #   '#7b6888'
      #   '#6b486b'
      #   '#a05d56'
      #   '#d0743c'
      #   '#ff8c00'
      # ])
      arc = d3.svg.arc()
        .outerRadius radius - 10
        .innerRadius 79

      labelArc = d3.svg.arc()
        .outerRadius radius - 40
        .innerRadius radius - 40

      pie = d3.layout.pie()
        .value (d) -> d.time
        .padAngle .02

      chart = d3.select '.roles_chart'

      container = chart.select 'g'
        .attr 'transform', "translate(#{width/2}, #{height/2})"

      arcs = container
        .selectAll '.arc'
        .data pie @summary.roles

      # update
      arcs
        .classed 'active': (d) -> d.data.name == active_role

      # enter
      g = arcs
        .enter()
        .append 'g'
        .attr 'class', 'arc'
      g.append 'path'
        .attr 'd', arc
        .style 'fill', (d) -> '#222'
        # .style 'fill', (d) -> color d.data.time
      g.append 'text'
        .attr 'transform', (d) -> "translate(#{labelArc.centroid d})"
        .attr 'dy', '.35em'
        .text (d) -> d.data.name
      g.append 'text'
        .attr 'transform', (d) -> "translate(#{labelArc.centroid d})"
        .attr 'dy', '1.35em'
        .attr 'class', 'subtitle'
        .text (d) -> d.data.human_time
