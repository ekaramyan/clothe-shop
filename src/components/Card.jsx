import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import fetchData from '../logics/fetchData';


const Cards = () => {



    // state = {
    const products =
        [
            { id: fetchData.id, title: fetchData.title, description: fetchData.description }
        ]
    // }

    fetchData()
    console.log(fetchData)

    return (

        <div className='card' >
            {
                // this.state.
                products.map((products) => (
                    <Card>
                        <Card.Body key={products.id}>
                            <Card.Title> {products.title}</Card.Title>
                            {/* <Card.Img src={Card.Img} /> */}
                            <Card.Text>{products.description}</Card.Text>
                        </Card.Body >
                    </Card>))
            }
        </div >

    )

}


export default Cards