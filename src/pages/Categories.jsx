import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Cards from '../components/Cards'
import { useState } from 'react'


let product = {

}

let categories = [];

// axios.get('https://dummyjson.com/products/1').then((res) => {
//   // categories = res.data
//   product = res.data;
// })




// axios.get('https://dummyjson.com/products/1').then((res)=>{

// })

const Categories = () => {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     items: [
  //       {
  //         id: 1,
  //         img: null,
  //         title: 'hands'
  //       }
  //     ]
  //   }
  // }

  // const [jsonData, setJsondata] = useState({})

  // fetch('https://dummyjson.com/products/')
  //   .then(res => res.json())
  //   .then(json => setJsondata(json));



  return (
    <div>
      {/* {this.props.products.map(product => (
        <h1 key={product.id}>{product.title}</h1>
        // <ul>
        //  <li key={product.id}> {product.title}</li>
        //  </ul>
      ))} */}
      {/* {jsonData} */}
      <Button variant='dark'>Show</Button>
      <Cards />
    </div>


  )
}

export default Categories