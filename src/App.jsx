import './scss/styles.scss'
import './components/Header'
import './pages/Categories'
import Header from './components/Header'
import Categories from './pages/Categories'
import Female from './pages/Female'
import Male from './pages/Male'
import { Container, Row } from 'react-bootstrap'

function App() {
  return (

    <div>
      <Header />

      <Container />

      {/* <Categories /> */}
      {/* <Male /> */}


    </div>
  )

}
export default App
