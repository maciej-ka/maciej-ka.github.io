# Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
# or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.

# = require jquery
# = require jquery_ujs
# = require bootstrap
# = require perfect-scrollbar
# = require angular
# = require angular-perfect-scrollbar
# = require moment
# = require d3
#
# = require_self
# = require summary
# = require project
# = require skill
# = require portfolio_controller
# = require data

# @app = angular.module 'portfolio', ['']
@app = angular.module 'portfolio', ['perfect_scrollbar']

@Helpers =
  # format date in style of linkedIn
  months_to_human: (time) ->
    years = Math.floor(time / 12)
    months = time % 12

    str = ''
    str += '1 year ' if years == 1
    str += "#{years} years " if years > 1
    str += '1 month ' if months == 1
    str += "#{months} months" if months > 1
    str.trim()
