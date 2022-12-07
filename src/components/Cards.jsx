import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';


const Cards = () => {


    // const [jsonData, setJsondata] = useState({})
    // axios.get('https://dummyjson.com/products/')
    //     .then(res => res.json())
    //     .then(json => setJsondata(json));

    // console.log(jsonData);

    // const axios = require('axios');
    const res = axios.get('https://dummyjson.com/products/')
        .then(({ res }) => {
            this.setState({
                title: res.data.title,
            });
        })
        .catch((err) => { })


    return (

        <div className='cards'>
            {res.props.json.map((Card) =>
                <Card>
                    <Card.Body>
                        <Card.Title>{Card.title} </Card.Title>
                        <Card.Img src={Card.Img} />
                        <Card.Header>Name</Card.Header>
                        <Card.Text>price</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}
export default Cards