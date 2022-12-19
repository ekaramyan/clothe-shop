import React, { Component } from 'react'
import Cards from '../components/Card'

const Female = (props) => {
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
        ? <ClotheList products={products} title={'Женская одежда'} />
        : <p className='not-found'>No products found</p>
      }

    </div>
  )
}

export default Female