import React, { Component } from 'react';
import SectionWrapper from '../components/SectionWrapper'
import Link from 'gatsby-link'

class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <SectionWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                <em>
                  <Link to="/">Go Back</Link>
                </em>
              </p>
              <h1>{data.contentfulBlogPost.title}</h1>
                <div dangerouslySetInnerHTML={{
                  __html: data.contentfulBlogPost.body.body
                }} />
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}

export default PostPage;

export const query = graphql`
  query PostPageQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}){
      title
      slug
      body{
        body
      }
    }
  }
`
