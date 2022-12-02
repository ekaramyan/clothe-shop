import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

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

        <div className='cards'>
          {[
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
            'Light',
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            // img={variant}
            >

              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Img src='' />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Header>Header</Card.Header>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>


    )
  }
}
