import React, { Component } from 'react'
import { useState } from 'react'
import productsAPI from '../logics/FetchData'
import ClotheList from '../components/ClotheList'
import { useEffect } from 'react'


const Categories = () => {

  useEffect(() => {
    fetchData()
  }, []
  )
  let [products, setProducts] = useState([{}])


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