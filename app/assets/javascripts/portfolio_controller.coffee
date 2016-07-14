app.controller 'PortfolioController',
  class PortfolioController
    constructor: ->
      window.c = @
      @Project = Project
      @Summary = Summary
      @Skill = Skill
      @skill_type = 'important'
      @project_time = 'last 2 years'
      @skill_sort_by = 'experience'
      # calculate once
      @read_data()
      @summary = @Summary.calculate()
      @draw_roles_chart()
      @draw_sides_chart()
      @caluculate_project_groups()
      # calculate what neeed more than once
      @recalculate()

    recalculate: ->
      # summary on base of all data
      # charts on base of filtered data
      if @project_time != 'all'
        @read_data (e) -> moment(e.start).isAfter moment().subtract(2, 'years')
      else
        @read_data()
      @draw_projects_charts()

    read_data: (filter) ->
      @Project.reset()
      for data in window.data.projects when !filter || filter data
        @Project.create data

    skills_compare: (a, b) =>
      if @skill_sort_by == 'experience' || a.ago == b.ago
        if a.time < b.time
          return 1
        if a.time > b.time
          return -1
      if a.ago < b.ago
        return 1
      if a.ago > b.ago
        return -1
      return 0

    skills: =>
      skills = Skill.find_by_type @skill_type
      skills.sort @skills_compare
      return skills if !@query
      e for e in skills when e.matches @query.split(' ')

    projects: ->
      return Project.all if !@query
      e for e in Project.all when e.matches @query.split(' ')

    caluculate_project_groups: ->
      # create buckets
      @group_mins = {}
      from = moment().dayOfYear(1).add(1, 'year').subtract(1, 'day')
      @project_groups = []
      id = 0
      loop
        @group_mins[id] ?= moment()
        to = from.clone()
        from = from.subtract 2, 'years'
        projects = []
        for e in @Project.all when from.isBefore(e.start) && to.isAfter(e.start)
          @group_mins[id] = Math.min(@group_mins[id], e.start)
          projects.push e
        @project_groups.push {
          from: from.clone().add 1, 'year'
          to: to.clone()
          projects: projects
          id: id
        }
        id++
        if from.isBefore @Project.min_date
          break

    activate_role: (@active_role) ->
      @draw_roles_chart()

    activate_side: (@active_side) ->
      @draw_sides_chart()

    project_hover: (@active_project) =>
      @draw_projects_charts()

    skill_hover: (@active_skill) =>
      @draw_projects_charts()

    move_project_tooltip: (event, index) ->
      tooltip = document.querySelector(".hover-#{index}")
      tooltip.style.left = "#{event.clientX + 20}px"
      tooltip.style.top = "#{event.clientY + 20}px"

    draw_projects_charts: =>
      if @project_time == 'last 2 years'
        @draw_projects_chart '.last-2-years-chart', @projects(), Project.min_date, moment()
      else
        i = 0
        loop
          @draw_projects_chart ".bucket-#{i}", @project_groups[i].projects, @group_mins[i], @project_groups[i].to
          i++
          break if i >= @project_groups.length
        # for i,e of @project_groups
        #   @draw_projects_chart '.bucket-0', @project_groups[0].projects, @group_mins[0]

    draw_projects_chart: (selector, data, min_date, to) ->
      console.log to
      active = @active_project
      chart = d3.select selector
      scale = d3.time.scale()
        .domain [min_date, to]
        .range [0, 800]
      axis = d3.svg.axis()
        .scale scale
        # .orient 'bottom'
        # .tickFormat d3.time.format('%Y')
        .ticks d3.time.years, 1
        # .tickFormat d3.time.format('%Y')
        # .tickSubdivide 12

      bars = chart
        .selectAll 'rect'
        .data data

      # update
      bars
        .classed 'active': (d) =>
          if @active_project
            return d == @active_project
          if @active_skill
            return d.matches @active_skill.name
          false

      bars.enter()
        .append 'rect'
        .attr 'width', (d) -> 
          scale(d.end) - scale(d.start) - 4
        .attr 'height', 80
        .attr 'x', (d) -> scale d.start
        .attr 'y', 0

      bars.exit()
        .remove()

      chart
        .select '.axis'
        # .append 'g'
        .attr 'transform', 'translate(0,80)'
        .call axis
        # .classed 'axis'

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

