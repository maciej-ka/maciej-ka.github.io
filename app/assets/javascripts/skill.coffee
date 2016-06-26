class @Skill
  @all = []

  @find: (name) ->
    for e in @all
      return e if e.matches name

  @create: (name) ->
    skill = new Skill name
    @all.push skill
    skill

  constructor: (@name) ->
    @months = 0

  # arg: a string or an array of strings
  matches: (arg) ->
    if typeof arg == "string"
      return @name.toLowerCase() == arg.toLowerCase()
    for string in arg
      return true if @matches string
    false

  add_months: (months) ->
    @months += months
    @human_time = Helpers.months_to_human @months

