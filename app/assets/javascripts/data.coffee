@data ?= {}
@data.projects ?= [
  {
    company: 'FIFA'
    name: 'IFAB'
    description: 'A portal about football rules.'
    link: 'theifab.com'
    software_house: 'Me & My Friends'

    role: 'Lead web developer'
    partners: ['Junior web developer', 'Front-end developer']
    scope: [
      'Custom CMS (UI, JavaScript, HTML and CSS)'
      'Front-end JavaScript'
      'Database design'
      'Compliance with SEO recommendations'
      'Solving technical problems across the team'
      'Technologies choice and setup'
      'Automated tests'
      'Management of junior developer'
    ]
    out_of_scope: [
      'Most of front-end HTML and CSS'
      'Most of REST JSON API'
      'Front-end interface design'
      'Choice of Java and Spring technologies'
      'Linux servers setup'
      'Jenkins application deployment'
    ]

    start: '2016-01-01'
    end: '2016-06-01'
    skills: [
      'Java', 'Spring', 'Gradle', 'FluentLenium', 'Elasticsearch'
      'JavaScript', 'Angular', 'CoffeeScript', 'Single Page Application'
      'Bootstrap', 'material design', 'Sass', 'Jade', 'Responsive Web Design', 'CSS animations',
      'CDN', 'SEO', 'Prerender.io', 'gulp', 'MySQL', 'UML'
    ]
  }



  {
    company: 'Apax'
    name: 'DSO'
    description: 'A prototype of online analytics services.'
    link: null
    software_house: null

    role: 'Lead web developer'
    partners: ['UI designer']
    scope: [
      'Requirements analysis'
      'Front-end JavaScript, HTML and CSS'
      'REST JSON API'
      'Database design'
      'Linux server setup'
      'Automated tests'
    ]
    out_of_scope: [
      'Interface design'
    ]

    start: '2015-12-01'
    end: '2016-01-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Devise', 'Selenium WebDriver'
      'Ember', 'JavaScript', 'CoffeeScript', 'Single Page Application'
      'Haml', 'Bootstrap', 'Sass', 'CSS animations'
      'Capistrano', 'nginx', 'PostgreSQL', 'UML', 'Requirements analysis'
    ]
  }



  {
    company: 'SAWP'
    name: 'Duplikaty'
    description: 'A panel to merge database duplicates.'
    link: null
    software_house: null

    role: 'Senior web developer'
    partners: ['Senior SQL Server developer', 'UI designer']
    scope: [
      'Front-end HTML and JavaScript'
      'REST JSON API'
      'Database design'
      'Automated tests'
    ]
    out_of_scope: [
      'Most of interface design'
      'Most of CSS'
      'Linux server setup'
      'Transact-SQL script to detect duplicates'
      'Calling scripts in SQL Server'
    ]

    start: '2015-11-01'
    end: '2015-12-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Selenium WebDriver'
      'Ember', 'JavaScript', 'CoffeeScript', 'Single Page Application'
      'Haml', 'Sass'
      'PostgreSQL', 'UML'
    ]
  }



  {
    company: 'Motabi'
    name: 'the Incrediblest'
    description: 'A To-Do planner.'
    link: null
    software_house: null

    role: 'Senior web developer'
    partners: ['Senior web developer', 'Front-end developer']
    scope: [
      'PayPal payments'
      'Recurring payments'
      'Sign in using email, Twitter, Facebook or LinkedIn'
      'Ability to link many social accounts to one user'
      'Automated tests'
    ]
    out_of_scope:
      [
        'All of the base To-Do planner functionality'
      ]

    start: '2015-10-01'
    end: '2015-11-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Selenium WebDriver', 'Devise'
      'PayPal', 'Twitter', 'Facebook', 'LinkedIn'
    ]
  }




  {
    company: 'SAWP'
    name: 'SDEG'
    description: 'A workflow for exchanging artist royalties between countries.'
    link: null
    software_house: null

    role: 'Senior web developer'
    partners: ['Senior SQL Server developer', 'Front-end developer']
    scope: [
      'Front-end JavaScript and HTML'
      'REST JSON API'
      'Database design'
      'Automated tests'
    ]
    out_of_scope: [
      'Most of Interface design and CSS'
      'Pulling dictionary data from origin SQL Server'
    ]

    start: '2015-08-01'
    end: '2015-10-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'factory_girl', 'Capybara', 'Selenium WebDriver'
      'Angular', 'JavaScript', 'CoffeeScript', 'Single Page Application'
      'Haml', 'Sass'
      'PostgreSQL', 'UML'
    ]
  }



  {
    company: 'Motabi'
    name: 'Motabi Intelligence'
    description: 'A panel to configure charts, data sources and layouts.'
    link: null
    software_house: null

    role: 'Lead web developer'
    partners: []
    scope: [
      'Builder of Motabi Intelligence Instances'
      'Drag and drop layout editing'
      'Interface design, HTML, CSS and JavaScript'
      'JSON REST API'
      'Database design'
      'Automated tests'
    ]
    out_of_scope: [
      'Motabi Intelligence Application'
    ]

    start: '2015-05-01'
    end: '2015-08-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'factory_girl', 'Capybara', 'Selenium WebDriver'
      'Angular', 'JavaScript', 'CoffeeScript', 'Single Page Application'
      'Haml', 'Sass', 'CSS animations'
      'PostgreSQL', 'UML'
    ]
  }



  {
    company: 'Orange Polska'
    name: 'CERT'
    description: 'A member panel and a portal about DDoS protection services.'
    link: 'cert.orange.pl'
    software_house: null

    role: 'Lead web developer'
    partners: ['Web developer', 'Front-end developer']
    scope: [
      'Importing data from Arbor database'
      'Reports in member panel'
      'Support for content translations in Comfy CMS'
      'New roles in Comfy CMS user management'
      'Database design'
      'Automated tests'
    ]
    out_of_scope: [
      'Interface design'
      'Connecting to Arbor database'
      'Production deployment'
      'Linux server configuration'
    ]

    start: '2014-09-01'
    end: '2015-01-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise', 'Savon', 'SOAP', 'ComfortableMexicanSofa'
      'Haml'
      'Capistrano', 'PostgreSQL', 'UML'
    ]
  }



  {
    company: 'DMT'
    name: 'Logneto'
    description: 'An warehouse solution for eCommerce sellers.'
    link: null
    software_house: 'Hemnes'

    role: 'Lead web developer'
    partners: ['Mobile developer', 'Mobile developer']
    scope: [
      'Interface design, HTML and CSS'
      'Panel to manage products catalog'
      'REST JSON API'
      'Parts of data import from PrestaShop and Magento'
      'Parts of connection to warehouse API'
      'Automated tests'
      'Linux server configuration'
    ]
    out_of_scope: [
      'Mobile application'
      'Warehouse application'
    ]

    start: '2014-06-01'
    end: '2015-06-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise', 'Savon', 'SOAP'
      'Haml', 'Bootstrap'
      'Capistrano', 'nginx', 'MySQL', 'Magento', 'PrestaShop', 'UML'
    ]
  }




  {
    company: 'Juszkiewicz'
    name: 'Personal Lawyers'
    description: 'Messenger for law office and it\'s customers'
    link: 'personallawyers.pl'
    software_house: 'Hemnes'

    role: 'Lead web developer'
    partners: ['Web developer', 'Front-end developer']
    scope: [
      'Lawyer panel'
      'Parts of customer panel'
      'Database design'
      'Automated tests'
      'Linux server configuration'
    ]
    out_of_scope: [
      'Interface design'
      'CSS'
    ]

    start: '2014-05-01'
    end: '2014-06-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise'
      'Haml'
      'Capistrano', 'nginx', 'MySQL'
    ]
  }



  {
    company: 'Top Market'
    name: 'Commercial videos player'
    description: 'A supermarket player of commercial videos on Raspberry Pi.'
    link: null
    software_house: 'Hemnes'

    role: 'Lead developer'
    partners: ['Developer']
    scope: [
      'Rewrite of legacy player app'
      'Server to upload and manage commercial videos'
      'Database design'
      'Automated tests'
      'Interface design and CSS'
      'Linux server configuration'
    ]
    out_of_scope: [
      'Option to show static images'
    ]

    start: '2014-03-01'
    end: '2014-05-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise'
      'Haml'
      'Capistrano', 'nginx', 'MySQL', 'Bash Script', 'Raspberry Pi'
    ]
  }



  {
    company: 'Top Market'
    name: 'Punktożercy'
    description: 'A loyalty programme shop.'
    link: null
    software_house: 'Hemnes'

    role: 'Lead web developer'
    partners: ['Web developer', 'Front-end developer']
    scope: [
      'Panel to edit product catalog'
      'Registering loyalty points incomes'
      'Loyalty points shop'
      'Database design'
      'Automated tests'
      'Interface design and CSS'
      'Linux server configuration'
    ]
    out_of_scope: [
      'Facebook integration'
      'Interface design'
      'CSS'
      'Javascript'
    ]

    start: '2013-11-01'
    end: '2014-03-01'
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
