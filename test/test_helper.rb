ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/rails'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

# Webdriver for Firefox v.47 requires marionette
Capybara.register_driver :selenium_firefox do |app|
  Capybara::Selenium::Driver.new(app, browser: :firefox, marionette: true)
end
Capybara.current_driver = :selenium_firefox

class ActiveSupport::TestCase
  include Capybara::DSL

  # load fixtures just once
  @@fixtures = YAML.load_file Rails.root.join('test', 'js_fixtures.yml')

  def use_projects(*names)
    projects = @@fixtures.fetch_values *names.map(&:to_s)
    Rails.configuration.js_data = { projects: projects }.to_json()
  end

  def wait(intervals = 1)
    sleep 0.30 * intervals
  end
end
