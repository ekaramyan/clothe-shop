import React, { Component } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import { useState } from 'react'


const Categories = () => {

  const [cards, setCards] = useState({ title: '', image: '', price: '' })
  const addNewCard = (e) => {
    e.preventDefault()
    const newCard = {
      ...card
    }

    //   create(newCard)
    //   setPost({ title: '', image: '', price: '' })
    // }

    async function fetchData() {
      const response = await axios.get('https://dummyjson.com/products/')
      console.log(response.data)
    }




    return (
      <div>
        <br /> <br /> <br /> <br /> <br />
        {cards.map((card) =>
          <Cards
            card={card} key={card.id} />
        )}
      </div>
    )
  }
}
//
export default Categories