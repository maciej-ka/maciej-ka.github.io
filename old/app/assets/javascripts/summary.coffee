class @Summary
  @months = {}

  @to_key: (date) ->
    date.format 'YYYY.MM'

  @add_project: (project) ->
    role = @get_role project.role.toLowerCase()
    date = project.start.clone()
    side = @get_project_side project
    while date < project.end
      key = @to_key date
      @months[key] ?= {}
      @months[key].role = @get_role [role, @months[key].role]
      @months[key].side = @max_side [side, @months[key].side]
      date.add 1,'month'

  @calculate: ->
    result = { time: 0, roles:[], sides:[] }
    sides = { 'frontend':0, 'backend':0, 'fullstack':0, 'mobile':0 }
    roles = {}
    for month, data of @months
      result.time++
      roles[data.role] ?= 0
      roles[data.role]++
      sides[data.side]++
    result.human_time = Helpers.months_to_human result.time
    for name, time of roles
      result.roles.push { name: @human_role_name(name), time: time, human_time: Helpers.months_to_human time }
    for name, time of sides when name != 'undefined'
      result.sides.push { name: name, time: time, human_time: Helpers.months_to_human time }
    result

  # arg can be role string or array of roles
  @get_role: (arg) ->
    return 'architect' if arg.indexOf('architect') >= 0
    return 'developer' if arg.indexOf('developer') >= 0
    return 'manager' if arg.indexOf('manager') >= 0
    return 'analyst' if arg.indexOf('analyst') >= 0
    return arg[0] if Array.isArray arg
    arg

  @human_role_name: (name) ->
    return 'software architect' if name == 'architect'
    return 'project manager' if name == 'manager'
    name

  @get_project_side: (project) ->
    for skill in @frontend_skills
      if project.matches skill
        frontend = 'frontend'
        break
    for skill in @backend_skills
      if project.matches skill
        backend = 'backend'
        break
    for skill in @mobile_skills
      if project.matches skill
        mobile = 'mobile'
        break
    @max_side [frontend, backend, mobile]

  @max_side: (arr) ->
    return 'mobile' if arr.indexOf('mobile') >= 0
    return 'fullstack' if arr.indexOf('fullstack') >= 0
    return 'fullstack' if arr.indexOf('backend') >= 0 && arr.indexOf('frontend') >= 0
    return 'backend' if arr.indexOf('backend') >= 0
    return 'frontend' if arr.indexOf('frontend') >= 0
    undefined

  @frontend_skills = [
    'JavaScript'
    'ExtJS'
    'Angular'
    'Ember'
    'CoffeeScript'
    'jQuery'
    'Single Page Application'
    'CSS'
    'CSS animations'
    'Sass'
    'Bootstrap'
    'interface design'
    'material design'
    'Responsive Web Design'
    'D3'
    'Flash'
    'ActionScript'
  ]

  @backend_skills = [
    'Rails'
    'Spring'
    'PHP'
    'Symfony'
    'Python'
    'Java'
  ]

  @mobile_skills = [
    'Android'
  ]
