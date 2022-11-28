import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './scss/styles.scss'
import './components/Header'
import './pages/Categories'
import axios from 'axios'
import Header from './components/Header'
import Categories from './pages/Categories'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Categories />
    </>
  )
}

export default App
