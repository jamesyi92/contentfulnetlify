import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'
import SectionWrapper from '../components/SectionWrapper'

const IndexPage2 = ({ data }) => {

  const postItems = data.allContentfulBlogPost.edges.map(({ node }, index) => {
                      return (
                          <PostListing key={node.title} post={node} currCount={index} />
                        )
                    })

  return (
    <SectionWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mb-4">Blog Posts</h3>
            {postItems}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
export default IndexPage2;

export const query = graphql`
  query IndexPageQuery {
    site{
      siteMetadata{
        title
      }
    }
    allContentfulBlogPost(sort: {fields: [datePosted], order: DESC}){
      edges{
        node{
          slug
          datePosted(formatString: "MMMM DD, YYYY")
          title
          body{
            body
          }
        }
      }
    }
  }
`