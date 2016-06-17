ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/rails'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

# Firefox v.47 requires marionette
Capybara.register_driver :selenium_firefox do |app|
  Capybara::Selenium::Driver.new(app, browser: :firefox, marionette: true)
end
Capybara.current_driver = :selenium_firefox

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  def setup
    set_js_data()
  end

  # variables to make js_data conditional
  # suite name: self.class.name (e.g. 'TechnologiesTest')
  # test name: method_name() (e.g. 'test_home')
  def set_js_data
    fixtures = YAML.load_file Rails.root.join('test', 'js_fixtures.yml')
    data = { projects: [fixtures['rails_project']] }
    Rails.configuration.js_data = data.to_json()
  end

  # Add more helper methods to be used by all tests here...
  include Capybara::DSL

  def wait(intervals = 1)
    sleep 0.30 * intervals

  end
end
