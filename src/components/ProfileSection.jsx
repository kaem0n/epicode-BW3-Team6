import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myProfile } from '../redux/actions/ProfileSection'
import ImageUploadProfile from './UploadImageProfile'

const ProfileSection = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.profile)
  const [showPostModal, setShowPostModal] = useState(false)

  // Funzione per aprire il modale per la creazione di un post
  const handleCreatePostClick = () => {
    setShowPostModal(true)
  }

  // Funzione per chiudere il modale per la creazione di un post
  const handleClosePostModal = () => {
    setShowPostModal(false)
  }

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
                <div className="hero"></div>

                <img
                  src={state.profile.image}
                  alt="profilo"
                  style={{ width: '10em', left: '25px', top: '88px' }}
                  className="border rounded-circle border-white z-index-1 position-absolute pointer"
                />
                <i
                  onClick={handleCreatePostClick}
                  className="bi bi-camera-fill text-primary position-absolute px-2 py-1 rounded-circle pointer"
                  style={{
                    right: '25px',
                    top: '15px',
                    backgroundColor: 'white',
                  }}
                ></i>
                <ImageUploadProfile
                  show={showPostModal}
                  hide={handleClosePostModal}
                />
              </div>
            </Card.Header>
            <div className="d-flex justify-content-end me-3 mt-3">
              <i
                className="bi bi-pencil text-secondary fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  height: '40px',
                  width: '40px',
                }}
              ></i>
            </div>
            <Card.Body className="px-4 pb-4 pt-0">
              <Row className="justify-content-between">
                <Col className="col-12 col-lg-7">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="fw-semibold fs-4 lh-1 pointer bg-gray-hover py-1 rounded-1 me-2">
                      {state.profile.name} {state.profile.surname} (
                      {state.profile.username})
                    </span>
                    <Button className="py-0 bg-transparent btn-add-language fs-7">
                      <i className="bi bi-shield-check me-1"></i>Verifica ora
                    </Button>
                  </div>
                  <p className="mb-2 lh-1">{state.profile.title}</p>
                  <a
                    href="#"
                    className="d-block d-lg-none fs-7 text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    id="università"
                  >
                    EPICODE
                  </a>
                  <p className="text-secondary fs-7 m-0 mt-2">
                    {state.profile.area}
                    <span>
                      <i className="bi bi-dot"></i>
                    </span>
                    <a
                      href="#"
                      className="fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Informazioni di contatto
                    </a>
                  </p>
                </Col>
                <Col className="col-4 p-0 d-none d-lg-block">
                  <img
                    src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                    alt="logo"
                    width="12%"
                    className="me-2 pointer"
                  />
                  <a
                    href="#"
                    className="fs-7 text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    id="università"
                  >
                    EPICODE
                  </a>
                </Col>
              </Row>
              <Row className="mt-2 g-2 justify-content-start">
                <Col className="px-1 d-flex flex-wrap">
                  <Button className="rounded-pill py-1 fw-semibold me-2 mb-2 justify-self-stretch flex-grow-1 flex-lg-grow-0">
                    Disponibile per
                  </Button>
                  <Button className="bg-transparent btn-add-language py-1 me-2 mb-2">
                    Aggiungi sezione del profilo
                  </Button>
                  <Button
                    variant="secondary"
                    className="rounded-pill py-1 btn-modal-italiano bg-transparent mb-2"
                  >
                    <span className="text-secondary">Altro</span>
                  </Button>
                </Col>
              </Row>
              <div className="mt-3 card-text">
                <Row>
                  <Col className="col-12 col-lg-6 col-md-8 pointer">
                    <Card
                      className="py-2 ps-3 pe-2 border-0 fs-7"
                      style={{
                        backgroundColor: '#dde7f1',
                      }}
                    >
                      <span className="fw-semibold position-relative">
                        Disponibile a lavorare
                        <i
                          className="bi bi-pencil position-absolute top-0 end-0 text-secondary fs-6 pointer bg-darkgray-hover rounded-circle d-flex justify-content-center align-items-center"
                          style={{
                            height: '30px',
                            width: '30px',
                          }}
                        ></i>
                      </span>

                      <p className="m-0">Ruoli di Sviluppatore front-end</p>
                      <a
                        href="#"
                        className="fs-7 fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                        id="università"
                      >
                        Mostra dettagli
                      </a>
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
