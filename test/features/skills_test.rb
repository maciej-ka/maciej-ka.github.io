require 'test_helper.rb'

class SkillsTest < ActiveSupport::TestCase
  test 'a skill time is a sum of its project durations' do
    use_projects :one_month
    visit '/'
    assert page.find('.skills').has_content? '1 month'

    use_projects :one_month, :half_year
    visit '/'
    assert page.find('.skills').has_content? '7 months'
  end

  test 'search shows matching skills' do
    use_projects :one_month, :year
    visit '/'
    assert page.find('.skills').has_content? 'Rails'
    assert page.find('.skills').has_content? 'C#'
    fill_in 'query', with: 'Rails'
    assert page.find('.skills').has_content? 'Rails'
    assert page.find('.skills').has_no_content? 'C#'
  end

  test 'search is case independent' do
    use_projects :one_month, :year
    visit '/'
    fill_in 'query', with: 'rails'
    assert page.find('.skills').has_content? 'Rails'
  end

  test 'search can be for many skills' do
    use_projects :one_month, :year
    visit '/'
    fill_in 'query', with: 'c# rails'
    assert page.find('.skills').has_content? 'Rails'
    assert page.find('.skills').has_content? 'C#'
  end

  test 'show how long ago was the last experience' do
    project = @@fixtures['year'].clone()
    project['start'] = 12.months.ago
    project['end'] = 3.months.ago
    Rails.configuration.js_data = { projects: [project] }.to_json()
    visit '/'
    assert page.find('.skills').has_content? '3 months ago'
  end
end
