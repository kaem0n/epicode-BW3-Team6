import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react'

const NavCanvas = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button onClick={handleShow} id="canvas-toggle" className="d-none">
        Launch
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        id="nav-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Per le aziende</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavCanvas
