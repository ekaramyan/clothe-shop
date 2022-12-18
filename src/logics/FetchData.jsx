import axios from "axios";
import React from 'react'
import { Component } from "react";
import setProducts from "./setProducts";

export default class productsAPI {

    static async getAll() {
        const url = 'https://dummyjson.com/products/'
        try {
            const res = await axios.get(url)
            return res.data.products;
        }
        catch (error) {
            console.error(error);
        }
    }
}