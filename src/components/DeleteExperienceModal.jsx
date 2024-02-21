/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DeleteExperienceModal = (props) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${props.userId}/experiences/${props.id}`
  const [show, setShow] = useState(false)

  const deleteExperience = async () => {
    try {
      const res = await fetch(endPoint, {
        method: 'DELETE',
        headers: {
          Authorization: props.api,
        },
      })
      if (res.ok) {
        props.trigger()
      } else {
        throw new Error(
          `${res.status} - Errore nella fetch (cancella esperienza)`
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <i
        className="bi bi-x-lg text-secondary fs-4 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
        style={{
          height: '40px',
          width: '40px',
        }}
        onClick={() => setShow(true)}
      ></i>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cancella esperienza ({props.company})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vuoi eliminare questa esperienza di lavoro? Una volta confermata
          l&apos;operazione non sarà possibile tornare indietro.
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-evenly">
          <Button
            variant="secondary"
            className="fw-semibold py-1 rounded-pill"
            onClick={() => setShow(false)}
          >
            Close
          </Button>
          <Button
            variant="danger"
            className="fw-semibold py-1 rounded-pill"
            onClick={() => {
              deleteExperience()
              setShow(false)
            }}
          >
            Conferma
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteExperienceModal
