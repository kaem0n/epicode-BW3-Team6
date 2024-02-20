import { Card, Col } from 'react-bootstrap'
import Person from './Person'

const Persons = () => {
  return (
    <>
      <Col className="mb-5 mb-md-0">
        <Card>
          <Card.Body>
            <Card.Title className="fs-6">
              Persone che potresti conoscere
            </Card.Title>
            <Card.Subtitle className="mb-2 text-secondary fw-normal fs-7">
              Dalla tua scuola o università
            </Card.Subtitle>
            <Person
              img="http://placekitten.com/200/300"
              name="Nome Cognome"
              title="Co-Founder & Ceo at Xquire (Techstars 23)"
              id="#"
            />
            <Person
              img="http://placekitten.com/200/300"
              name="Nome Cognome"
              title="Co-Founder & Ceo at Xquire (Techstars 23)"
              id="#"
            />
            <Person
              img="http://placekitten.com/200/300"
              name="Nome Cognome"
              title="Co-Founder & Ceo at Xquire (Techstars 23)"
              id="#"
            />
            <Person
              img="http://placekitten.com/200/300"
              name="Nome Cognome"
              title="Co-Founder & Ceo at Xquire (Techstars 23)"
              id="#"
            />
            <Person
              img="http://placekitten.com/200/300"
              name="Nome Cognome"
              title="Co-Founder & Ceo at Xquire (Techstars 23)"
              id="#"
            />
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Persons
