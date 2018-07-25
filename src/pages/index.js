import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <div>
    {data.allContentfulBlogPost.edges.map(({ node }) => {
      return (
          <PostListing key={node.id} post={node} />
        )
    })}
  </div>
)
export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site{
      siteMetadata{
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
        }
      }
    }
  }
`