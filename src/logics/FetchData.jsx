import axios from "axios";
import React from 'react'

export default async function fetchData() {
    const res = await fetch('https://dummyjson.com/products/')
    let prod = await res.json()
    console.log(prod)

}
