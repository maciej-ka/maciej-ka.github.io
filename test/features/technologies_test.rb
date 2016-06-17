require 'test_helper.rb'

class TechnologiesTest < ActiveSupport::TestCase
  test 'home' do
    visit '/'
    assert page.has_content? 'Maciej Kasprzyk'
  end
end
