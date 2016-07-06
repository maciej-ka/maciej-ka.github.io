class @Summary
  @months = {}

  @to_key: (date) ->
    date.format 'YYYY.MM'

  @add_project: (project) ->
    role = @get_role project.role.toLowerCase()
    date = project.start.clone()
    while date < project.end
      key = @to_key date
      @months[key] = @get_role [role, @months[key]]
      date.add 1,'month'

  @calculate: ->
    result = { time: 0, roles:[] }
    roles = {}
    for month, role of @months
      result.time++
      roles[role] ?= 0
      roles[role]++
    result.human_time = Helpers.months_to_human result.time
    for name, time of roles
      result.roles.push { name: @human_role_name(name), time: time, human_time: Helpers.months_to_human time }
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
