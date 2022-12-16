import React, { Component } from 'react'
import axios from 'axios'
import Cards from '../components/Card'
import { useState } from 'react'
import setCards from '../logics/setCards'
import fetchData from '../logics/fetchData'




const Categories = (props) => {
console.log(props)
  // const [cards, setCards] = useState({ title: '', image: '', price: '' })
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

  let products = [];

  (async() => {
    console.log('1')
    products = await fetchData()  
    console.log('2')
  })()

  console.log(products)

  return (
    <div>
      <br /> <br /> <br /> <br /> <br />
      {products.map((products) => (
        <Cards key={products.id} />
      ))}
    </div>
  )
}

export default Categories