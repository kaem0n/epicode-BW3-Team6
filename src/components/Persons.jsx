import { Button, Card, Col, Row } from 'react-bootstrap'

const Persons = () => {
  return (
    <>
      <Col className="mb-5 mb-md-0">
        <Card>
          <Card.Body>
            <Card.Title>Persone che potresti conoscere</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Dalla tua scuola o univeresità
            </Card.Subtitle>
            <Row>
              <Col xs={3}>
                <img
                  src="http://placekitten.com/200/300"
                  className="rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                />
              </Col>
              <Col>
                <Card.Title className="m-0">Nome</Card.Title>
                <Card.Text>
                  Co-Founder & Ceo at Xquire (Techstars 23){' '}
                </Card.Text>
              </Col>
            </Row>
            <div className="d-flex justify-content-center mt-3 border-bottom pb-4">
              <Button className="bg-transparent text-black btn-person  ">
                <i className="bi bi-person-plus-fill"> Collegati</i>
              </Button>
            </div>
          </Card.Body>
          <Card.Body>
            <Row>
              <Col xs={3}>
                <img
                  src="http://placekitten.com/200/300"
                  className="rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                />
              </Col>
              <Col>
                <Card.Title className="m-0">Nome</Card.Title>
                <Card.Text>
                  Co-Founder & Ceo at Xquire (Techstars 23){' '}
                </Card.Text>
              </Col>
            </Row>
            <div className="d-flex justify-content-center mt-3 border-bottom pb-4">
              <Button className="bg-transparent text-black btn-person  ">
                <i className="bi bi-person-plus-fill"> Collegati</i>
              </Button>
            </div>
          </Card.Body>
          <Card.Body>
            <Row>
              <Col xs={3}>
                <img
                  src="http://placekitten.com/200/300"
                  className="rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                />
              </Col>
              <Col>
                <Card.Title className="m-0">Nome</Card.Title>
                <Card.Text>
                  Co-Founder & Ceo at Xquire (Techstars 23){' '}
                </Card.Text>
              </Col>
            </Row>
            <div className="d-flex justify-content-center mt-3 border-bottom pb-4">
              <Button className="bg-transparent text-black btn-person  ">
                <i className="bi bi-person-plus-fill"> Collegati</i>
              </Button>
            </div>
          </Card.Body>
          <Card.Body>
            <Row>
              <Col xs={3}>
                <img
                  src="http://placekitten.com/200/300"
                  className="rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                />
              </Col>
              <Col>
                <Card.Title className="m-0">Nome</Card.Title>
                <Card.Text>
                  Co-Founder & Ceo at Xquire (Techstars 23){' '}
                </Card.Text>
              </Col>
            </Row>
            <div className="d-flex justify-content-center mt-3 border-bottom pb-4">
              <Button className="bg-transparent text-black btn-person  ">
                <i className="bi bi-person-plus-fill"> Collegati</i>
              </Button>
            </div>
            <div className="d-flex justify-content-center mt-3 ">
              {' '}
              <h6> Mostra tutto</h6>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Persons
