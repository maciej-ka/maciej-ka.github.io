@data ?= {}
@data.projects ?= [
  # {
  #   company: 'Me'
  #   name: 'portfolio'
  #   description: ''
  #   link: 'maciej-kasprzyk.pl'

  #   software_house: null
  #   role: 'Web developer'
  #   team: []

  #   start: '2016-06-01'
  #   end: '2016-07-01'
  #   skills: [
  #     'Ruby', 'Rails', 'Minitest', 'Capybara', 'Selenium WebDriver'
  #     'JavaScript', 'Angular', 'CoffeeScript', 'Single Page Application', 'D3'
  #     'Sass', 'Slim', 'Responsive Web Design', 'CSS animations', 'interface design', 'Bootstrap', 'CSS'
  #     'PostgreSQL', 'nginx'
  #   ]
  # }



  {
    company: 'FIFA'
    name: 'IFAB'
    description: 'A portal about football rules.'
    link: 'theifab.com'

    software_house: 'Me & My Friends'
    role: 'Lead web developer'
    team: ['Junior web developer', 'Front-end developer']

    start: '2016-01-01'
    end: '2016-06-01'
    skills: [
      'Java', 'Spring', 'Gradle', 'FluentLenium', 'Elasticsearch'
      'JavaScript', 'Angular', 'CoffeeScript', 'Single Page Application'
      'Bootstrap', 'material design', 'Sass', 'Jade', 'Responsive Web Design', 'CSS animations', 'interface design', 'CSS'
      'CDN', 'SEO', 'Prerender.io', 'gulp', 'MySQL', 'UML'
    ]
  }



  {
    company: 'Apax'
    name: 'DSO'
    description: 'A prototype of online analytics services.'
    link: null

    software_house: null
    role: 'Web developer'
    team: ['UI designer']

    start: '2015-12-01'
    end: '2016-01-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Devise', 'Selenium WebDriver'
      'Ember', 'JavaScript', 'CoffeeScript', 'Single Page Application'
      'Haml', 'Bootstrap', 'Sass', 'CSS animations', 'CSS'
      'Capistrano', 'nginx', 'PostgreSQL', 'UML', 'requirements analysis'
    ]
  }



  {
    company: 'SAWP'
    name: 'Duplikaty'
    description: 'A panel to merge database duplicates.'
    link: null

    software_house: 'Motabi'
    role: 'Senior web developer'
    team: ['SQL Server developer', 'UI designer']

    start: '2015-11-01'
    end: '2015-12-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Selenium WebDriver'
      'Ember', 'JavaScript', 'CoffeeScript', 'Single Page Application'
      'Haml', 'Sass', 'CSS'
      'PostgreSQL', 'UML'
    ]
  }



  {
    company: 'Motabi'
    name: 'the Incrediblest'
    description: 'A To-Do planner.'
    link: null

    software_house: 'Motabi'
    role: 'Senior web developer'
    team: ['Senior web developer', 'Front-end developer']

    start: '2015-10-01'
    end: '2015-11-01'
    skills: [
      'Ruby', 'Rails', 'Minitest', 'Capybara', 'Selenium WebDriver', 'Devise'
      'PayPal', 'Twitter API', 'Facebook API', 'LinkedIn API'
    ]
  }




  {
    company: 'SAWP'
    name: 'SDEG'
    description: 'A workflow for exchanging artist royalties between countries.'
    link: null

    software_house: 'Motabi'
    role: 'Senior web developer'
    team: ['SQL Server developer', 'Front-end developer']

    start: '2015-08-01'
    end: '2015-10-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'factory_girl', 'Capybara', 'Selenium WebDriver'
      'Angular', 'JavaScript', 'CoffeeScript', 'Single Page Application'
      'Haml', 'Sass', 'CSS'
      'PostgreSQL', 'UML'
    ]
  }



  {
    company: 'Motabi'
    name: 'Motabi Intelligence'
    description: 'A panel to configure charts, data sources and layouts.'
    link: null

    software_house: 'Motabi'
    role: 'Web developer'
    team: []

    start: '2015-05-01'
    end: '2015-08-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'factory_girl', 'Capybara', 'Selenium WebDriver'
      'Angular', 'JavaScript', 'CoffeeScript', 'Single Page Application'
      'Haml', 'Sass', 'CSS animations', 'interface design', 'CSS'
      'PostgreSQL', 'UML'
    ]
  }



  {
    company: 'Orange Polska'
    name: 'CERT'
    description: 'A member panel and a portal about DDoS protection services.'
    link: 'cert.orange.pl'

    software_house: 'Motabi'
    role: 'Lead web developer'
    team: ['Web developer', 'Front-end developer']

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
    team: ['Mobile developer #1', 'Mobile developer #2']

    start: '2014-06-01'
    end: '2015-06-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise', 'Savon', 'SOAP'
      'Haml', 'Bootstrap', 'interface design', 'CSS'
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
    team: ['Web developer', 'Front-end developer']

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
    team: ['Developer']

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
    description: 'A loyalty program shop.'
    link: null

    software_house: 'Hemnes'
    role: 'Lead web developer'
    team: ['Web developer', 'Front-end developer']

    start: '2013-12-01'
    end: '2014-03-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Capybara', 'factory_girl', 'Devise'
      'Haml'
      'Capistrano', 'nginx', 'MySQL', 'UML'
    ]
  }



  {
    company: 'One99'
    name: 'Bluewhite'
    description: 'A portal for hospitals with doctor\'s appointment bookings.'
    link: 'bluewhite.pl'

    software_house: 'Beside the Park'
    role: 'Web developer'
    team: ['Senior web developer', 'Senior front-end developer', 'Junior front-end developer', 'UI Designer', 'Tester', 'Copywriter']

    start: '2013-10-01'
    end: '2013-12-01'
    skills: [
      'Ruby', 'Rails'
      'Haml'
      'MySQL'
    ]
  }



  {
    company: 'Moja Gwarancja'
    name: 'Guarantees box'
    description: 'A service to store digitalized receipts of bought products.'
    link: 'guaranteesbox.com'

    software_house: 'Beside the Park'
    role: 'Web developer'
    team: ['Senior web developer', 'Senior front-end developer', 'Junior front-end developer', 'UI Designer', 'Tester', 'Copywriter']

    start: '2013-07-01'
    end: '2013-10-01'
    skills: [
      'Ruby', 'Rails'
      'Haml'
      'SQL', 'MySQL'
    ]
  }



  {
    company: 'Mondelēz International'
    name: 'Induction game v1.0'
    description: 'A platform to train and guide new workers during first months.'
    link: null

    software_house: 'Pracownia Gier Szkoleniowych'
    role: 'Web developer'
    team: []

    start: '2013-01-01'
    end: '2013-06-01'
    skills: [
      'Ruby', 'Rails', 'RSpec', 'Devise'
      'ERB', 'CSS', 'interface design'
      'JavaScript', 'jQuery', 'JS animations'
      'MySQL', 'requirements analysis'
    ]
  }



  {
    company: 'Scott Wilson'
    name: 'Documents database'
    description: 'A storage for documents and advanced search tool.'
    link: null

    software_house: 'High Quality Solutions'
    role: 'Web developer'
    team: []

    start: '2011-06-01'
    end: '2011-11-01'
    skills: [
      'PHP', 'Symfony', 'Doctrine', 'Apache Lucene'
      'HTML', 'CSS', 'interface design'
      'JavaScript', 'jQuery', 'JS animations'
      'MySQL', 'Photoshop', 'SQL'
    ]
  }



  {
    company: 'Polish Post Office'
    name: 'Podręczniki na poczcie'
    description: 'A system to place orders for textbooks bought on a post office.'
    link: null

    software_house: 'High Quality Solutions'
    role: 'Web developer'
    team: []

    start: '2011-02-01'
    end: '2011-06-01'
    skills: [
      'PHP', 'Symfony', 'Doctrine'
      'HTML', 'CSS', 'interface design'
      'JavaScript', 'jQuery', 'Single Page Application'
      'MySQL', 'SQL'
    ]
  }



  {
    company: 'Burda International Polska'
    name: 'Prerelease surveys'
    description: 'System to find best magazine cover and article titles.'
    link: null

    software_house: 'High Quality Solutions'
    role: 'Lead web developer'
    team: ['Web developer']

    start: '2010-11-01'
    end: '2011-02-01'
    skills: [
      'PHP', 'Symfony', 'Doctrine'
      'HTML', 'CSS', 'interface design'
      'JavaScript', 'jQuery'
      'MySQL', 'requirement analysis', 'SQL'
    ]
  }



  {
    company: 'Heineken'
    name: 'Open\'er android app'
    description: 'Music festival application.'
    link: null

    software_house: 'High Quality Solutions'
    role: 'Mobile developer'
    team: ['Mobile developer #1', 'Mobile developer #2']

    start: '2010-07-01'
    end: '2010-11-01'
    skills: [
      'Android', 'Java'
    ]
  }



  {
    company: 'Myslovitz'
    name: 'Android app'
    description: 'Music band application.'
    link: null

    software_house: 'High Quality Solutions'
    role: 'Mobile developer'
    team: ['Mobile developer #1', 'Mobile developer #2']

    start: '2010-03-01'
    end: '2010-07-01'
    skills: [
      'Android', 'Java'
    ]
  }



  {
    company: 'Business Talents'
    name: 'Homepage'
    description: 'Portal and custom CMS.'
    link: null

    software_house: 'High Quality Solutions'
    role: 'Web developer'
    team: ['Front-end developer']

    start: '2009-12-01'
    end: '2010-03-01'
    skills: [
      'PHP', 'Symfony', 'Doctrine'
      'HTML', 'CSS', 'interface design'
      'JavaScript', 'jQuery', 'Single Page Application'
      'MySQL', 'SQL'
    ]
  }



  {
    company: 'EPL Group'
    name: 'Internship in the EU contest'
    description: 'Interactive contest page on Facebook.'
    link: null

    software_house: 'High Quality Solutions'
    role: 'Web developer'
    team: []

    start: '2009-09-01'
    end: '2009-12-01'
    skills: [
      'PHP', 'Symfony', 'Doctrine'
      'HTML', 'CSS'
      'MySQL', 'Facebook API', 'SQL'
    ]
  }



  {
    # company: 'Europejskie Centrum Muzyki Krzysztofa Pendereckiego'
    company: 'Centrum Krzysztofa Pendereckiego'
    name: 'Homepage'
    description: 'Portal and custom CMS.'
    link: null

    software_house: 'High Quality Solutions'
    role: 'Web developer'
    team: ['UI designer']

    start: '2009-05-01'
    end: '2009-09-01'
    skills: [
      'PHP', 'Symfony', 'Doctrine'
      'HTML', 'CSS', 'interface design'
      'JavaScript', 'jQuery', 'Single Page Application'
      'MySQL', 'SQL'
    ]
  }



  {
    company: 'Gemius'
    name: 'Online job postings observer'
    description: 'A tool to scrop job postings and detect changes.'
    link: null

    software_house: 'Gemius'
    role: 'Developer'
    team: []

    start: '2009-02-01'
    end: '2009-05-01'
    skills: [
      'Python'
    ]
  }



  {
    company: 'Gemius'
    name: 'Database warehouse interface'
    description: 'Changes in a database warehouse graphical interface.'
    link: null

    software_house: 'Gemius'
    role: 'Developer'
    team: []

    start: '2008-11-01'
    end: '2009-02-01'
    skills: [
      'ExtJS', 'JavaScript'
    ]
  }



  {
    company: 'Gemius'
    name: 'Bug tracker customization'
    description: 'Changing Mantis, a bug tracker into a task tracker.'
    link: null

    software_house: 'Gemius'
    role: 'Web developer'
    team: []

    start: '2008-09-01'
    end: '2008-11-01'
    skills: [
      'PHP', 'CSS', 'Mantis'
    ]
  }



  {
    company: 'Orange Polska'
    name: 'Software analysis'
    description: 'IFS upgrade and migrationg accounting schema.'
    link: null

    software_house: 'Orange Polska'
    role: 'Analyst'
    team: []

    start: '2008-04-01'
    end: '2008-09-01'
    skills: [
      'UML', 'Use-case analysis', 'requirements analysis', 'Oracle Database', 'PL/SQL'
    ]
  }



  {
    company: 'ARiMR'
    name: 'IACS'
    description: 'Changes in EU system to finance agriculture.'
    link: null

    software_house: 'ABG Spin'
    role: 'Analyst'
    team: []

    start: '2008-01-01'
    end: '2008-04-01'
    skills: [
      'UML', 'Use-case analysis', 'requirements analysis', 'Oracle Database', 'PL/SQL'
    ]
  }



  {
    company: 'Software Business Group'
    name: 'Project management'
    description: 'Management of four projects: 1. sales system for Polish Television, 2. CMS for Feuvert, 3. sales system for Wasa-Barilla, 4. CRM for Support Online.'
    link: null

    software_house: 'Software Business Group'
    role: 'Project Manager'
    team: ['UX designer', 'Java developer', 'PHP developer', 'Front-end developer']

    start: '2007-02-01'
    end: '2008-01-01'
    skills: [
      'project management'
    ]
  }



  {
    company: 'PJWSTK'
    name: 'Peer to Peer computation grid'
    description: 'Platform to send computation task to be calculated parallel, working on a spontanous Peer to Peer network.'
    link: null

    software_house: null
    role: 'Developer'
    team: []

    start: '2006-10-01'
    end: '2006-12-01'
    skills: [
      'Java', 'Peer to peer', 'Java RMI'
    ]
  }



  {
    company: 'Institute of Bankers in Ireland'
    name: 'Software architect'
    description: 'Helping to match required coding standards, understand the custom framework and design database.'
    link: null

    software_house: 'Gateway 2 Future'
    role: 'Software architect'
    team: ['PHP developer #1', 'PHP developer #2', 'Front-end developer', 'Senior developer']

    start: '2006-06-01'
    end: '2006-08-01'
    skills: [
      'PHP', 'Oracle', 'UML'
    ]
  }



  {
    company: 'JOKO Cosmetics'
    name: 'ERP'
    description: 'Software for a cosmetics manufacturer: a warehouse, orders, an evolutionary algorithm for production planning.'
    link: null

    software_house: 'Software Business Group'
    role: 'Software architect'
    team: ['Java developer #1', 'Java developer #2', 'Java developer #3', 'Java developer #4', 'Analyst']

    start: '2006-02-01'
    end: '2007-02-01'
    skills: [
      'UML', 'requirements analysis', 'Java', 'evolutionary programming'
    ]
  }



  {
    company: 'Milch und Zucker'
    name: 'CMS'
    description: 'Rewrite of a site deployment system for Milch und Zucker CMS.'
    link: null

    software_house: 'Software Business Group'
    role: 'Software architect'
    team: ['PHP developer']

    start: '2005-12-01'
    end: '2006-02-01'
    skills: [
      'PHP', 'PHPUnit', 'SQL'
    ]
  }



  {
    company: 'Ministry of Environment'
    name: 'Projects database'
    description: 'An interactive map (just before Google maps API) to place pins and describe ministry projects.'
    link: null

    software_house: 'Software Business Group'
    role: 'Web developer'
    team: ['Front-end developer']

    start: '2005-09-01'
    end: '2005-12-01'
    skills: [
      'PHP', 'MySQL', 'SQL'
    ]
  }



  {
    company: 'Milch und Zucker'
    name: 'XY statistics'
    description: 'ROLAP data import and chart builder enabling to choose x and y axes.'
    link: null

    software_house: 'Software Business Group'
    role: 'Web developer'
    team: ['Front-end developer']

    start: '2005-07-01'
    end: '2005-09-01'
    skills: [
      'PHP', 'MySQL', 'SQL'
    ]
  }



  {
    company: 'Polish Golf Union'
    name: 'GOLF'
    description: 'System to run golf league and individual tournaments.'
    link: null

    software_house: 'Microsoft (Students to Business)'
    role: 'Lead analyst'
    team: ['Analyst #1', 'Analyst #2', 'Analyst #3', 'Analyst #4']

    start: '2005-02-01'
    end: '2005-07-01'
    skills: [
      'UML', 'Use-case analysis', 'requirements analysis', 'SQL Server', 'SQL'
    ]
  }



  {
    company: 'Triplan'
    name: 'Partition wall designer'
    description: 'Setup partition wall by dragging prefabricated components onto drawing.'
    link: null

    software_house: null
    role: 'Developer'
    team: []

    start: '2004-12-01'
    end: '2005-02-01'
    skills: [
      'Flash', 'ActionScript', 'requirements analysis', 'interface design'
    ]
  }



  {
    company: 'Ula Białowąs'
    name: 'Warsaw creator'
    description: 'Drag and drop editior of alternative Warsaw postcard.'
    link: null

    software_house: null
    role: 'Developer'
    team: []

    start: '2004-07-01'
    end: '2004-10-01'
    skills: [
      'MySQL', 'Flash', 'ActionScript', 'HTML', 'CSS'
    ]
  }



  {
    company: 'Ania Okrasko'
    name: 'Homepage'
    description: 'A painter\'s portfolio.'
    link: null

    software_house: null
    role: 'Web developer'
    team: []

    start: '2004-02-01'
    end: '2004-04-01'
    skills: [
      'PHP', 'HTML', 'Apache', 'CSS', 'requirements analysis'
    ]
  }
]
