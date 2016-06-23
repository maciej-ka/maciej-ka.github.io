require 'test_helper.rb'

class ProjectsTest < ActiveSupport::TestCase
  test 'project duration is presented in human format' do
    use_projects :one_month
    visit '/'
    assert page.has_content? '1 month'

    use_projects :half_year
    visit '/'
    assert page.has_content? '6 months'

    use_projects :year
    visit '/'
    assert page.has_content? '1 year'

    use_projects :year_and_half
    visit '/'
    assert page.has_content? '1 year 6 months'
  end
end
