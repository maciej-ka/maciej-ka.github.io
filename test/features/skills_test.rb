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

  test 'searching hides unmatched skills' do
    use_projects :one_month, :year
    visit '/'
    assert page.find('.skills').has_content? 'Rails'
    assert page.find('.skills').has_content? 'C#'
    fill_in 'query', with: 'Rails'
    assert page.find('.skills').has_content? 'Rails'
    assert page.find('.skills').has_no_content? 'C#'

    # search two skills
  end
end
