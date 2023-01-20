const routes = [
  {
    name: 'Services', href: '/services', 
    subroutes: [
      {name: 'Brand design', href: '/services/design'},
      {name: 'Content generation', href: '/services/content-generation'},
      {name: 'Web development', href: 'services/web-design'},
      {name: 'Marketing automation', href: 'services/marketing-automation'},
      {name: 'Marketing strategy', href: 'services/marketing-strategy'},
      {name: 'Executive coaching', href: 'services/coaching'},
  ]},
  {
    name: 'Company',
    subroutes: [
      {name: 'About', href: '/company/about'},
      {name: 'Team', href: '/company/team'},
    ]
  },
  {
    name: 'Resources',
    subroutes: [
      {name: 'Blog', href: '/blog'},
      {name: 'Case studies', href: '/resources/resource-library'}
    ]
  }
]

export default routes;