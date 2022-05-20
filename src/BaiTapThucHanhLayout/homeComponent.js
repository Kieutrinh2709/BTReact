import React, { Component } from 'react'
import BodyComponent from './bodyComponent';
import FooterComponent from './footerComponent';
import HeaderComponent from './headerComponent';

class HomeComponent extends Component {
  render() {
    return (
      <div>
          <HeaderComponent/>
          <BodyComponent/>
          
          <FooterComponent/>
      </div>
    )
  }
}
export default HomeComponent;
