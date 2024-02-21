import { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const ProfileSettings = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Row className="mt-md-5 mb-2">
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between ">
                <Card.Title>Lingua del profilo</Card.Title>
                <Button
                  className="border-0 bg-transparent "
                  onClick={() => setLgShow(true)}
                >
                  <i className="bi bi-pencil fs-5"></i>
                </Button>
                <Modal
                  className="mt-5"
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="fs-5">
                      Impostazioni lingua del profilo
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="border-bottom modal-body-language">
                    <Row>
                      <Col xs={12} lg={6}>
                        <Row>
                          <Col xs={2} sm={2}>
                            <div>
                              <i className="bi bi-globe"></i>
                            </div>
                          </Col>
                          <Col xs={11} sm={10} className="fs-7">
                            Aggiungi più di una lingua al tuo profilo, cosi sarà
                            più facile trovarti.
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} lg={6}>
                        <Row>
                          <Col xs={2} sm={2}>
                            <i className="bi bi-eyeglasses"></i>
                          </Col>
                          <Col xs={11} sm={10} className="fs-7">
                            Se disponibile, mostreremo il tuo profilo nella
                            lingua di chi lo visita. Se non c&apos;è
                            corrispondenza, verrà mostrato il tuo profilo
                            predefinito
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Body className="p-4">
                    <h6
                      className="mb-3"
                      style={{ color: "gray", fontWeight: "500" }}
                    >
                      Lingue
                    </h6>
                    <Row>
                      <div>
                        <Button
                          variant="secondary"
                          className="bg-transparent btn-modal-italiano py-1 me-2 "
                        >
                          Italiano
                        </Button>
                        <Button className="py-1 bg-transparent btn-add-language mt-xs-3">
                          <i className="bi bi-plus-lg"></i> Aggiungi lingua
                        </Button>
                      </div>
                    </Row>
                    <Row className="mt-3">
                      <Col xs={12} className="d-flex">
                        <i className="fa-regular fa-lightbulb ms-1 me-3 mt-1"></i>
                        <p className="m-0 fs-7 lh-sm">
                          Puoi avere un solo profilo per lingua. Quando cambi il
                          profilo nella tua lingua principale, le sezioni vuote
                          verranno compilate usando la tua precedente lingua
                          principale. Scopri di più su come{" "}
                          <a
                            href="#"
                            className="fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                          >
                            creare profili in un’altra lingua.
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
              </div>
              <Card.Text className="border-bottom pb-3">Italiano</Card.Text>
              <div className="d-flex align-items-center justify-content-between ">
                <Card.Title>Public profile & URL</Card.Title>
                <Button className="border-0 bg-transparent ">
                  <i className="bi bi-pencil fs-5"></i>
                </Button>
              </div>
              <Card.Text>www.link.profilo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProfileSettings;
