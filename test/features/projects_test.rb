require 'test_helper.rb'

class ProjectsTest < ActiveSupport::TestCase
  test 'a project duration is presented in a human format' do
    use_projects :one_month
    visit '/'
    assert page.find('.projects').has_content? '1 month'

    use_projects :half_year
    visit '/'
    assert page.find('.projects').has_content? '6 months'

    use_projects :year
    visit '/'
    wait
    assert page.find('.projects').has_content? '1 year'

    use_projects :year_and_half
    visit '/'
    assert page.find('.projects').has_content? '1 year 6 months'
  end

  test 'search shows only matching projects' do
    use_projects :one_month, :year
    visit '/'
    assert page.find('.projects').has_content? 'A small webpage'
    assert page.find('.projects').has_content? 'A game'
    fill_in 'query', with: 'Rails'
    assert page.find('.projects').has_content? 'A small webpage'
    assert page.find('.projects').has_no_content? 'A game'
  end

  test 'search can be for many skills' do
    use_projects :one_month, :year
    visit '/'
    fill_in 'query', with: 'c# rails'
    assert page.find('.projects').has_content? 'A small webpage'
    assert page.find('.projects').has_content? 'A game'
  end

  test 'project dates are shown' do
    use_projects :one_month
    visit '/'
    assert page.find('.projects').has_content? '2014.01'
    assert page.find('.projects').has_content? '2014.02'
  end
end
