import React from 'react'
import ClotheList from '../components/ClotheList'
import productsAPI from '../logics/FetchData'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Category = (props) => {


  useEffect(() => {
    fetchData()
  }, []
  )

  const { id } = useParams();

  const [category, setCategory] = useState([{}])

  async function fetchData() {
    const category = await productsAPI.getCategory(id);
    setCategory(category)
  }

  console.log(category)
  console.log(id)

  // if (!category.products) {
  //   return null
  // }

  return (
    <div className='cards__wrapper'>
      {/* {props} */}
      {category.products?.length !== 0
        ? <ClotheList products={category.products} title={category.title} />
        : <p className='not-found'>No products found</p>
      }
    </div>
  )
}
export default Category
// export default Category