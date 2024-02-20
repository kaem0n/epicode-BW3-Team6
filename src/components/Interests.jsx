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
              <Col className="px-1">
                <Nav
                  variant="underline"
                  defaultActiveKey="/home"
                  className="ps-2 border-bottom"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="link-1"
                      className="text-success px-2 bg-gray-hover"
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
                      className="text-success px-2 bg-gray-hover"
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
                      className="text-success px-2 bg-gray-hover"
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
                  <Row className="mt-3">
                    <Col xs={6} className="d-flex">
                      <img
                        src="https://media.istockphoto.com/id/1223671392/it/vettoriale/immagine-del-profilo-predefinita-avatar-segnaposto-della-foto-illustrazione-vettoriale.jpg?s=612x612&w=0&k=20&c=4lGdgXP1sYWjcu1e8TFgp1yhoUDx_aHzSM1b3ILnb6M="
                        alt="profilo1"
                        width="48px"
                        height="48px"
                        className="pointer"
                      />
                      <div className="ms-2">
                        <a
                          href="#"
                          className="text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                        >
                          Nome Persona 1
                        </a>
                        <p className="text-secondary fs-7 pointer mb-2">
                          123.123 follower
                        </p>
                        <button className="btn btn-outline-secondary rounded-pill">
                          Già segui
                        </button>
                      </div>
                    </Col>
                    <Col xs={6} className="d-flex">
                      <img
                        src="https://media.istockphoto.com/id/1223671392/it/vettoriale/immagine-del-profilo-predefinita-avatar-segnaposto-della-foto-illustrazione-vettoriale.jpg?s=612x612&w=0&k=20&c=4lGdgXP1sYWjcu1e8TFgp1yhoUDx_aHzSM1b3ILnb6M="
                        alt="profilo1"
                        width="48px"
                        height="48px"
                        className="pointer"
                      />
                      <div className="ms-2">
                        <a
                          href="#"
                          className="text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                        >
                          Nome Persona 2
                        </a>
                        <p className="text-secondary fs-7 pointer mb-2">
                          123.123 follower
                        </p>
                        <button className="btn btn-outline-secondary rounded-pill">
                          Già segui
                        </button>
                      </div>
                    </Col>
                  </Row>
                ) : clicked === 'Newsletter' ? (
                  <>
                    <Row className="mt-3">
                      <Col xs={6} className="d-flex">
                        <img
                          src="https://cosib.it/wp-content/uploads/2018/12/placeholder-logo-az.png"
                          alt="azienda1"
                          width="48px"
                          height="48px"
                          className="pointer"
                        />
                        <div className="ms-2">
                          <a
                            href="#"
                            className="text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                          >
                            Azienda 1
                          </a>
                          <p className="text-secondary fs-7 pointer mb-2">
                            123.123 follower
                          </p>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Già segui
                          </button>
                        </div>
                      </Col>
                      <Col xs={6} className="d-flex">
                        <img
                          src="https://cosib.it/wp-content/uploads/2018/12/placeholder-logo-az.png"
                          alt="azienda1"
                          width="48px"
                          height="48px"
                          className="pointer"
                        />
                        <div className="ms-2">
                          <a
                            href="#"
                            className="text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                          >
                            Azienda 2
                          </a>
                          <p className="text-secondary fs-7 pointer mb-2">
                            123.123 follower
                          </p>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Già segui
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </>
                ) : clicked === 'Scuole' ? (
                  <>
                    <Row className="mt-3">
                      <Col xs={6} className="d-flex">
                        <img
                          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                          alt="logo1"
                          width="48px"
                          height="48px"
                          className="pointer"
                        />
                        <div className="ms-2">
                          <a
                            href="#"
                            className="fs-7 text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                          >
                            EPICODE
                          </a>
                          <p className="text-secondary fs-7 pointer mb-2">
                            123.123 follower
                          </p>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Già segui
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </>
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
