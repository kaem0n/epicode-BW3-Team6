import { Col, Container, Row } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
const HomeFooter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 font-footer d-flex justify-content-center ">
            <p className="pe-2">Informazioni</p>
            <p>Accessibilità</p>
          </Col>
          <Col className="col-12 font-footer d-flex justify-content-center ">
            <p className="pe-2">Centro Assistenza</p>
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
          </Col>
          <Col className="col-12 font-footer d-flex justify-content-center ">
            <p>Opzioni per gli annunci pubblicitari</p>
          </Col>
          <Col className="col-12 font-footer d-flex justify-content-center ">
            <p className="pe-2">Pubblicità </p>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Servizi alle aziende"
              menuVariant="white"
              className="mb-3"
            >
              <NavDropdown.Item href="#action/3.1">
                <h6>Assumi su LinkedIn</h6>
                <p>trova, attrai e assumi</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <h6>Vendi con LinkedIn</h6>
                <p>Sblocca nuove opportunità di vendita</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <h6>Offerta di lavoro gratuita</h6>
                <p>Ottini rapidamente candidati qualificati</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <h6>Fai pubblicità su LinkedIn</h6>
                <p>Acquisisci clienti e fai crescere la tua azienda</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <h6>Impara con LinkedIn</h6>
                <p>Corsi per formare i tuoi dipendenti</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <h6>centro Amministrazione</h6>
                <p>Gestisci dettagli di fatturazione e account</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <hr></hr>
                <h6>Crea una pagina aziendale +</h6>
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col className="col-12 font-footer d-flex justify-content-center ">
            <p className="pe-2">Scarica lapp LinkedIn </p>
            <p>Altro</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeFooter;
