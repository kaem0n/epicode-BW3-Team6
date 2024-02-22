import { Col, Container, NavDropdown, Row } from 'react-bootstrap'
import { footerIcn } from '../assets/Login-icons'

const LoginFooter = () => (
  <Container fluid="xl">
    <Row className="justify-content-center">
      <Col xs={12} xxl={10}>
        <div className="d-flex justify-content-between align-items-center fs-8 flex-wrap">
          <span>
            {footerIcn} &copy; {new Date().getFullYear()}
          </span>
          <a
            href="#"
            className="text-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
          >
            Contratto di licenza
          </a>
          <a
            href="#"
            className="text-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
          >
            Informativa sulla privacy
          </a>
          <a
            href="#"
            className="text-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
          >
            Linee guida della community
          </a>
          <a
            href="#"
            className="text-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
          >
            Informativa sui cookie
          </a>
          <a
            href="#"
            className="text-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
          >
            Informativa sui copyright
          </a>
          <a
            href="#"
            className="text-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
          >
            Invia commenti
          </a>
          <NavDropdown title="Lingua" className="text-secondary fw-semibold">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Col>
    </Row>
  </Container>
)
export default LoginFooter
