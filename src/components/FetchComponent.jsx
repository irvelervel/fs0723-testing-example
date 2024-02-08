import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FetchComponent = () => {
  const [reservations, setReservations] = useState([])

  const fetchReservations = async () => {
    // facciamo una fetch per recuperare le prenotazioni di Epistaurant
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation'
      )
      if (response.ok) {
        const data = await response.json()
        setReservations(data)
      } else {
        throw new Error('errore nella fetch')
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchReservations()
  }, [])

  return (
    <Row className="mt-3 justify-content-center">
      <Col xs={12} md={6} className="text-center">
        <h2 className="mt-5">LISTA PRENOTAZIONI</h2>
        <ListGroup>
          {reservations.map((r) => (
            <ListGroup.Item key={r._id} data-testid="listgroup-item">
              {r.name} per {r.numberOfPeople}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  )
}

export default FetchComponent
