import './scss/styles.scss'
import './components/Header'
import './pages/Categories'
import Header from './components/Header'
import Categories from './pages/Categories'
import { Container, Row } from 'react-bootstrap'

function App() {
  return (

    <div>
      <Header />

      <Container>

          <Categories />

      </Container>

    </div>
  )

}
export default App
