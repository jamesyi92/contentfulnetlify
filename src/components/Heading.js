import React, { Component } from 'react';
import axios from 'axios';

export default class Heading extends Component {

  state = {
    clicks: 0,
    loading: false,
    wpPosts: [],
    inputPosts: [],
    inputLoading: false
  }

  componentDidMount() {
    console.log('component mounted');
  }

  buttonClickHandler = () => {
    this.setState({
      loading: true
    })
    axios.get('https://www.sterlingtalentsolutions.com/wp-json/wp/v2/posts?per_page=50')
      .then(resp => {
        console.log(resp.data);
        const posts = resp.data;
        this.setState({
          loading: false,
          wpPosts: posts
        })
      })
  }

  postInputHandler = (e) => {
    this.setState({
      inputLoading: true
    })
    axios.get(`https://www.sterlingtalentsolutions.com/wp-json/wp/v2/posts?search=${e.target.value}`)
      .then(resp => {
        console.log(resp.data);
        this.setState({
          inputPosts: resp.data,
          inputLoading: false
        })
      })
  }

  render() {

    let wpPosts; 

    if(this.state.loading === true){
      wpPosts = <li>Loading...</li>
    } 
    else {
      wpPosts = this.state.wpPosts.map(wpPost => {
            return (
              <li key={wpPost.id}><a target="_blank" href={wpPost.link}>{wpPost.title.rendered}</a></li>
            )
          })
    }

    let inputPosts;
    if(this.state.inputLoading === true){
      inputPosts = <li>Loading...</li>
    }
    else {
      inputPosts = this.state.inputPosts.map(post => {
        return (
          <div key={post.id} className="card">
            <div className="card-body">
            <h5 className="mb-3">{post.title.rendered}</h5>
              <p>{post.date}</p>
              <div dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered
                }} />
              <a target="_blank" href={post.link}>Read Blog</a>
            </div>
          </div>
        )
      }) 
    }

    return (
      <React.Fragment>
        <h1>Test 1</h1>
        <input onChange={this.postInputHandler} className="mb-4" placeholder="Type a Keyword" />
        <div className="card-columns">
          {inputPosts}
        </div>
        <hr />
        <h1>Test 2</h1>
        <ul>
          {wpPosts}
        </ul>
        <button onClick={this.buttonClickHandler}>Fetch Posts</button>
      </React.Fragment>
    );
  }
}
