import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './scss/styles.scss'
//import './components/Header'
import './pages/Categories'
import axios from 'axios'
import Categories from './pages/Categories'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Header /> */}
      <Categories />
    </div>
  )
}

export default App
