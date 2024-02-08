import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import HiddenSection from './components/HiddenSection'

function App() {
  return (
    <Container>
      <h1 className="text-center">A simple react-testing example</h1>
      <HiddenSection />
    </Container>
  )
}

export default App
