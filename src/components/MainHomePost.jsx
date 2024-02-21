import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";

const MainHomePost = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <Card.Text>
            <Row className="justify-content-end">
              <Col className="col-2 ">
                <div>
                  <span className="pe-2">
                    <i className="bi bi-three-dots fs-6"></i>
                  </span>
                  <span>
                    <i className="bi bi-x-lg"></i>
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src="http://placekitten.com/200/300"
                      alt="img-profilo"
                      style={{ width: "50px", height: "50px" }}
                      className="rounded-circle"
                    ></img>
                    <div className="ms-2" style={{ fontSize: "small" }}>
                      <p className="mt-0 mb-0 fw-semibold fs-6">Autore</p>
                      <p className="mt-0 mb-0 text-secondary">follower</p>
                      <p className="mt-0 mb-0 text-secondary">
                        time?<i className="bi bi-dot"></i>
                        <i className="bi bi-globe-americas fw-bold"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-3 d-flex justify-content-end">
                <i className="bi bi-plus text-primary"></i>
                <span className="fw-semibold text-primary">Segui</span>
              </Col>
              <Row>
                <Col className="col-12">
                  <p>contenuto .....</p>
                </Col>
              </Row>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <img
                  src="http://placekitten.com/600/600"
                  style={{ width: "100%" }}
                  className="rounded"
                ></img>
              </Col>
            </Row>
            <Row className="justify-content-between mt-2">
              <Col className="col-4">
                <i className="bi bi-hand-thumbs-up text-primary me-1"></i>
                <i className="bi bi-suit-heart text-danger me-1"></i>
                <span
                  className="text-secondary"
                  style={{ fontSize: "smaller" }}
                >
                  60 mi piace
                </span>
              </Col>
              <Col className="col-3 text-secondary">2 diffusioni post</Col>
            </Row>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <button
                type="button"
                className="btn btn-white text-secondary fw-semibold cdi"
              >
                <i className="bi bi-hand-thumbs-up me-1"></i>Consiglia
              </button>
            </Col>
            <Col>
              <button
                type="button"
                className="btn btn-white text-secondary fw-semibold cdi"
                onClick={() => setClicked(!clicked)}
              >
                <i className="bi bi-chat-text me-1"></i>Commenta
              </button>
            </Col>
            <Col>
              <button
                type="button"
                className="btn btn-white text-secondary fw-semibold cdi"
              >
                <i className="bi bi-arrow-90deg-right me-1"></i>Diffondi
              </button>
            </Col>
            <Col>
              <button
                type="button"
                className="btn btn-white text-secondary fw-semibold cdi"
              >
                <i className="bi bi-send me-1"></i>Invia
              </button>
            </Col>
          </Row>
          {clicked ? (
            <Row>
              <Col className="col-2">
                <img
                  src="http://placekitten.com/200/300"
                  alt="img-profilo"
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                ></img>
              </Col>
              <Col></Col>
            </Row>
          ) : (
            ""
          )}
        </Card.Footer>
      </Card>
    </>
  );
};

export default MainHomePost;
