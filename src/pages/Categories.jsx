import React, { Component } from 'react'
import axios from 'axios'
import Cards from '../components/Card'
import { useState } from 'react'
//import setProducts from '../logics/setProducts'
import productsAPI from '../logics/fetchData'
import ClotheList from '../components/ClotheList'
import { useEffect } from 'react'




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
    <div>

      <br /> <br /> <br />
      {products.length !== 0
        ? <ClotheList products={products} title={'Вся одежда'} />
        : <p className='not-found'>No products found</p>
      }
    </div>
  )
}

export default Categories