import axios from "axios";
import React from 'react'
import { Component } from "react";
import setProducts from "./setProducts";

export default class productsAPI {

    static async getAll() {
        const url = 'https://dummyjson.com/products/' //сюда апи со всей одеждой
        try {
            const res = await axios.get(url)
            return res.data.products;
        }
        catch (error) {
            console.error(error);
        }
    }

    static async getMale() {
        const url = 'https://dummyjson.com/products' //сюда апи с мужской одеждой
        try {
            const res = await axios.get(url)
            return res.data.products; //тут поставь после даты названия поля из апи, где лежат данные
        }
        catch (error) {
            console.error(error);
        }
    }

    static async getFem() {
        const url = 'https://dummyjson.com/carts' //сюда апи с женской одеждой
        try {
            const res = await axios.get(url)
            return res.data.carts; //тут поставь после даты названия поля из апи, где лежат данные
        }
        catch (error) {
            console.error(error);
        }
    }

    static async getKids() {
        const url = 'https://dummyjson.com/carts' //сюда апи с детской одеждой
        try {
            const res = await axios.get(url)
            return res.data.carts; //тут поставь после даты названия поля из апи, где лежат данные
        }
        catch (error) {
            console.error(error);
        }
    }
}