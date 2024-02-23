import { Card, Col, Row } from "react-bootstrap";

const Formation = () => {
  return (
    <>
      <Row className="mt-2 mb-2">
        <Col>
          <Card className="p-2">
            <Row className="justify-content-between ">
              <Col className="col-7">
                <Card.Title className="ps-2">Formazione</Card.Title>
              </Col>
              <Col className="col-4 col-lg-3 col-xl-2 d-flex justify-content-evenly text-secondary">
                <i className="bi bi-plus-lg fs-4"></i>
                <i className="bi bi-pen fs-4"></i>
              </Col>
            </Row>
            <Row className="border-bottom mx-2 my-1">
              <Col className="col-3 col-sm-2 col-md-3 col-lg-2 col-xl-1">
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                  style={{ width: "4em" }}
                  alt="logo-scuola"
                />
              </Col>
              <Col className="col-11 col-sm-10 col-md-9 col-lg-10 col-xl-10 ms-xl-4 ">
                <p className="fw-semibold mb-0">Nome scuola</p>
                <p className="mb-0 fs-6">Titolo di studio</p>
                <p className="text-secondary mb-0 fs-6">
                  Periodo conseguimento
                </p>
                <p className="fs-6">Votazione</p>
                <p>Descrizione corso di studi</p>
                <p className="fw-semibold fs-6">Abilità Conseguite</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Formation;
