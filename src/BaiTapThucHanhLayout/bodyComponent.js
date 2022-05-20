import React, { Component } from 'react'
import BannerComponent from './bannerComponent';
import ItemComponent from './itemComponent';

class BodyComponent extends Component {
  render() {
    return (
      <div>
        <BannerComponent />
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-3">
              <ItemComponent />

            </div>
            <div className="col-sm-3">
              <ItemComponent />

            </div>
            <div className="col-sm-3">
              <ItemComponent />

            </div>
            <div className="col-sm-3">
              <ItemComponent />

            </div>     
          </div>

        </div>

      </div>
    )
  }
}
export default BodyComponent;