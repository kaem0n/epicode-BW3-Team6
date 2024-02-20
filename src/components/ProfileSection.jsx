import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myProfile } from '../redux/actions/ProfileSection'

const ProfileSection = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.profile)

  useEffect(() => {
    dispatch(myProfile())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row className="mt-5 mb-2">
      <Col>
        {state.profile ? (
          <Card>
            <Card.Header className="p-0">
              <div className="position-relative">
                <img
                  src="https://www.ll-mm.com/images/placeholders/image-placeholder.jpg"
                  alt="bg-hero"
                  style={{ width: '100%', height: '10em' }}
                />

                <img
                  src={state.profile.image}
                  alt="profilo"
                  style={{ width: '10em', left: '33px', top: '88px' }}
                  className=" border rounded-circle border-white z-index-1 position-absolute"
                />
                <i
                  className="bi bi-pen text-primary position-absolute px-2 py-1 rounded-circle"
                  style={{
                    right: '25px',
                    top: '15px',
                    backgroundColor: 'white',
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
                        <i className="bi bi-shield-check me-2"></i>Verifica ora
                      </button>
                    </span>
                  </span>
                  <p className="mb-0">{state.profile.title}</p>
                  <p className="text-secondary">
                    {state.profile.area}{' '}
                    <span>
                      <i className="bi bi-dot"></i>
                    </span>
                    <span className="text-primary fw-semibold">
                      Informazioni di contatto
                    </span>
                  </p>
                  <p className="text-primary fw-semibold mb-0">Collegamenti</p>
                </Col>
                <Col className="col-4 p-0">
                  <img
                    src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                    alt="logo"
                    style={{ width: '2em' }}
                  />
                  <span id="università">Epicode</span>
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
              <div className="mt-3 card-text">
                <Row>
                  <Col className="col-6">
                    <Card
                      className="py-1 px-3 border-0"
                      style={{
                        fontSize: '0.9em',
                        backgroundColor: '#dde7f1',
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
              </div>
            </Card.Body>
          </Card>
        ) : (
          <Spinner variant="primary"></Spinner>
        )}
      </Col>
    </Row>
  )
}

export default ProfileSection
