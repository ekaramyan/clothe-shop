import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import fetchData from '../logics/fetchData';


const Cards = () => {
    return (

        <div className='card' >
            {
                <Card>
                    <Card.Body>
                        <Card.Title> {products.title}</Card.Title>
                        <Card.Img src={product.img} />
                        <Card.Text>{products.description}</Card.Text>
                    </Card.Body >
                </Card>
            }
        </div >

    )

}


export default Cards