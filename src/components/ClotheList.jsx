import React from 'react'
import { Container } from 'react-bootstrap'
import Cards from '../components/Card'

const ClotheList = ({ products, title }) => {
    // if (!products) {
    //     return null
    // }

    return (
        <div className='clothe-list'>

            <h2>{title}</h2>

            <Container className='container__clothe'>

                {products?.map((products, id) =>
                    <Cards
                        key={id}
                        products={products}
                    />
                )}

            </Container>
        </div>
    )
}


export default ClotheList