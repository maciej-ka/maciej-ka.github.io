class @Project
  @reset: ->
    @min_data = moment()
    @all = []
    Skill.all = []

  @create: (data) ->
    @all.push(new Project data)

  constructor: (data) ->
    # copy all data to self
    $.extend @, data
    @init_time()
    @skills = @parse_skills(data.skills || [])
    Summary.add_project @

  init_time: ->
    @start = moment @start
    @end = moment @end
    @time = @end.diff @start, 'months'
    @human_time = Helpers.months_to_human @time
    Project.min_date = Math.min @start, Project.min_date

  parse_skills: (skills) ->
    for name in skills
      skill = Skill.find(name) || Skill.create(name)
      skill.add_project @
      skill

  matches: (query) ->
    for e in @skills
      return true if e.matches query
    false
