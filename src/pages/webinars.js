import React, { Component } from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'
import SectionWrapper from '../components/SectionWrapper'

export default class webinars extends Component {
  render() {

    const data  = this.props.data;

    return (
      <SectionWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="mb-4">Webinars</h3>
              <div className="card-columns">
                {data.allContentfulWebinar.edges.map(({ node }, index) => {
                    return (
                        <div key={node.title} className="card">
                          <div className="card-body">
                          <h5 className="mb-3">{node.title}</h5>
                            <p>{node.datePosted}</p>
                            <div dangerouslySetInnerHTML={{
                                __html: node.description
                              }} />
                          </div>
                        </div>
                      )
                  })}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}


export const query = graphql`
  query WebinarPageQuery {
    allContentfulWebinar(sort: {fields: [datePosted], order: DESC}){
      edges{
        node{
          title
          datePosted(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`