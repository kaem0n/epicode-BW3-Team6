import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

/* eslint-disable react/prop-types */
const Comment = (props) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/comments/${props.id}`
  const API_KEY = localStorage.getItem('comments-key')
  const [show, setShow] = useState(false)
  const [inputValue, setInputValue] = useState(props.comment)

  const formatDate = (date) => {
    const year = date.slice(0, 4)
    const month = date.slice(5, 7)
    const day = date.slice(8, 10)
    const hour = date.slice(date.indexOf('T') + 1, date.indexOf('T') + 6)
    return `${day}/${month}/${year} alle ${hour}`
  }

  const deleteComment = async () => {
    try {
      const res = await fetch(endPoint, {
        method: 'DELETE',
        headers: {
          Authorization: API_KEY,
        },
      })
      if (res.ok) {
        props.trigger()
      } else {
        throw new Error(
          `${res.status} - Errore nella fetch (cancella commento)`
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  const modifyComment = async () => {
    try {
      const res = await fetch(endPoint, {
        method: 'PUT',
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: inputValue,
          rate: props.rate,
          elementId: props.postId,
        }),
      })
      if (res.ok) {
        props.trigger()
        setInputValue('')
      } else {
        throw new Error(
          `${res.status} - Errore nella fetch (modifica commento)`
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    modifyComment()
    setShow(false)
  }

  return (
    <>
      <div className="d-flex mb-3">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt="test"
          height="40px"
          width="40px"
          className="rounded-circle objectfit-cover me-1 mt-1 pointer"
        />
        <div className="d-flex flex-column flex-grow-1">
          <div className="bg-gray w-100 p-2 fs-7 comment">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex flex-column mb-1">
                <a
                  href="#"
                  className="text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                >
                  {props.author}
                </a>
                <span className="text-secondary fs-8">
                  Postato il: {formatDate(props.date)}
                </span>
              </div>
              <span className="text-secondary fs-6">
                <i
                  className="fa-solid fa-ellipsis pointer me-2"
                  onClick={() => setShow(!show)}
                ></i>
                <i
                  className="fa-solid fa-xmark pointer"
                  onClick={deleteComment}
                ></i>
              </span>
            </div>
            {!show && <p className="m-0">{props.comment}</p>}
            {show && (
              <Form
                className="d-flex flex-column align-items-end"
                onSubmit={handleSubmit}
              >
                <Form.Control
                  className="fs-7 boxshadow-0 p-1"
                  as="textarea"
                  rows={2}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                  type="submit"
                  variant={
                    inputValue === props.comment ? 'secondary' : 'primary'
                  }
                  size="sm"
                  className="rounded-pill fw-semibold mt-1"
                  disabled={inputValue === props.comment ? true : false}
                >
                  Conferma
                </Button>
              </Form>
            )}
          </div>
          <div className="fs-8 text-secondary pointer">
            <span className="bg-gray-hover">Consiglia</span>
            <i className="bi bi-dot"></i>
            <i className="fa-regular fa-thumbs-up me-1"></i>
            <a
              href="#"
              className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              {props.rate}
            </a>
            <i className="bi bi-dot"></i>
            <span className="bg-gray-hover">Rispondi</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment
