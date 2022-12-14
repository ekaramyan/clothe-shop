import axios from "axios";
import React from 'react'
import { Component } from "react";
const url = 'https://dummyjson.com/products/';

export default async function fetchData() {
    
    try {
        await axios.get(url)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
        //let prod = await res.json()
        console.log(products)
    }
    catch (error) {
        console.error(error);
    }


}
