import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myProfile } from "../redux/actions/ProfileSection";
const url = "https://striveschool-api.herokuapp.com/api/profile/me";

const ProfileSection = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  const profileFetch = () => {
    fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(myProfile(data));
      })
      .catch((errore) => {
        console.log(errore, "errore nella prima fetch");
      });
  };
  useEffect(() => {
    profileFetch();
  }, []);
  // console.log(state);
  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-8">
          {state.profile ? (
            <Card>
              <Card.Header className="p-0">
                <div className="position-relative">
                  <img
                    src="https://www.ll-mm.com/images/placeholders/image-placeholder.jpg"
                    alt="bg-hero"
                    style={{ width: "100%", height: "10em" }}
                  />

                  <img
                    src={state.profile.image}
                    alt="profilo"
                    style={{ width: "10em", left: "33px", top: "88px" }}
                    className=" border rounded-circle border-white z-index-1 position-absolute"
                  />
                  <i
                    className="bi bi-pen text-primary position-absolute px-2 py-1 rounded-circle"
                    style={{
                      right: "25px",
                      top: "15px",
                      backgroundColor: "white",
                    }}
                  ></i>
                </div>
              </Card.Header>
              <div className="d-flex justify-content-end me-3 mt-3">
                <i className="bi bi-pen text-secondary fs-5"></i>
              </div>
              <Card.Body className="pt-5">
                <Row className="justify-content-between">
                  <Col className="col-7">
                    <span className="fw-semibold fs-3 ">
                      {state.profile.name} {state.profile.surname}
                      <span className="ms-2">
                        <button
                          type="button"
                          className="btn btn-outline-primary rounded-pill px-2 py-1"
                        >
                          <i className="bi bi-shield-check me-2"></i>Verifica
                          ora
                        </button>
                      </span>
                    </span>
                    <p className="mb-0">{state.profile.title}</p>
                    <p className="text-secondary">
                      {state.profile.area}{" "}
                      <span>
                        <i className="bi bi-dot"></i>
                      </span>
                      <span className="text-primary fw-semibold">
                        Informazioni di contatto
                      </span>
                    </p>
                    <p className="text-primary fw-semibold mb-0">
                      Collegamenti
                    </p>
                  </Col>
                  <Col className="col-4 p-0">
                    <img
                      src="https://media.licdn.com/dms/image/D4D0BAQHDm_SN8cUvqg/company-logo_100_100/0/1703750847686/unitorvergata_logo?e=1716422400&v=beta&t=vJHtONqWXnk0-UXCZrEnL1eufbisb6eZomJdxWKoaVQ"
                      alt="logo"
                      style={{ width: "2em" }}
                    />
                    <span id="università">La tua università/scuola</span>
                  </Col>
                </Row>
                <Row className="mt-2 g-2">
                  <Col className="col-12 col-md-4 col-lg-3 px-1">
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill w-100 p-1"
                    >
                      Disponibile per
                    </button>
                  </Col>
                  <Col className="col-9 col-md-6 col-lg-4 px-1">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill w-100 p-1"
                    >
                      Aggiungi sezione del profilo
                    </button>
                  </Col>
                  <Col className="col-3 col-md-2 px-1">
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-pill w-100 p-1"
                    >
                      Altro
                    </button>
                  </Col>
                </Row>
                <Card.Text className="mt-3">
                  <Row>
                    <Col className="col-6">
                      <Card
                        className="py-1 px-3 border-0"
                        style={{
                          fontSize: "0.9em",
                          backgroundColor: "#dde7f1",
                        }}
                      >
                        <span className="fw-semibold m-0 d-flex justify-content-between">
                          Disponibile a lavorare
                          <span>
                            <i className="bi bi-pen text-end"></i>
                          </span>
                        </span>

                        <p className="m-0">Ruolo</p>
                        <p className="m-0 fw-semibold text-primary">
                          Mostra dettagli
                        </p>
                      </Card>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <Spinner variant="primary"></Spinner>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSection;
