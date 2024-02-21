import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// eslint-disable-next-line react/prop-types
const NewExperienceModal = ({ id, api, trigger }) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
  const [show, setShow] = useState(false)
  const empty = {
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: '',
  }
  const [newExperience, setNewExperience] = useState(empty)

  const addExperience = async () => {
    try {
      const res = await fetch(endPoint, {
        method: 'POST',
        headers: {
          Authorization: api,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExperience),
      })
      if (res.ok) {
        setNewExperience(empty)
      } else {
        throw new Error(`${res.status} - Errore nella fetch (nuova esperienza)`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addExperience()
    trigger()
    setShow(false)
  }

  return (
    <>
      <i
        className="bi bi-plus-lg fs-4 text-secondary pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
        style={{
          height: '40px',
          width: '40px',
        }}
        onClick={() => setShow(true)}
      ></i>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi una nuova esperienza lavorativa</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="fs-7">
            <Form.Group className="mb-2">
              <Form.Label>Nome dell&apos;azienda</Form.Label>
              <Form.Control
                className="fs-7"
                type="text"
                value={newExperience.company}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    company: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                className="fs-7"
                type="text"
                value={newExperience.role}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    role: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                className="fs-7"
                type="text"
                value={newExperience.area}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    area: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2 d-flex">
              <div className="w-50 me-3">
                <Form.Label>Data di inizio</Form.Label>
                <Form.Control
                  className="fs-7"
                  type="date"
                  value={newExperience.startDate}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      startDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="w-50">
                <Form.Label>Data di fine</Form.Label>
                <Form.Control
                  className="fs-7"
                  type="date"
                  value={newExperience.endDate}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      endDate: e.target.value,
                    })
                  }
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-2"></Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descrivi le mansioni che svolgevi</Form.Label>
              <Form.Control
                className="fs-7"
                type="textarea"
                rows={2}
                value={newExperience.description}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="rounded-pill py-1 px-3 fw-semibold"
            >
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default NewExperienceModal
