import React, { Component } from 'react';
import * as contentful from 'contentful';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import SectionWrapper from '../components/SectionWrapper';

export default class contentfulpage extends Component {




  state = {
    contentType: 'Blog Posts',
    posts: []
  }

  client = contentful.createClient({
    space: process.env.GATSBY_CONTENTFUL_SPACE,
    accessToken: process.env.GATSBY_CONTENTFUL_TOKEN
  })

  // componentDidMount() {
  //   this.client.getEntries({
  //     content_type: 'blogPost'
  //   })
  //     .then(resp => {
  //       console.log(resp.items);
  //       this.setState({
  //         posts: resp.items
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  showContentfulPosts = () => {
    let contentType = this.state.contentType;
    if(this.state.contentType === 'Webinars'){
      contentType = 'webinar'
    } else if(this.state.contentType === 'Blog Posts'){
      contentType = 'blogPost'
    }
    this.client.getEntries({
      content_type: contentType
    })
    .then(resp => {
      console.log(resp.items);
      this.setState({
        posts: resp.items
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  clearPosts = () => {
    this.setState({
      posts: []
    })
  }

  selectChangeHandler = (e) => {
    this.setState({
      contentType: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <SectionWrapper>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <h3>Contentful API Test</h3>
                <select onChange={this.selectChangeHandler} className="form-control mt-3">
                  <option>Blog Posts</option>
                  <option>Webinars</option>
                </select>
                <button className="btn btn-danger btn-md mb-3 mt-3 mr-2" onClick={this.showContentfulPosts}>Fetch from Contentful!</button>
                <button className="btn btn-warning btn-md mb-3 mt-3" onClick={this.clearPosts}>Clear</button>
                {this.state.posts.map(post => {
                  return (
                      <div key={post.sys.id} className="card mb-3">
                        <div className="card-body">
                          <div className="card-title">
                            <Link to={`/${post.fields.slug}`}>
                              <h3>{post.fields.title}</h3>
                            </Link>
                          </div>
                          <div className="card-text">
                          <p dangerouslySetInnerHTML={
                              {
                                __html: post.fields.body
                              }
                            } />
                          </div>
                          </div>
                      </div>
                    )
                })}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}
