import React, { Component } from 'react';
import Heading from '../components/Heading'
import SectionWrapper from '../components/SectionWrapper'

export default class testPage extends Component {
  render() {
    return (
      <SectionWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Heading />
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }
}
