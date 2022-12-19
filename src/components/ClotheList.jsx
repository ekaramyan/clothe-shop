import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import Cards from '../components/Card'
import productsAPI from '../logics/fetchData'
//import setProducts from '../logics/setProducts'

export default function ClotheList({ products, title }) {

    // const createProduct = (newProduct) => {
    //     setProducts([...products, newProduct])
    // }
    let id = products
    console.log(id)

    return (
        <div>

            <h2>{title}</h2>
            {products.map((products) => (
                <Cards key={products.id} products={products} /> //</Cards>
            ))}

        </div>
    )
}
