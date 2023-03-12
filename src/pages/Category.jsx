import React from 'react'
import ClotheList from '../components/ClotheList'
import productsAPI from '../logics/FetchData'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router';



const Category = (props) => {

  const { id } = useParams();

  useEffect((id) => {
    if ([id]) {
      fetchData()
    }
  }, [id])

  const [category, setCategory] = useState([{}])
  async function fetchData() {
    const category = await productsAPI.getCategory(id);
    setCategory(category)
  }

  return (
    <div className='cards__wrapper'>
      {category.products?.length !== 0
        ? <ClotheList products={category.products} title={category.title} />
        : <p className='not-found'>No products found</p>
      }
    </div>
  )
}
export default Category
