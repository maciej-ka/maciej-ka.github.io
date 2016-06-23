require 'test_helper.rb'

class SkillsTest < ActiveSupport::TestCase
  test 'a skill total time is a sum of its project durations' do
    use_projects :one_month
    visit '/'
    assert page.find('.skills').has_content? '1 month'

    use_projects :one_month, :half_year
    visit '/'
    assert page.find('.skills').has_content? '7 months'
  end
end
