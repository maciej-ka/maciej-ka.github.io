# Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
# or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.

# = require jquery
# = require jquery_ujs
# = require angular
# = require moment
# = require d3
#
# = require_self
# = require project
# = require skill
# = require portfolio_controller
# = require data

@app = angular.module 'portfolio', []

@Helpers =
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
