class @Project
  constructor: (data) ->
    # copy all data to this project
    $.extend @, data

    # time calculations
    @start = moment @start
    @end = moment @end
    @duration = @end.diff(@start, 'months') + 1
    @human_duration = @months_to_human @duration

  months_to_human: (time) ->
    years = Math.floor(time / 12)
    months = time % 12

    if months == 1
      month_s = '1 month'
    else if months > 1
      month_s = "#{months} months"

    if years == 1
      year_s = '1 year'
    else if years > 1
      year_s = "#{years} years"

    [year_s, month_s].filter((n)->n).join ' '
