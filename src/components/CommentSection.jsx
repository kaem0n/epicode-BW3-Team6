/* eslint-disable react/prop-types */
import { Form, NavDropdown, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Comment from './Comment'

const CommentSection = ({ id, fn }) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/comments/`
  const API_KEY = localStorage.getItem('comments-key')
  const proPic = useSelector((state) => state.profile.profile.image)
  const [isLoading, setIsLoading] = useState(true)
  const [reloadTrigger, setReloadTrigger] = useState(true)
  const [comments, setComments] = useState([])
  const [inputValue, setInputValue] = useState('')
  const rate = `${Math.floor(Math.random() * 5) + 1}`

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
        const filteredData = data.filter((el) => el.elementId === id).reverse()
        setComments(filteredData)
        const comments = filteredData.length
        let likes = 0
        for (let i = 0; i < filteredData.length; i++) {
          likes += filteredData[i].rate
        }
        fn(likes, comments)
        console.log(filteredData)
      } else {
        throw new Error(`${res.status} - Errore nella fetch (get comments)`)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const addComment = async () => {
    try {
      const res = await fetch(endPoint, {
        method: 'POST',
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: inputValue,
          rate: rate,
          elementId: id,
        }),
      })
      if (res.ok) {
        getComments()
        setInputValue('')
      } else {
        throw new Error(`${res.status} - Errore nella fetch (crea commento)`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const trigger = () => setReloadTrigger(!reloadTrigger)

  const handleSubmit = (e) => {
    e.preventDefault()
    addComment()
  }

  useEffect(() => {
    getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadTrigger])

  return (
    <div className="mb-2">
      <Form className="my-2 d-flex align-items-center" onSubmit={handleSubmit}>
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
            id={el._id}
            postId={id}
            comment={el.comment}
            date={el.createdAt}
            author={el.author}
            rate={el.rate}
            trigger={trigger}
          />
        ))
      ) : (
        <h5 className="m-0 text-secondary text-center mb-3">
          Non ci sono commenti
        </h5>
      )}
    </div>
  )
}

export default CommentSection
