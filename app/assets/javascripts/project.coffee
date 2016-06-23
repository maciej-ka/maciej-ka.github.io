class @Project
  constructor: (data, skills) ->
    # copy all data to this project
    $.extend @, data
    @skills ?= []

    # time calculations
    @start = moment @start
    @end = moment @end
    @months = @end.diff(@start, 'months') + 1
    @human_time = Helpers.months_to_human @months

    for name in @skills
      skills[name] ?= new Skill name
      skills[name].add_months @months
