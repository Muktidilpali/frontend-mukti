import axios from "axios";
import React, { Component } from "react";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true,
            error: false,
        };
        //this.getProducts=this.getProducts.bind(this)
    }
    getProducts() {
        axios
            .get("https://backend-mukti.herokuapp.com/products")
            .then((response) => {
                this.setState({
                    products: response.data,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    loading: false,
                    error: true,
                });
            });
    }

    renderProduct() {
        const itemsHtml = this.state.products.map((item) => (
            <div className="product-wrapper" key={item.id}>
                <h1>Name : {item.name}</h1>
                <h2>SKU : {item.sku}</h2>
                <h3>${item.price}</h3>
                <img src={item.photo}></img>
            </div>
        ));

        return itemsHtml;
    }

    componentDidMount() {
        this.getProducts();
    }
    render() {
        if (this.state.loading || this.state.error) {
            return (

                <div className="products-page-wrapper">
                    <h2>WELCOME TO MY ECOMMERCE</h2>
                    <h2>Products</h2>
                    <div className="products-wrapper">
                        <div className="loader"></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="products-page-wrapper">
                     <h2>WELCOME TO MY ECOMMERCE</h2>
                    <h2>Products</h2>
                    <div className="products-wrapper">{this.renderProduct()}</div>
                </div>
            );
        }
    }
}

