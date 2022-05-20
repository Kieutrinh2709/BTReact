import React, { Component } from 'react'
import item from "../asset/img/item.png";

class ItemComponent extends Component {
    render() {
        return (
            <div>
                <div className="container px-lg-5" style={{paddingBottom: "20px", paddingLeft: "0px", paddingRight: "0px"}}>
                    <div className="card"  >
                        <img src={item} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary ">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ItemComponent;
