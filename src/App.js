import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import HiddenSection from './components/HiddenSection'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <Container>
      <h1 className="text-center">A simple react-testing example</h1>
      <HiddenSection />
      <FetchComponent />
    </Container>
  )
}

export default App
