import React, { Component } from 'react'

class BannerComponent extends Component {
    render() {
        return (
            <div className="banner py-5" style={{paddingBottom :" 0px"}}>
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 rounded-3 jumbotron">
                        <h1 className="display-5 fw-bold">A warm welcome!</h1>
                        <p className="lead">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default BannerComponent;
