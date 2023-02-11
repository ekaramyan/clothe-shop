import React from 'react'
import ClotheList from '../components/ClotheList'
import productsAPI from '../logics/FetchData'
import { useEffect, useState } from 'react'

const Female = (props) => {
  useEffect(() => {
    fetchData()
  }, []
  )

  let [products, setProducts] = useState([{}])

  async function fetchData() {
    const productsShow = await productsAPI.getFem();
    setProducts(productsShow)
  }

  return (
    <div className='cards__wrapper'>

      {products.length !== 0
        ? <ClotheList products={products} title={'Женская одежда'} />
        : <p className='not-found'>No products found</p>
      }

    </div>
  )
}

export default Female