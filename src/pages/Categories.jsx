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


// const [count, setCount] = useState(0)

// axios.get('https://dummyjson.com/products/1').then((res)=>{

// })




export default class Categories extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          img: null,
          title: 'hands'
        }
      ]
    }
  }


  render() {
    return (

      <>
        {/* {this.props.items.map(item => (
          <h1>{item.title}</h1>
          // <item key={item.id} item={item} />
        ))} */}
        <Button variant='dark'>Show</Button>
        <Cards />
      </>


    )
  }
}
