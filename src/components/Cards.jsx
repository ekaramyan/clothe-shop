import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class Cards extends Component {
    render() {
        return (
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
                                image
                            </Card.Text>
                            <Card.Header>Name</Card.Header>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}
