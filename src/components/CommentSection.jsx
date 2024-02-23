import { Form, NavDropdown, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Comment from './Comment'

const CommentSection = ({ id }) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/comments/`
  const API_KEY = localStorage.getItem('comments-key')
  const proPic = useSelector((state) => state.profile.profile.image)
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])

  const getComments = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(endPoint, {
        method: 'GET',
        headers: {
          Authorization: API_KEY,
        },
      })
      if (res.ok) {
        const data = await res.json()
        setComments(data.filter((el) => el.elementId === id))
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Form className="my-2 d-flex align-items-center">
        <Link to="/profile">
          <img
            src={proPic}
            alt="user.image"
            height="48px"
            width="48px"
            className="rounded-circle objectfit-cover me-2"
          />
        </Link>
        <Form.Control
          placeholder="Aggiungi un commento..."
          className="rounded-pill fs-7 border-secondary"
        />
      </Form>
      <NavDropdown title="Ordina" className="text-secondary mb-2">
        <NavDropdown.Item>
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-rocket fs-5 me-2"></i>
            <div className="text-secondary">
              <p className="m-0 fs-7">Più rilevanti</p>
              <span className="fs-8">Vedi i commenti più pertinenti</span>
            </div>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <div className="d-flex align-items-center">
            <i className="fa-regular fa-clock fs-5 me-2"></i>
            <div className="text-secondary">
              <p className="m-0 fs-7">Più recenti</p>
              <span className="fs-8">
                Vedi tutti i commenti (i più recenti sono in alto)
              </span>
            </div>
          </div>
        </NavDropdown.Item>
      </NavDropdown>
      {isLoading ? (
        <div className="text-center py-5">
          {' '}
          <Spinner animation="border" />
        </div>
      ) : comments.length > 0 ? (
        comments.map((el) => (
          <Comment
            key={el._id}
            comment={el.comment}
            date={el.createdAt}
            author={el.author}
          />
        ))
      ) : (
        <h5 className="m-0 text-secondary text-center mb-3">
          Non ci sono commenti
        </h5>
      )}
    </>
  )
}

export default CommentSection
