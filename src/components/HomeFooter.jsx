import { Col, Container, Row, Image } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
const HomeFooter = () => {
  return (
    <>
      <Container className="mt-2">
        <Row className="justify-content-center">
          <Col className="col-10 font-footer d-flex flex-wrap justify-content-center align-items-center ">
            <p className="pe-3 pointer">Informazioni</p>
            <p className="pe-3 pointer">Accessibilità</p>
            <p className="pe-3 pointer">Centro Assistenza</p>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Privacy e Condizioni"
              menuVariant="white"
              className="mb-3 pe-3"
            >
              <NavDropdown.Item className="fs-8">
                Informazioni sulla privacy
              </NavDropdown.Item>
              <NavDropdown.Item className="fs-8">
                Contratto di licenza
              </NavDropdown.Item>
              <NavDropdown.Item className="fs-8">
                Termini e condizioni delle pagine
              </NavDropdown.Item>
              <NavDropdown.Item className="fs-8">
                Informazioni sui cookie
              </NavDropdown.Item>
              <NavDropdown.Item className="fs-8">
                Informativa sul copryright
              </NavDropdown.Item>
            </NavDropdown>
            <p className="pe-3 pointer">Opzioni per gli annunci pubblicitari</p>
            <p className="pe-3 pointer">Pubblicità </p>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Servizi alle aziende"
              menuVariant="white"
              className="mb-3 pe-3"
            >
              <NavDropdown.Item href="#action/3.1">
                <h6 className="mb-0">Assumi su LinkedIn</h6>
                <p className="text-muted ft mb-1">Trova, attrai e assumi</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <h6 className="mb-0">Vendi con LinkedIn</h6>
                <p className="text-muted ft mb-1">
                  Sblocca nuove opportunità di vendita
                </p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <h6 className="mb-0">Offerta di lavoro gratuita</h6>
                <p className="text-muted ft mb-1">
                  Ottieni rapidamente candidati qualificati
                </p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <h6 className="mb-0">Fai pubblicità su LinkedIn</h6>
                <p className="text-muted ft mb-1">
                  Acquisisci clienti e fai crescere la tua azienda
                </p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <h6 className="mb-0">Impara con LinkedIn</h6>
                <p className="text-muted ft mb-1">
                  Corsi per formare i tuoi dipendenti
                </p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <h6 className="mb-0">Centro Amministrazione</h6>
                <p className="text-muted ft mb-1">
                  Gestisci dettagli di fatturazione e account
                </p>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <h6 className="mb-0">Crea una pagina aziendale +</h6>
              </NavDropdown.Item>
            </NavDropdown>
            <p className="pe-3 pointer">Scarica l&apos;app di LinkedIn</p>
            <p className="pe-3 pointer">Altro</p>
          </Col>
          <Col className="col-12 font-footer d-flex justify-content-center  ">
            <Image
              src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
              x="0"
              y="0"
              width="56"
              height="14"
              className="pe-2"
            ></Image>
            <p className="pe-2 text-dark">
              Linkedin Corporation &copy; {new Date().getFullYear()}{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeFooter;
