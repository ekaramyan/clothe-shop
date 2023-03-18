import React from 'react';
import Card from 'react-bootstrap/Card';


const Cards = (props) => {

    return (
        <>
            {
                <Card key={props.products.id} bg={'secondary'} text={'light'}>
                    <Card.Body >
                        <Card.Title> {props.products.title}</Card.Title>
                        <Card.Img src={props.products.image} alt='изображение товара' />
                        <Card.Text>{props.products.price}₽</Card.Text>
                    </Card.Body >
                </Card>
            }
        </ >

    )

}


export default Cards