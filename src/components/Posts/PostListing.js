import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components"

const StyledBlogLink = styled(Link)`
  color: steelblue;
  text-decoration: none;
`

const StyledArticle = styled.article`
  margin-bottom: 25px;
`

const PostListing = ( props ) => {
  return (
    <StyledArticle>
      <h3><StyledBlogLink to={props.post.slug}>{props.post.title}</StyledBlogLink></h3>
      <div dangerouslySetInnerHTML={{
          __html: props.post.body.body
        }} />
    </StyledArticle>
  )
}

export default PostListing;
