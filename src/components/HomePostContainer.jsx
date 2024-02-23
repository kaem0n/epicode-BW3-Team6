import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import HomePost from './HomePost'
import CreatePost from './CreatePost'

const HomePostContainer = () => {
  const API_KEY = localStorage.getItem('api-key')
  const endPoint = `https://striveschool-api.herokuapp.com/api/posts/`
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [reloadTrigger, setReloadTrigger] = useState(true)

  const getPosts = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(endPoint, {
        headers: {
          Authorization: API_KEY,
        },
      })
      if (res.ok) {
        const data = await res.json()
        setPosts(data.reverse())
        console.log(data)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const trigger = () => setReloadTrigger(!reloadTrigger)

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadTrigger])

  return (
    <>
      <CreatePost trigger={trigger} />
      {isLoading ? (
        <div className="text-center py-5 my-5">
          <Spinner animation="border" />
        </div>
      ) : (
        posts.map((post) => (
          <HomePost post={post} key={post._id} trigger={trigger} />
        ))
      )}
    </>
  )
}

export default HomePostContainer
