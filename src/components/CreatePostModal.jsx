/* eslint-disable react/prop-types */
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const CreatePostModal = ({ profile }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        className="btn-starthomepost flex-grow-1 fs-7 w-100 h-100 px-3"
        onClick={() => setShow(true)}
      >
        Avvia un post
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        className="mt-5"
      >
        <Modal.Header closeButton className="align-items-start p-4 border-0">
          <div className="d-flex px-3 py-3 align-items-center pointer bg-gray-hover rounded-4">
            <img
              src={profile ? profile.image : ''}
              alt="profile-pic"
              height="56px"
              width="56px"
              className="rounded-circle objectfit-cover me-2 pointer"
            />
            <div>
              <h5 className="m-0">
                {profile.name} {profile.surname}
              </h5>
              <p className="m-0 fs-7">Pubblica: Chiunque</p>
            </div>
          </div>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Control
              type="textarea"
              rows={7}
              placeholder="Di cosa vorresti parlare?"
              className="fs-5 border-0 boxshadow-0"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button className="fw-semibold rounded-pill px-3 py-1" disabled>
              Pubblica
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default CreatePostModal
