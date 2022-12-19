import React, { Component } from 'react'
import { useState } from 'react'
import productsAPI from '../logics/fetchData'
import ClotheList from '../components/ClotheList'
import { useEffect } from 'react'
import { Row, Col, CardGroup } from 'react-bootstrap'





const Categories = () => {

  useEffect(() => {
    fetchData()
  }, []
  )

  let [products, setProducts] = useState([{}])

  // const addNewProduct = (e) => {
  //   e.preventDefault()
  //   setProducts([...products, { ...products, id: Date.now() }])
  // }
  async function fetchData() {
    const productsShow = await productsAPI.getAll();
    setProducts(productsShow)
  }

  return (
    <div className='cards__wrapper'>

      {products.length !== 0
        ? <ClotheList products={products} title={'Вся одежда'} />
        : <p className='not-found'>No products found</p>
      }

    </div>
  )
}

export default Categories