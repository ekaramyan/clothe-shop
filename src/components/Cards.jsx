import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <Card >
                <Card.Body>
                    <Card.Title>{props.card.title}</Card.Title>
                    {/* <Card.Img src={Card.Img} /> */}
                    <Card.Text>{props.card.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Cards