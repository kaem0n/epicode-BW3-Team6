/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const PostModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Crea un post</Modal.Title>
      </Modal.Header>
      <Modal.Body>:) :)</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={hide}>
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostModal
