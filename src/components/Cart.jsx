// class based component for a cart

import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, product_name: "Prod1", price: 10.0, quantity: 0 },
        { id: 2, product_name: "Prod2", price: 109.0, quantity: 0 },
        { id: 3, product_name: "Prod3", price: 12.0, quantity: 0 },
      ],
    };
  }
  /*
  changeName = () => {
    this.setState({ name: "Zhiyang" });
  };
  */

  render() {
    return (
      <div className="products">
        {this.state.products.map((product) => (
          <div className="prod-container">
            <div className="prod-descr">
              <h3>{product.product_name}</h3>
              <p>blah blah blah</p>
              <h3>${product.price}</h3>
            </div>
            <div className="quant-container">
              <button onClick="this.addCount">+</button>
              <p>{product.quantity}</p>
              <button>-</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
