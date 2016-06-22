require 'test_helper.rb'

class ProjectsTest < ActiveSupport::TestCase
  test 'project duration is counted' do
    visit '/'
    assert page.has_content? '3 months'
  end
end
