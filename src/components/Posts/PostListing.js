import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components"

const StyledBlogLink = styled(Link)`
  color: steelblue;
  text-decoration: none;
`

const StyledArticle = styled.div`
  margin-bottom: 25px;
  padding: 30px;
  border: 1px solid #cdcdcd;
`

const PostListing = ( props ) => {



  return (
    <StyledArticle>
      <h3><StyledBlogLink to={props.post.slug}>{props.post.title}</StyledBlogLink></h3>
      <p>{props.post.datePosted}</p>
      <div dangerouslySetInnerHTML={{
          __html: props.post.body.body
        }} />
    </StyledArticle>
  )
}

export default PostListing;
