require 'test_helper.rb'

class SummariesTest < ActiveSupport::TestCase
  test 'total experience is a total of projects durations' do
    use_projects :one_month, :half_year
    visit '/'
    assert page.find('.summary').has_content? '7 months'
  end

  test 'parallel projects do not duplicate calculations' do
    use_projects :half_year, :year
    visit '/'
    assert page.find('.summary').has_content? '1 year'
  end

  test 'role experience is counted' do
    use_projects :one_month, :half_year
    visit '/'
    assert page.find('.summary').has_content? 'software architect: 1 month'
    assert page.find('.summary').has_content? 'developer: 6 months'
  end

  test 'in parallel roles some are more important' do
    use_projects :half_year, :year
    visit '/'
    assert page.find('.summary').has_content? 'software architect: 1 year'
  end
end
