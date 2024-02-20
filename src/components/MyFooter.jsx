import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'

const MyFooter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-2 font-footer">
            <p>Informazioni</p>
            <p> Linee guida della community</p>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Privacy e Condizioni"
              menuVariant="white"
              className="mb-3"
            >
              <NavDropdown.Item href="#action/3.1">
                Informazioni sulla privacy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contratto di licenza
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Termini e condizioni delle pagine
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Informazioni sui cookie
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Informativa sul copryright
              </NavDropdown.Item>
            </NavDropdown>
            <p> Sales Solution</p>
            <p> Centro sicurezza</p>
          </Col>
          <Col className="col-2 font-footer">
            <p>Accessibilità</p>
            <p>Carriera</p>
            <p>Opzioni per gli annunci pubblicitari</p>
            <p>Mobile</p>
          </Col>
          <Col className="col-2 font-footer">
            <p>Talent Solution</p>
            <p>Soluzioni di marketing</p>
            <p>Pubblicità</p>
            <p>Piccole imprese</p>
          </Col>
          <Col className="col-4">
            <Row>
              <div className="d-flex justify-content-start">
                <h4>
                  <i className="bi bi-question-circle-fill me-2"></i>
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <p className="font-footer-ans mb-0">Domande ?</p>
                  <p className="font-footer-ans-p">
                    Visita il nostro Centro assistenza
                  </p>
                </div>
              </div>
            </Row>
            <Row className="justify-content-center">
              <div className="d-flex justify-content-start">
                <h4>
                  <i className="bi bi-gear-fill me-2"></i>
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <p className="font-footer-ans mb-0">
                    Gestisci il tuo account e la tua privacy
                  </p>
                  <p className="font-footer-ans-p">Vai alle impostazioni</p>
                </div>
              </div>
            </Row>
            <Row>
              <div className="d-flex justify-content-start">
                <h4>
                  <i className="bi bi-shield-shaded me-2"></i>
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <p className="font-footer-ans mb-0">
                    Trasparenza sui contenuti consigliati
                  </p>
                  <p className="font-footer-ans-p">
                    Scopri di più sui contenuti consigliati.
                  </p>
                </div>
              </div>
            </Row>
          </Col>
          <Col className="col-2">
            <p className="text-muted">Seleziona lingua</p>
            <Form.Select aria-label="Default select example">
              <option value="1">Italiano (Italiano)</option>
              <option value="2">English (Inglese)</option>
              <option value="3">Espanol (Sapgnolo)</option>
              <option value="4">Deutscht (Tedesco)</option>
              <option value="5">Francais (Francese)</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mt-4">
          <p className="text-muted">
            Linkedin Corporation &copy; {new Date().getFullYear()}
          </p>
        </Row>
      </Container>
    </>
  )
}

export default MyFooter
