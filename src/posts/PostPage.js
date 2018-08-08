import React, { Component } from 'react';
import SectionWrapper from '../components/SectionWrapper'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'



class PostPage extends Component {

  renderBlogImg(data) {
    if(data.contentfulBlogPost.featuredImage !== null){
      return( 
        <div className="col-md-8 mb-4 offset-md-2">
          <Img sizes={data.contentfulBlogPost.featuredImage.sizes} />
        </div>
      )
    }
    else {
      return null;
    }
  }

  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <Helmet title={data.contentfulBlogPost.title} />
        <SectionWrapper>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <em>
                    <Link to="/">Go Back</Link>
                  </em>
                </p>
              </div>
              {this.renderBlogImg(data)}
              <div className="col-md-12">
                <h1>{data.contentfulBlogPost.title}</h1>
                  <div dangerouslySetInnerHTML={{
                    __html: data.contentfulBlogPost.body.body
                  }} />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </React.Fragment>
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
      featuredImage{
        sizes(maxWidth: 840){
          ...GatsbyContentfulSizes
        }
        resolutions{
          src
          srcSet
          base64
        }
      }
    }
  }
`
