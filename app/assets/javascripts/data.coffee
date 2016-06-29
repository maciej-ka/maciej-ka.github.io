@data ?= {}
@data.projects ?= [
  {
    company: 'FIFA'
    name: 'IFAB'
    description: 'A portal about football rules.'
    role: 'Lead developer'
    team_size: 3
    link: 'theifab.com'
    end: '2016-06-01'
    start: '2016-01-01'
    skills: [
      'Java', 'Spring', 'Gradle', 'FluentLenium'
      'JavaScript', 'Angular', 'CoffeeScript'
      'Bootstrap', 'material design', 'Sass', 'Jade'
      'CDN', 'SEO', 'Prerender.io', 'gulp', 'MySQL'
    ]
  }

  {
    company: 'Apax'
    name: 'DSO'
    description: 'A prototype of online analytics services.'
    role: 'Developer'
    team_size: 1
    link: '(intranet)'
    end: '2016-01-01'
    start: '2015-12-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Devise', 'Selenium WebDriver'
      'Ember', 'JavaScript', 'CoffeeScript'
      'Haml', 'Bootstrap', 'Sass'
      'Capistrano', 'nginx', 'PostgreSQL'
    ]
  }

  {
    company: 'SAWP'
    name: 'Duplikaty'
    description: 'A panel to merge database duplicates.'
    role: 'Senior developer'
    team_size: 3
    link: '(intranet)'
    end: '2015-12-01'
    start: '2015-11-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Selenium WebDriver'
      'Ember', 'JavaScript', 'CoffeeScript'
      'Haml', 'Sass'
      'PostgreSQL'
    ]
  }

  {
    company: 'Motabi'
    name: 'the Incrediblest'
    description: ''
    role: 'Developer'
    team_size: 3
    link: ''
    end: '2015-11-01'
    start: '2015-10-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Selenium WebDriver', 'Devise'
      'PayPal', 'Twitter', 'Facebook', 'LinkedIn'
    ]
  }

  {
    company: 'SAWP'
    name: 'SDEG'
    description: 'A workflow for exchanging artist royalties between countries.'
    role: 'Senior developer'
    team_size: 3
    link: '(intranet)'
    end: '2015-10-01'
    start: '2015-08-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'factory_girl', 'Capybara', 'Selenium WebDriver'
      'Angular', 'JavaScript', 'CoffeeScript'
      'Haml', 'Sass'
      'PostgreSQL'
    ]
  }

  {
    company: 'Motabi'
    name: 'Motabi Intelligence'
    description: 'A panel to configure charts, data sources and layouts.'
    role: 'Developer'
    team_size: 1
    link: '(intranet)'
    end: '2015-08-01'
    start: '2015-05-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'factory_girl', 'Capybara', 'Selenium WebDriver'
      'Angular', 'JavaScript', 'CoffeeScript'
      'Haml', 'Sass'
      'PostgreSQL'
    ]
  }

  {
    company: 'Orange Polska'
    name: 'CERT'
    description: 'A member panel and a portal about DDoS protection services.'
    role: 'Senior developer'
    team_size: 3
    link: 'cert.orange.pl'
    end: '2015-01-01'
    start: '2014-09-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise', 'Savon', 'SOAP', 'ComfortableMexicanSofa'
      'Haml'
      'Capistrano', 'PostgreSQL'
    ]
  }

  {
    company: 'DMT'
    name: 'Logneto'
    description: ''
    role: 'Developer'
    team_size: 1
    link: ''
    end: '2015-06-01'
    start: '2014-06-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise', 'Savon', 'SOAP'
      'Haml', 'Bootstrap'
      'Capistrano', 'nginx', 'MySQL', 'Magento', 'PrestaShop'
    ]
  }

  {
    company: 'Juszkiewicz'
    name: 'Personal Lawyers'
    description: ''
    role: 'Lead developer'
    team_size: 3
    link: 'personallawyers.pl'
    end: '2014-06-01'
    start: '2014-05-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise'
      'Haml'
      'Capistrano', 'nginx', 'MySQL'
    ]
  }

  {
    company: 'Top Market'
    name: 'Commercial videos player'
    description: ''
    role: 'Lead developer'
    team_size: 2
    link: ''
    end: '2014-05-01'
    start: '2014-03-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise'
      'Haml'
      'Capistrano', 'nginx', 'MySQL', 'Bash Script', 'Raspberry Pi'
    ]
  }

  {
    company: 'Top Market'
    name: 'Punktożercy'
    description: ''
    role: 'Lead developer'
    team_size: 3
    link: ''
    end: '2014-03-01'
    start: '2013-11-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise'
      'Haml'
      'Capistrano', 'nginx', 'MySQL'
    ]
  }

  {
    company: 'Beside the Park'
    name: 'Bluewhite'
    description: ''
    role: 'Developer'
    team_size: 5
    link: 'bluewhite.pl'
    end: '2013-12-01'
    start: '2013-10-01'
    skills: [
      'Ruby', 'Rails'
      'Haml'
    ]
  }

  {
    company: 'Beside the Park'
    name: 'Guarantees box'
    description: ''
    role: 'Developer'
    team_size: 5
    link: 'guaranteesbox.com'
    end: '2013-10-01'
    start: '2013-07-01'
    skills: [
      'Ruby', 'Rails'
      'Haml'
      'SQL'
    ]
  }

  {
    company: 'Mondelēz International'
    name: 'Induction game'
    description: ''
    role: 'Developer'
    team_size: 2
    link: ''
    end: '2013-06-01'
    start: '2013-01-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Devise'
      'ERB', 'CSS'
      'JavaScript', 'jQuery'
      'MySQL'
    ]
  }
]
