/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModifyExperienceModal = (props) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${props.userId}/experiences/${props.id}`
  const [show, setShow] = useState(false)
  const originalExperience = {
    role: props.role,
    company: props.company,
    startDate: props.start,
    endDate: props.end,
    description: props.description,
    area: props.area,
  }
  const [experience, setExperience] = useState(originalExperience)

  const modifyExperience = async () => {
    try {
      const res = await fetch(endPoint, {
        method: 'PUT',
        headers: {
          Authorization: props.api,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(experience),
      })
      if (res.ok) {
        setExperience(originalExperience)
      } else {
        throw new Error(
          `${res.status} - Errore nella fetch (modifica esperienza)`
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    modifyExperience()
    props.trigger()
    setShow(false)
  }

  return (
    <>
      <i
        className="bi bi-pencil text-secondary fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
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
          <Modal.Title>Modifica esperienza ({props.company})</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="fs-7">
            <Form.Group className="mb-2">
              <Form.Label>Nome dell&apos;azienda</Form.Label>
              <Form.Control
                className="fs-7"
                type="text"
                value={experience.company}
                onChange={(e) =>
                  setExperience({
                    ...experience,
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
                value={experience.role}
                onChange={(e) =>
                  setExperience({
                    ...experience,
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
                value={experience.area}
                onChange={(e) =>
                  setExperience({
                    ...experience,
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
                  value={experience.startDate}
                  onChange={(e) =>
                    setExperience({
                      ...experience,
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
                  value={experience.endDate}
                  onChange={(e) =>
                    setExperience({
                      ...experience,
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
                value={experience.description}
                onChange={(e) =>
                  setExperience({
                    ...experience,
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

export default ModifyExperienceModal
