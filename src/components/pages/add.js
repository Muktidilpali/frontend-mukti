import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: "",
            priceInput: "",
            photoInput:"",
            skuInput:"",
            loading: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        fetch("https://backend-mukti.herokuapp.com/product", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.nameInput,
                price: parseFloat(this.state.priceInput),
                sku: this.state.skuInput,
                photo: this.state.photoInput

            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.history.push("/")
            }
        })
        .catch(error => {
            console.log("Error adding item ", error)

            this.setState({
                loading: false,
                error: true
            })
        })
    }

    render() {
        return (
            <div className='add-item-wrapper'>
                <h2>Add Product</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="name"
                        name="nameInput" 
                        value={this.state.nameInput}
                        onChange={this.handleChange}
                    />
                      <input 
                        type="text" 
                        placeholder="sku"
                        name="skuInput" 
                        value={this.state.skuInput}
                        onChange={this.handleChange}
                    />
                      <input 
                        type="text" 
                        placeholder="URL photo"
                        name="photoInput" 
                        value={this.state.photoInput}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text" 
                        placeholder="price"
                        name="priceInput" 
                        value={this.state.priceInput}
                        onChange={this.handleChange}
                    />

                    <button type="submit" disabled={this.state.loading}>Add Product</button>
                </form>

                {this.state.loading ? <div className="loading">Submitting...</div> : null}

                {this.state.error ? <div className="error">An error occured... Please try again later.</div> : null}
            </div>
        )
    }
}