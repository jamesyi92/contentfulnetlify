import React, { Component } from 'react';

class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>{data.contentfulBlogPost.title}</h1>
        <div dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.body
        }} />
      </div>
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
