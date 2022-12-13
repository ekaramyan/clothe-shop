import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import fetchData from './logics/fetchData'

class Cards extends React.Component {

    render() {
        fetchData()
        console.log(fetchData)
        return (
            <div className='card'>
                {/* {res.cards.map((products) => */}
                {/* (<Card > */}
                    <Card.Body>
                        {/* <Card.Title>{props.card.title}</Card.Title>
                        <Card.Img src={Card.Img} />
                        <Card.Text>{props.card.description}</Card.Text> */}
                    </Card.Body>
                {/* </Card>))} */}
            </div>
        )
    }
}
export default Cards