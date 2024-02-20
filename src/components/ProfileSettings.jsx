import { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'

const ProfileSettings = () => {
  const [lgShow, setLgShow] = useState(false)
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
                  <i className="bi bi-pencil"></i>
                </Button>
                <Modal
                  className="mt-5"
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
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
                          <Col xs={11} sm={10}>
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
                          <Col xs={11} sm={10}>
                            Se disponibile, mostreremo il tuo profilo nella
                            lingua di chi lo visita. Se non c&apos;è
                            corrispondenza, verrà mostrato il tuo profilo
                            predefinito
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Body>
                    <h6
                      className="mb-3"
                      style={{ color: 'gray', fontWeight: '500' }}
                    >
                      Lingue
                    </h6>
                    <Row>
                      <div>
                        <Button className="bg-transparent btn-modal-italiano py-1 me-2 ">
                          Italiano
                        </Button>
                        <Button className="py-1 bg-transparent btn-add-language mt-xs-3">
                          <i className="bi bi-plus-lg"></i> Aggiungi lingua
                        </Button>
                      </div>
                    </Row>
                    <Row className="mt-3">
                      <Col xs={1} className="d-flex justify-content-center">
                        <i className="bi bi-lightbulb"></i>
                      </Col>
                      <Col xs={10}>
                        <p>
                          Puoi avere un solo profilo per lingua. Quando cambi il
                          profilo nella tua lingua principale, le sezioni vuote
                          verranno compilate usando la tua precedente lingua
                          principale.
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
                  <i className="bi bi-pencil"></i>
                </Button>
              </div>
              <Card.Text>www.link.profilo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProfileSettings
