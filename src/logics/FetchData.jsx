import axios from "axios";
import React from 'react'
import { Component } from "react";
import setProducts from "./setProducts";

export default class productsAPI {

    static async getAll() {
        const url = 'http://127.0.0.1:8000/api/product' //сюда апи со всей одеждой
        try {
            const res = await axios.get(url)
            return res.data.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    static async getCategory(id) {
        const url = 'http://127.0.0.1:8000/api/category/' + id//сюда апи с мужской одеждой
        try {
            const res = await axios.get(url)
            return res.data.data; //тут поставь после даты названия поля из апи, где лежат данные
        }
        catch (error) {
            console.error(error);
        }
    }

    static async getFem() {
        const url = 'http://127.0.0.1:8000/carts' //сюда апи с женской одеждой
        try {
            const res = await axios.get(url)
            return res.data.carts; //тут поставь после даты названия поля из апи, где лежат данные
        }
        catch (error) {
            console.error(error);
        }
    }

    static async getKids() {
        const url = 'http://127.0.0.1:8000/carts' //сюда апи с детской одеждой
        try {
            const res = await axios.get(url)
            return res.data.carts; //тут поставь после даты названия поля из апи, где лежат данные
        }
        catch (error) {
            console.error(error);
        }
    }
}