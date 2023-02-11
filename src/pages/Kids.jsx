import React from 'react'
import ClotheList from '../components/ClotheList'
import productsAPI from '../logics/FetchData'
import { useEffect, useState } from 'react'

const Kids = (props) => {
  useEffect(() => {
    fetchData()
  }, []
  )

  let [products, setProducts] = useState([{}])

  async function fetchData() {
    const productsShow = await productsAPI.getKids();
    setProducts(productsShow)
  }

  return (
    <div className='cards__wrapper'>

      {products.length !== 0
        ? <ClotheList products={products} title={'Детская одежда'} />
        : <p className='not-found'>No products found</p>
      }

    </div>
  )
}

export default Kids