import axios from "axios";
import React from 'react'
import { Component } from "react";

const url = 'https://dummyjson.com/products/';

export default async function fetchData() {
    let fetchProducts = {};
    try {
        const response = await axios.get(url)
        // console.log(response)
            .then(res => {
                fetchProducts = res.data.products;
                // console.log(fetchProducts)
                // this.setState({ products: fetchProducts });
                // this.state = {
                //     fetchProducts: []
                // }
                console.log(fetchProducts)
            })
        //let prod = await res.json()
    }
    catch (error) {
        console.error(error);
    }
    // props = fetchProducts;
return(fetchProducts)
}
