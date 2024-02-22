import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useSelector } from 'react-redux'

const HomePostButtons = () => {
  const [show, setShow] = useState(false)
  const proPic = useSelector((state) => state.profile.profile.image)

  return (
    <>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2"
        >
          <i className="bi bi-hand-thumbs-up me-1"></i>
          <span className="fs-7">Consiglia</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2"
          onClick={() => {
            setShow(!show)
          }}
        >
          <i className="fa-regular fa-comment-dots me-1"></i>
          <span className="fs-7">Commenta</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2"
        >
          <i className="fa-solid fa-retweet me-1"></i>
          <span className="fs-7">Diffondi</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2"
        >
          <i className="fa-solid fa-paper-plane me-1"></i>
          <span className="fs-7">Invia</span>
        </button>
      </div>
      {show && (
        <Form className="mt-2 d-flex align-items-center">
          <img
            src={proPic}
            alt="user.image"
            height="48px"
            width="48px"
            className="rounded-circle objectfit-cover me-2 pointer"
          />
          <Form.Control
            placeholder="Aggiungi un commento..."
            className="rounded-pill fs-7 border-secondary"
          />
        </Form>
      )}
    </>
  )
}

export default HomePostButtons
