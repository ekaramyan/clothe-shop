import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import fetchData from '../logics/fetchData';


const Cards = (props) => {
    // console.log(props)
    return (
        <div className='card' >
            {
                <Card>
                    <Card.Body key={props.products.id}>
                        <Card.Title> {props.products.title}</Card.Title>
                        <Card.Img src={props.products.thumbnail} alt='изображение товара' />
                        <Card.Text>{props.products.description}</Card.Text>
                    </Card.Body >
                </Card>
            }
        </div >

    )

}


export default Cards