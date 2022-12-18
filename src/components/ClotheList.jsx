import React from 'react'
import Cards from '../components/Card'
//import setProducts from '../logics/setProducts'

export default function ClotheList({ products, title}) {

    const createProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }

    return (
        <div>
            <h2>{title}</h2>
            {products.map((products) => (
                <Cards products={products} key={products.id} />
            ))}
        </div>
    )
}
