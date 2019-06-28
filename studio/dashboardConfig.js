export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d159652fe398979085db875',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bihdo8yk',
                  apiId: '29e70702-46a8-46cd-ac9a-5ca36f200dcd'
                },
                {
                  buildHookId: '5d159653fe39892ddc5db825',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yv19ba92',
                  apiId: 'b8ee2de8-faae-4781-a20b-401127d8f412'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tjgore/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yv19ba92.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
