import { useState } from 'react'
import CommentSection from './CommentSection'

const HomePostButtons = ({ id }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="border-bottom py-1 mb-1 d-flex justify-content-between align-items-center">
        <div>
          <i className="fa-regular fa-thumbs-up text-secondary"></i>{' '}
          <a
            href="#"
            className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover me-2"
          >
            0
          </a>
        </div>
        <a
          href="#"
          className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover me-2"
        >
          0 Commenti
        </a>
      </div>
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
      {show && <CommentSection id={id} />}
    </>
  )
}

export default HomePostButtons
