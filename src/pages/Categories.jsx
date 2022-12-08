import React, { Component } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import { useState } from 'react'


const Categories = () => {

  //   const [cards, createCards] = useState({ title: '', image: '', price: '' })
  // const addNewCard = (e) => {
  //   e.preventDefault()
  //   const newCard = {
  //     ...post
  //   }

  //   create(newCard)
  //   setPost({ title: '', image: '', price: '' })
  // }

  async function fetchData() {
    const response = await axios.get('https://dummyjson.com/products/')
    console.log(response.data)
  }

  // fetchData()
  // {id: 1, title: "hui", price: 4653}
  // response.products


  return (
    <div>
      <br /> <br /> <br /> <br /> <br />
      {cards.map((card) =>
        <Cards card={card} key={card.id} />
      )}
    </div>
  )
}
//
export default Categories