import React, { Component } from 'react'
import axios from 'axios'
import Cards from '../components/Card'
import { useState } from 'react'
import setCards from '../logics/setCards'
import fetchData from '../logics/fetchData'
import ClotheList from '../components/ClotheList'




const Categories = (fetchProducts) => {
  // console.log(props)
  let [products, setProducts] = useState([
    { id: 1, title: `title`, description: 'eiuguhqriphufwpih;owasd' },
    { id: 2, title: 'ibjfwbvihbvrw', description: 'eiuguhqriphufwpih;owasd' },
    { id: 3, title: 'ibjfwbvihbvrw', description: 'eiuguhqriphufwpih;owasd' }
  ])
  fetchData()
  // const addNewCard = (e) => {
  //   e.preventDefault()
  //   const newCard = {
  //     ...card
  //   }
  //   create(newCard)
  //   setPost({ title: '', image: '', price: '' })
  // } 
  // fetchData()


  // const products = fetchData();
  // console.log(fetchData)

  // let products = [];

  // (async () => {
  //   console.log('1')
  //   products = await fetchData()
  //   console.log('2')
  // })()

  // console.log(products)

  return (
    <div>
      <br /> <br /> <br />
      <ClotheList products = {products} title={'Вся одежда'}/>
    </div>
  )
}

export default Categories