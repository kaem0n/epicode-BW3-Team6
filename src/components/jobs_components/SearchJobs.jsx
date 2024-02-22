import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const SearchJobs = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      {" "}
      <Card className="mt-2">
        <Card.Body className="pe-1 border-top border-2 border-warning">
          <Row>
            <Col>
              <i
                className="bi bi-square-fill text-warning"
                style={{ fontSize: "0.5em" }}
              ></i>
              <span
                className="text-secondary fw-semibold ms-1"
                style={{ fontSize: "smaller" }}
              >
                PREMIUM
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>
                Offerte di lavoro per cui rientri fra i migliori candidati
              </h5>
              <p className="display-4" style={{ fontSize: "small" }}>
                In base alle tue probabilità di ricevere una risposta
              </p>
            </Col>
          </Row>
          <Row className="border-bottom ms-1 me-1">
            <Col className="col-2">
              {profile.profile ? (
                <img
                  src={profile.profile.image}
                  alt="immagineProfilo"
                  className=" rounded-circle"
                  style={{ width: " 60px", height: "60px" }}
                />
              ) : (
                ""
              )}
            </Col>
            <Col>
              <h6>
                Vedi l’elenco completo delle offerte di lavoro per cui saresti
                fra i migliori candidati
              </h6>
              <Row className="align-items-center">
                <Col className="col-3 d-flex">
                  <img
                    src="https://images.stockx.com/images/Medicom-UDF-Despicable-Me-Minions-Bob-Ultra-Detail-Figure.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1635258656&q=60"
                    alt="profili"
                    className="rounded-circle "
                    style={{ width: "30px", height: "30px" }}
                  />
                  <img
                    src="https://files.cults3d.com/uploaders/22976645/illustration-file/d1875e17-917f-4b79-a2f6-3e16db9aaff3/tbrender_003-Recovered-Recovered.jpg"
                    alt="profili"
                    className="rounded-circle "
                    style={{ width: "30px", height: "30px" }}
                  />
                  <img
                    src="https://static.screenweek.it/interpretation/original_low-159622.jpg?1455127002"
                    alt="profili"
                    className="rounded-circle "
                    style={{ width: "30px", height: "30px" }}
                  />
                </Col>
                <Col className="col-7 d-flex align-items-center">
                  <p style={{ fontSize: "0.8em" }}>
                    Milioni di utenti oggi usano PREMIUM
                  </p>
                </Col>
                <Row>
                  <Col>
                    <button
                      type="button"
                      className="btn btn-warning rounded-pill opacity-75"
                    >
                      <span className="fw-semibold">
                        Prova Premium per 0 euro
                      </span>
                    </button>
                    <p
                      className="text-secondary display-1 mt-3"
                      style={{ fontSize: "0.7em" }}
                    >
                      Prova gratuita di 1 mese. Ti invieremo un promemoria 7
                      giorni prima della fine del periodo di prova.
                    </p>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mt-2">
        <Card.Body>
          <Row>
            <Col>
              <h5>Consigliato per te</h5>
              <p className="fs-6 fw-semibold text-secondary">
                Sulla base del tuo profilo e della tua cronologia di ricerca
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="mt-2">
                <Card.Body>
                  <Row className="justify-content-center">
                    <Col className="col-6 d-flex justify-content-center">
                      <i className="bi bi-briefcase-fill text-secondary fs-1"></i>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <h5>Vuoi altre offerte di lavoro?</h5>
                    </Col>
                    <Col className="col-12 text-center">
                      <p className="text-secondary fw-semibold fs-6 text-center">
                        Clicca qui per continuare a cercare tra oltre 20 milioni
                        di offerte di lavoro su Linkedin
                      </p>
                      <Button variant="outline-primary rounded-pill fw-semibold">
                        Cerca offerte di lavoro
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default SearchJobs;
