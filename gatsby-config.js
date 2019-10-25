module.exports = {
  // siteMetadata is used for sitemap.xml
  siteMetadata: {
    siteUrl: `https://magazine-example.livingdocs.io/sitemap.xml` // @TODO swap out for your host
  },
  plugins: [
    {
      resolve: 'gatsby-source-livingdocs',
      options: {
        // The accessToken is accessed at buildtime and set in netlify in this case
        accessToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJsaXZpbmcgYmxvZyIsInByb2plY3RJZCI6NjE2LCJjaGFubmVsSWQiOjU5NiwidHlwZSI6ImNsaWVudCIsImp0aSI6IjRmMTFkNmQ5LTFhZTMtNDg2MS1hMTIyLTg1YmM1OTFhYmU5OSIsImNvZGUiOiI0ZjExZDZkOS0xYWUzLTQ4NjEtYTEyMi04NWJjNTkxYWJlOTkiLCJpYXQiOjE1NzE5ODk3NTN9.j3hKM2NAc8iMwNIiU2iNUkFTWpeT2jlOiMabnHgHlH4',

        // limit: 10, Default=10. Max=100. Defines how many documents are gathered per request.
        // recursion: true, Default=true changing not advised.
        // recursion: false - limit will now be the number of documents you recieve back.

      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://magazine-example.livingdocs.io/', // @TODO swap out for your host
        sitemap: 'https://magazine-example.livingdocs.io/sitemap.xml', // @TODO swap out for your host
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'living-times', // @TODO swap out for your name / icon
        short_name: 'living-times',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui',
        icon: 'src/resources/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/resources/stylesheets/living-times.scss'] // @TODO swap out for your stylesheets
      }
    }
  ]
}
