class @Skill
  constructor: (@name) ->
    @months = 0

  add_months: (months) ->
    @months += months
    @human_time = Helpers.months_to_human @months
