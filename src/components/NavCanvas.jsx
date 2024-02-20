import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react'
import {
  icn1,
  icn2,
  icn3,
  icn4,
  icn5,
  icn6,
  icn7,
} from '../assets/NavCanvas-icons'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'

const NavCanvas = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(!show)

  return (
    <>
      <button onClick={handleShow} id="canvas-toggle" className="d-none">
        Launch
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        id="nav-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Per le aziende</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card className="border">
            <ListGroup variant="flush">
              <ListGroup.Item className="fw-semibold py-3 ps-4">
                Scopri altri prodotti LinkedIn
              </ListGroup.Item>
              <ListGroup.Item className="container-fluid">
                <Row className=" text-center g-3" xs={4}>
                  <Col className="d-flex flex-column align-items-center">
                    <div className="border rounded-2 canvas-btn mb-1">
                      {icn1}
                    </div>
                    <span className="fs-8 text-secondary pointer">
                      Learning
                    </span>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <div className="border rounded-2 canvas-btn mb-1">
                      {icn2}
                    </div>
                    <span className="fs-8 text-secondary pointer">
                      Talent Insights
                    </span>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <div className="border rounded-2 canvas-btn mb-1">
                      {icn3}
                    </div>
                    <span className="fs-8 text-secondary pointer">
                      Pubblica un&apos;offerta di lavoro
                    </span>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <div className="border rounded-2 canvas-btn mb-1">
                      {icn4}
                    </div>
                    <span className="fs-8 text-secondary pointer">
                      Pubblicizza
                    </span>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <div className="border rounded-2 canvas-btn mb-1">
                      {icn5}
                    </div>
                    <span className="fs-8 text-secondary pointer">
                      Trova lead
                    </span>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <div className="border rounded-2 canvas-btn mb-1">
                      {icn6}
                    </div>
                    <span className="fs-8 text-secondary pointer">Gruppi</span>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <div className="border rounded-2 canvas-btn mb-1">
                      {icn7}
                    </div>
                    <span className="fs-8 text-secondary pointer">
                      Marketplace dei servizi
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className="mt-2 border">
            <ListGroup variant="flush">
              <ListGroup.Item className="fw-semibold py-3 ps-4">
                Scopri altro per il business
              </ListGroup.Item>
              <ListGroup.Item className="ps-4 fs-7 pointer">
                <div className="d-flex flex-column mb-2 canvas-link">
                  <span className="fw-semibold">Assumi su LinkedIn</span>
                  <span className="fs-8 text-secondary">
                    Trova, attrai e assumi
                  </span>
                </div>
                <div className="d-flex flex-column mb-2 canvas-link">
                  <span className="fw-semibold">Vendi con LinkedIn</span>
                  <span className="fs-8 text-secondary">
                    Sblocca nuove opportunità di vendita
                  </span>
                </div>
                <div className="d-flex flex-column mb-2 canvas-link">
                  <span className="fw-semibold">
                    Offerta di lavoro gratuita
                  </span>
                  <span className="fs-8 text-secondary">
                    Ottieni rapidamente candidati qualificati
                  </span>
                </div>
                <div className="d-flex flex-column mb-2 canvas-link">
                  <span className="fw-semibold">
                    Fai pubblicità su LinkedIn
                  </span>
                  <span className="fs-8 text-secondary">
                    Acquisisci clienti e fai crescere la tua azienda
                  </span>
                </div>
                <div className="d-flex flex-column mb-2 canvas-link">
                  <span className="fw-semibold">Impara con LinkedIn</span>
                  <span className="fs-8 text-secondary">
                    Corsi per formare i tuoi dipendenti
                  </span>
                </div>
                <div className="d-flex flex-column mb-2 canvas-link">
                  <span className="fw-semibold">Centro amministrazione</span>
                  <span className="fs-8 text-secondary">
                    Gestisci i dettagli di fatturazione e account
                  </span>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="fw-semibold py-3 ps-4 fs-7 canvas-link pointer">
                Crea una pagina aziendale{' '}
                <i className="fa-solid fa-plus fs-6"></i>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavCanvas
