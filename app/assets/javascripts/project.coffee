class @Project
  @all = []
  @min_date = moment()

  @create: (data) ->
    @all.push(new Project data)

  constructor: (data) ->
    # copy all data to self
    $.extend @, data
    @init_time()
    @skills = @parse_skills(data.skills || [])

  init_time: ->
    @start = moment @start
    @end = moment @end
    @months = @end.diff @start, 'months'
    @human_time = Helpers.months_to_human @months
    Project.min_date = Math.min Project.min_date, @start

  parse_skills: (skills) ->
    for name in skills
      skill = Skill.find(name) || Skill.create(name)
      skill.add_months @months
      skill

  matches: (query) ->
    for e in @skills
      return true if e.matches query
    false
