import React from 'react'
import ClotheList from '../components/ClotheList'
import productsAPI from '../logics/FetchData'
import { useEffect, useState } from 'react'

const Male = (props) => {
  useEffect(() => {
    fetchData()
  }, []
  )

  let [products, setProducts] = useState([{}])

  async function fetchData() {
    const productsShow = await productsAPI.getMale();
    setProducts(productsShow)
  }

  return (
    <div className='cards__wrapper'>

      {products.length !== 0
        ? <ClotheList products={products} title={'Мужская одежда'} />
        : <p className='not-found'>No products found</p>
      }

    </div>
  )
}

export default Male