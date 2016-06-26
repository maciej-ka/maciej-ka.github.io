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

  test 'search shows only matching skills' do
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

  # search of several skills finds any matching data
  # skills can be defined using aliases
end
