import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Cards from '../components/Cards'

let product = {

}

let categories = [];


// axios.get('https://dummyjson.com/products/1').then((res) => {
//   // categories = res.data
//   product = res.data;
// })

export default class Categories extends Component {
  render() {
    return (

      <>
        {/* {this.props.items.map(product => (
          // <h1>{product.title}</h1>
          <Item key={item.id} item={item} />
        ))} */}
        <Button variant='dark'>Show</Button>
        <Cards />
      </>


    )
  }
}
