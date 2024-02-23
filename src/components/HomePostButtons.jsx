/* eslint-disable react/prop-types */
import { useState } from 'react'
import CommentSection from './CommentSection'

const HomePostButtons = ({ id }) => {
  // const endPoint = `https://striveschool-api.herokuapp.com/api/comments/`
  // const API_KEY = localStorage.getItem('comments-key')
  const [show, setShow] = useState(false)
  const [commentNum, setCommentNum] = useState(undefined)
  const [likes, setLikes] = useState(undefined)

  const likesAndComments = (n, m) => {
    setLikes(n)
    setCommentNum(m)
  }

  return (
    <>
      <div className="border-bottom py-1 mb-1 d-flex justify-content-between align-items-center">
        <div>
          <i className="fa-regular fa-thumbs-up text-secondary"></i>{' '}
          <a
            href="#"
            className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover me-2"
          >
            {likes || likes === 0 ? likes : <i className="bi bi-dot"></i>}
          </a>
        </div>
        <a
          href="#"
          className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover me-2"
        >
          {commentNum || commentNum === 0 ? (
            commentNum
          ) : (
            <i className="bi bi-dot"></i>
          )}
          {commentNum && commentNum === 1 ? ' Commento' : ' Commenti'}
        </a>
      </div>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2 px-sm-2 px-1"
        >
          <i className="bi bi-hand-thumbs-up me-1"></i>
          <span className="fs-7 none ">Consiglia</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2 px-sm-2 px-1"
          onClick={() => {
            setShow(!show)
          }}
        >
          <i className="fa-regular fa-comment-dots me-1"></i>
          <span className="fs-7 none">Commenta</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2 px-sm-2 px-1"
        >
          <i className="fa-solid fa-retweet me-1"></i>
          <span className="fs-7 none">Diffondi</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2 px-sm-2 px-1"
        >
          <i className="fa-solid fa-paper-plane me-1"></i>
          <span className="fs-7 none">Invia</span>
        </button>
      </div>
      {show && <CommentSection id={id} fn={likesAndComments} />}
    </>
  )
}

export default HomePostButtons
