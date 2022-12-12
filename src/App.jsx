import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './scss/styles.scss'
import './components/Header'
import './pages/Categories'
import axios from 'axios'
import Header from './components/Header'
import fetchData from './logics/fetchData'
import Categories from './pages/Categories'

function App() {


  async function fetchData() {


    const res = await fetch('https://dummyjson.com/products/')
    let prod = await res.json()
    console.log([prod])


  }
  fetchData()

  return (

    <>
      <Header />
      <Categories />

    </>
  )

}
export default App
