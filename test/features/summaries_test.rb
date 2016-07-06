require 'test_helper.rb'

class SummariesTest < ActiveSupport::TestCase
  test 'total time is a sum of projects time' do
    use_projects :one_month, :half_year
    visit '/'
    assert page.find('.summary').has_content? '7 months'
  end

  test 'parallel projects do not duplicate total time' do
    use_projects :half_year, :year
    visit '/'
    assert page.find('.summary').has_content? '1 year'
  end
end
