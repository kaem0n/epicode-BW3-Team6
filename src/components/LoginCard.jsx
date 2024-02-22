import { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { myProfile } from '../redux/actions/ProfileSection'

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII

const LoginCard = () => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(myProfile())
    localStorage.setItem('api-key', 'Bearer ' + inputValue)
    navigate('/home')
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Card
            className="border-0 shadow px-2 mb-4"
            style={{ maxWidth: '352px' }}
          >
            <Card.Body>
              <Card.Title className="fs-2">Accedi</Card.Title>
              <Card.Subtitle className="mb-3 fw-normal fs-7">
                Resta al passo con il tuo mondo professionale
              </Card.Subtitle>
              <Form className="border-bottom pb-3 mb-3" onSubmit={handleSubmit}>
                <Form.Control
                  type="password"
                  placeholder="Inserisci la tua API key"
                  className="mb-2 border-black py-2 rounded-1"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <p>
                  <a
                    href="https://strive.school/linkedin-registration"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
                  >
                    La tua key è scaduta?
                  </a>
                </p>
                <Button
                  type="submit"
                  className="w-100 fw-semibold rounded-pill py-2"
                >
                  Accedi
                </Button>
              </Form>
              <p className="m-0 fs-8">
                Cliccando su Accedi, accetti il{' '}
                <a
                  href="#"
                  className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
                >
                  Contratto di licenza
                </a>
                , l’
                <a
                  href="#"
                  className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
                >
                  Informativa sulla privacy
                </a>{' '}
                e l’
                <a
                  href="#"
                  className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
                >
                  Informativa sui cookie
                </a>{' '}
                di LinkedIn.
              </p>
            </Card.Body>
          </Card>
          <p className="mb-0 text-center">
            Nuovo utente di LinkedIn?{' '}
            <a
              href="https://strive.school/linkedin-registration"
              className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-semibold"
            >
              Iscriviti ora
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginCard
