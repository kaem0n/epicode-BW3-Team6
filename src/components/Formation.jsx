import { Card, Col, Row } from "react-bootstrap";

const Formation = () => {
  return (
    <>
      <Row className="mt-2">
        <Col className="col-9">
          <Card className="p-2">
            <Row className="justify-content-between ">
              <Col className="col-5">
                <h4>Formazione</h4>
              </Col>
              <Col className="col-3 d-flex justify-content-evenly text-secondary">
                <i className="bi bi-plus-lg fs-4"></i>
                <i className="bi bi-pen fs-4"></i>
              </Col>
            </Row>
            <Row className="border-bottom mx-2 my-1">
              <Col className="col-2">
                <img
                  src="https://media.licdn.com/dms/image/D4D0BAQHDm_SN8cUvqg/company-logo_100_100/0/1703750847686/unitorvergata_logo?e=1716422400&v=beta&t=vJHtONqWXnk0-UXCZrEnL1eufbisb6eZomJdxWKoaVQ"
                  style={{ width: "4em" }}
                  alt="logo-scuola"
                />
              </Col>
              <Col>
                <p className="fw-semibold mb-0">Nome scuola</p>
                <p className="mb-0">Titolo di studio</p>
                <p className="text-secondary mb-0">Periodo conseguimento</p>
                <p>Votazione</p>
                <p>Descrizione corso di studi</p>
                <p className="fw-semibold">Abilità Conseguite</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Formation;
