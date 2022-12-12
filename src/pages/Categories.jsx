import React, { Component } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import { useState } from 'react'
import setCards from '../logics/setCards'
import fetchData from '../logics/fetchData'
// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";


const Categories = () => {

  // const [cards, setCards] = useState({ title: '', image: '', price: '' })
  // const addNewCard = (e) => {
  //   e.preventDefault()
  //   const newCard = {
  //     ...card
  //   }
  //   //   create(newCard)
  //   //   setPost({ title: '', image: '', price: '' })
  //   // } 
  // fetchData()



  return (
    <div>
      <br /> <br /> <br /> <br /> <br />

      <Cards />

    </div>
  )
}
//
export default Categories