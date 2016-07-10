app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      for data in window.data.projects
        Project.create data
      @summary = Summary.calculate()
      @draw_projects_chart()
      @draw_roles_chart()
      @draw_sides_chart()

    skills: ->
      return Skill.all if !@query
      e for e in Skill.all when e.matches @query.split(' ')

    projects: ->
      return Project.all if !@query
      e for e in Project.all when e.matches @query.split(' ')

    activate_role: (@active_role) ->
      @draw_roles_chart()

    activate_side: (@active_side) ->
      @draw_sides_chart()

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
      @draw_pie_chart '.roles_chart', @summary.roles, @active_role, .6

    draw_sides_chart: ->
      @draw_pie_chart '.sides_chart', @summary.sides, @active_side, .8

    draw_pie_chart: (selector, data, active, rotate)->
      radius = 600 * .35

      chart = d3.select selector

      pie = d3.layout.pie()
        .value (d) -> d.time
        .padAngle .03
        .startAngle rotate * Math.PI
        .endAngle (2 + rotate) * Math.PI

      arc = d3.svg.arc()
        .outerRadius radius * 1
        .innerRadius radius * .2

      label_arc = d3.svg.arc()
        .outerRadius radius * .6
        .innerRadius radius * .6

      arcs = chart
        .select 'g'
        # .attr 'transform', 'translate(50%,50%)'
        .selectAll '.arc'
        .data pie data

      # update
      arcs
        .classed 'active': (d) -> d.data.name == active

      # enter
      g = arcs
        .enter()
        .append 'g'
        .attr 'class', 'arc'
      g.append 'path'
        .attr 'd', arc
      g.append 'text'
        .attr 'transform', (d) -> "translate(#{label_arc.centroid d})"
        .attr 'dy', '.35em'
        .attr 'class', 'title'
        .text (d) ->
          return 'manager' if d.data.name == 'project manager'
          return 'architect' if d.data.name == 'software architect'
          d.data.name
      g.append 'text'
        .attr 'transform', (d) -> "translate(#{label_arc.centroid d})"
        .attr 'dy', '1.35em'
        .attr 'class', 'subtitle'
        .text (d) -> d.data.human_time

    # draw_roles_chart: ->
    #   radius = 600 * .35
    #   active_role = @active_role

    #   chart = d3.select '.roles_chart'

    #   pie = d3.layout.pie()
    #     .value (d) -> d.time
    #     .padAngle .03
    #     .startAngle .8 * Math.PI
    #     .endAngle 2.8 * Math.PI

    #   arc = d3.svg.arc()
    #     .outerRadius radius * 1
    #     .innerRadius radius * .2

    #   label_arc = d3.svg.arc()
    #     .outerRadius radius * .6
    #     .innerRadius radius * .6

    #   arcs = chart
    #     .select 'g'
    #     .selectAll '.arc'
    #     .data pie @summary.roles

    #   # update
    #   arcs
    #     .classed 'active': (d) -> d.data.name == active_role

    #   # enter
    #   g = arcs
    #     .enter()
    #     .append 'g'
    #     .attr 'class', 'arc'
    #   g.append 'path'
    #     .attr 'd', arc
    #   g.append 'text'
    #     .attr 'transform', (d) -> "translate(#{label_arc.centroid d})"
    #     .attr 'dy', '.35em'
    #     .attr 'class', 'title'
    #     .text (d) ->
    #       return 'manager' if d.data.name == 'project manager'
    #       return 'architect' if d.data.name == 'software architect'
    #       d.data.name
    #   g.append 'text'
    #     .attr 'transform', (d) -> "translate(#{label_arc.centroid d})"
    #     .attr 'dy', '1.35em'
    #     .attr 'class', 'subtitle'
    #     .text (d) -> d.data.human_time
