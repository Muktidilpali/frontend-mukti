import axios from 'axios';
import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      loading: true,
      error: false
    }
    //this.getProducts=this.getProducts.bind(this)
  }
  getProducts() {
    axios.get("https://backend-mukti.herokuapp.com/products")
      .then(response => {

        this.setState({
          products: response.data,
          loading: false
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({

          loading: false,
          error: true
        })
      })
  }

  renderProducts() {
    const product_html = this.state.products.map(product => {



      <h1>{product.name}</h1>

    })
    return product_html;
  }

  componentDidMount() {
    this.getProducts();
  }
  render() {


    return (
      <div className='product'>

        {this.state.products.map(product => {
          <div className="one-product">
            <h1>{product.name}</h1>
          </div>
        })}
      </div>
    );
  }


}