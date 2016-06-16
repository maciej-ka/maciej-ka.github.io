require 'test_helper.rb'

class TechnologiesTest < ActiveSupport::TestCase
  test 'home' do
    visit '/'
    assert page.has_content? 'asprzy'
  end
end
