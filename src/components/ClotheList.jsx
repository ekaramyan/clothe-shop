import React from 'react'
import Cards from '../components/Card'

export default function ClotheList({products, title}) {
    return (
        <div>
                  <h2>{title}</h2>
            {products.map((products) => (
                <Cards products={products} key={products.id} />
            ))}
        </div>
    )
}
