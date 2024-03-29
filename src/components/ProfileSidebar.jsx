import { Spinner } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const ProfileSidebar = () => {
  const state = useSelector((state) => state.profile)
  const [clicked, setClicked] = useState(true)

  return (
    <>
      {state.profile ? (
        <>
          <Card className="mb-0">
            <div className="p-0">
              <div className="position-relative">
                <img
                  src="https://picsum.photos/400/100"
                  alt="bg-hero"
                  style={{ height: '57px' }}
                  className="objectfit-cover pointer rounded-top w-100"
                />
              </div>
            </div>
            <div
              className="position-absolute"
              style={{ left: '50%', top: '10%', transform: 'translateX(-50%)' }}
            >
              <Link to="/profile">
                <img
                  src={state.profile.image}
                  alt="img-profile"
                  style={{ width: '3.5em', height: '3.5em', left: '53px' }}
                  className="rounded-circle"
                />
              </Link>
            </div>
            <Card.Body className="text-center mt-5">
              <Card.Title className="mb-0">
                Ti diamo il benvenuto {state.profile.name}!
              </Card.Title>
              <Card.Text
                className=" text-secondary"
                style={{ fontSize: 'smaller' }}
              >
                {state.profile.title}
              </Card.Text>
            </Card.Body>
          </Card>
          <div
            className={
              clicked ? 'list-group-flush d-flex flex-column' : 'd-none'
            }
          >
            <Card className="mt-0">
              <ListGroup>
                <ListGroup.Item className="mtlr">
                  <a className="text-decoration-none" href="#">
                    <div className="link-dark text-decoration-none   ">
                      <div className="d-flex justify-content-between">
                        <p
                          className="text-secondary mb-0 "
                          style={{ fontSize: 'smaller' }}
                        >
                          Collegamenti{' '}
                        </p>
                        <span>
                          <i className="bi bi-person-plus-fill"></i>
                        </span>
                      </div>
                      <p
                        className="mt-0 fw-semibold"
                        style={{ fontSize: 'smaller' }}
                      >
                        Espandi la tua rete
                      </p>
                    </div>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="mtlr">
                  <a className="text-decoration-none" href="#">
                    <div className=" link-dark text-decoration-none">
                      <p
                        className="text-secondary"
                        style={{ fontSize: 'smaller' }}
                      >
                        Accedi a strumenti è informazioni in esclusiva
                      </p>
                      <p
                        className="mt-0 fw-semibold"
                        style={{ fontSize: 'smaller' }}
                      >
                        <span>
                          <i className="bi bi-square-fill text-warning"></i>
                        </span>{' '}
                        Prova Premium per 0 EURO
                      </p>
                    </div>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="mtlr">
                  <a
                    className="text-decoration-none"
                    style={{ fontSize: 'smaller' }}
                    href="#"
                  >
                    <div className="d-flex align-items-center text-secondary text-decoration-none">
                      <i
                        className="bi bi-bookmark-fill text-secondary me-1"
                        style={{ fontSize: 'smaller' }}
                      ></i>{' '}
                      I miei elementi
                    </div>
                  </a>
                </ListGroup.Item>{' '}
              </ListGroup>
            </Card>
            <Card className="mt-2">
              <Card.Body
                className={
                  clicked ? 'd-flex  justify-content-between' : 'd-none'
                }
              >
                <div className="d-flex flex-column justify-content-around">
                  <a
                    href="#"
                    className="text-decoration-none fw-semibold"
                    style={{ fontSize: 'smaller' }}
                  >
                    Gruppi
                  </a>
                  <a
                    href="#"
                    className="text-decoration-none fw-semibold"
                    style={{ fontSize: 'smaller' }}
                  >
                    Eventi{' '}
                  </a>
                  <a
                    href="#"
                    className="text-decoration-none fw-semibold"
                    style={{ fontSize: 'smaller' }}
                  >
                    Hastag seguiti
                  </a>
                </div>
                <div className="d-flex align-items-center fw-semibold">
                  <i className="bi bi-plus-lg "></i>
                </div>
              </Card.Body>
              <Card.Footer className={clicked ? 'd-block mtlr' : 'd-none'}>
                <a className="text-decoration-none" href="#">
                  <div className="d-flex justify-content-center text-secondary text-decoration-none  ">
                    Scopri di più
                  </div>
                </a>
              </Card.Footer>
            </Card>
          </div>

          <div className="text-center m-2 d-inlined  d-md-none ">
            <Button
              onClick={() => setClicked(!clicked)}
              className="text-secondary btn-homepost p-0 dropdown-toggle"
              style={{ width: '100%' }}
            >
              {clicked ? 'Meno dettagli' : 'Vedi altro'}
            </Button>
          </div>
        </>
      ) : (
        <Spinner variant="primary"></Spinner>
      )}
    </>
  )
}
export default ProfileSidebar
