class @Summary
  @months = {}

  @to_key: (date) ->
    date.format 'YYYY.MM'

  @add_project: (project) ->
    date = project.start.clone()
    while date < project.end
      @months[@to_key date] = true
      date.add 1,'month'

