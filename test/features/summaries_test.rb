require 'test_helper.rb'

class SummariesTest < ActiveSupport::TestCase
  test 'total experience is counted' do
    use_projects :one_month, :half_year
    visit '/'
    assert page.find('.summary').has_content? '7 months'
  end

  test 'parallel projects do not duplicate time' do
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

  test 'in parallel projects some roles are more important to report' do
    use_projects :half_year, :year
    visit '/'
    assert page.find('.summary').has_content? 'software architect: 1 year'
  end

  test 'web development is divided into backend, frontend and fullstack' do
    use_projects :one_month, :half_year, :year_and_half
    visit '/'
    assert page.find('.summary').has_content? 'frontend: 1 year'
    assert page.find('.summary').has_content? 'backend: 1 month'
    assert page.find('.summary').has_content? 'fullstack: 6 months'
  end
end
