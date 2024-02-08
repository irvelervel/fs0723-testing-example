import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'

const HiddenSection = () => {
  const [show, setShow] = useState(false) // al click diventa true, e viceversa

  return (
    <Row className="mt-3 justify-content-center">
      <Col xs={12} md={6}>
        <Button
          onClick={() => {
            setShow(!show)
          }}
        >
          SHOW SECTION
        </Button>
        {show && (
          <Card>
            <Card.Img variant="top" src="https://placedog.net/500" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  )
}

export default HiddenSection
