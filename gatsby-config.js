module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '5q6evypthjgp',
        accessToken: '8b3acef24e6a6e983f563d7b496b2f13600d79203446002b4e16f22fca9ba3a5'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-next'
  ],
}
