class @Skill
  @all = []
  @max_duration = 0
  @big_technologies = [
    # 'Ruby'
    'Rails'
    'JavaScript'
    'PHP'
    'CSS'
    'Java'
    # 'Symfony'
    # 'CoffeeScript'
    # 'Sass'
    'Angular'
    'Android'
    # 'Spring'
    # 'Python'
    # 'D3'
    # 'Bootstrap'
    # 'Single Page Application'
    # 'Ember'
    'SQL'
    # 'jQuery'
  ]

  @find: (name) ->
    for e in @all
      return e if e.matches name

  @create: (name) ->
    skill = new Skill name
    @all.push skill
    skill

  @find_by_type: (type) ->
    return @all if type == 'all'
    e for e in @all when @big_technologies.indexOf(e.name) >= 0

  constructor: (@name) ->
    @time = 0

  # arg: a string or an array of strings
  matches: (arg) ->
    if typeof arg == "string"
      return @name.toLowerCase() == arg.toLowerCase()
    for string in arg
      return true if @matches string
    false

  add_project: (project) ->
    @time += project.time
    Skill.max_duration = Math.max @time, Skill.max_duration
    @human_time = Helpers.months_to_human @time
    @ago ?= project.end
    @ago = Math.max @ago, project.end
    @human_ago = moment(@ago).fromNow()

  percent: ->
    @time/Skill.max_duration

