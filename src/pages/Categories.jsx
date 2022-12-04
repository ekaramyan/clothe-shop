import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Cards from '../components/Cards'

let product = {

}

let categories = [];


axios.get('https://dummyjson.com/products/1').then((res) => {
  // categories = res.data
  product = res.data;
})

export default class Categories extends Component {
  render() {
    return (

      <>
        {/* {JSON.stringify(product)} */}
        <Button variant='dark'>Show</Button>
        <Cards />
      </>


    )
  }
}
