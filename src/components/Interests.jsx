import { useState } from 'react'
import { Card, Col, Nav, Row } from 'react-bootstrap'

const Interests = () => {
  const [clicked, setClicked] = useState('Top-Voices')

  return (
    <>
      <Row className="mt-2 mb-2 mb-md-5">
        <Col>
          <Card className="p-2 pb-3">
            <Card.Title className="ps-2">Interessi</Card.Title>
            <Row>
              <Col>
                <Nav
                  variant="underline"
                  defaultActiveKey="/home"
                  className="ps-2"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="link-1"
                      className="text-success"
                      onClick={() => {
                        setClicked('Top-Voices')
                      }}
                    >
                      Top Voices
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="link-2"
                      className="text-success"
                      onClick={() => {
                        setClicked('Newsletter')
                      }}
                    >
                      Newsletter
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="link-3"
                      className="text-success"
                      onClick={() => {
                        setClicked('Scuole')
                      }}
                    >
                      Scuole e/o Università
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row className="ps-2">
              <Col>
                {clicked === 'Top-Voices' ? (
                  <Row>
                    <Col>
                      <Row className="mt-3">
                        <Col className="col-2">
                          <img
                            src="https://media.istockphoto.com/id/1223671392/it/vettoriale/immagine-del-profilo-predefinita-avatar-segnaposto-della-foto-illustrazione-vettoriale.jpg?s=612x612&w=0&k=20&c=4lGdgXP1sYWjcu1e8TFgp1yhoUDx_aHzSM1b3ILnb6M="
                            alt="profilo1"
                            style={{ width: '100%' }}
                          />
                        </Col>
                        <Col className="col-6">
                          <p className="mb-0 fw-semibold">Nome persona1</p>
                          <p className="mb-0">Professione Persona 1</p>
                          <p className="text-secondary">Follower</p>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Gia segui
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row className="mt-3">
                        <Col className="col-2">
                          <img
                            src="https://media.istockphoto.com/id/1223671392/it/vettoriale/immagine-del-profilo-predefinita-avatar-segnaposto-della-foto-illustrazione-vettoriale.jpg?s=612x612&w=0&k=20&c=4lGdgXP1sYWjcu1e8TFgp1yhoUDx_aHzSM1b3ILnb6M="
                            alt="profilo1"
                            style={{ width: '100%' }}
                          />
                        </Col>
                        <Col className="col-6">
                          <p className="mb-0 fw-semibold">Nome persona1</p>
                          <p className="mb-0">Professione Persona 1</p>
                          <p className="text-secondary">Follower</p>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Gia segui
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ) : clicked === 'Newsletter' ? (
                  <Row>
                    <Col>
                      <Row className="mt-3">
                        <Col className="col-2">
                          <img
                            src="https://cosib.it/wp-content/uploads/2018/12/placeholder-logo-az.png"
                            alt="azienda1"
                            style={{ width: '100%' }}
                          />
                        </Col>
                        <Col className="col-6">
                          <p className="mb-0 fw-semibold">Azienda 1</p>
                          <p className="mb-0">Descrizione</p>
                          <p className="text-secondary">Follower</p>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Gia segui
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row className="mt-3">
                        <Col className="col-2">
                          <img
                            src="https://cosib.it/wp-content/uploads/2018/12/placeholder-logo-az.png"
                            alt="azienda1"
                            style={{ width: '100%' }}
                          />
                        </Col>
                        <Col className="col-6">
                          <p className="mb-0 fw-semibold">Azienda 1</p>
                          <p className="mb-0">Descrizione</p>
                          <p className="text-secondary">Follower</p>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Gia segui
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ) : clicked === 'Scuole' ? (
                  <Row>
                    <Col>
                      <Row className="mt-3">
                        <Col className="col-2">
                          <img
                            src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                            alt="logo1"
                            style={{ width: '100%' }}
                          />
                        </Col>
                        <Col className="col-6 ">
                          <p className="mb-0 fw-semibold">Epicode</p>
                          <p className="text-secondary">Follower</p>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Gia segui
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ) : (
                  ''
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Interests
