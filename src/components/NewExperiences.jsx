import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import ExperienceElement from './ExperienceElement'
import NewExperienceModal from './NewExperienceModal'
import { useEffect, useState } from 'react'

const NewExperiences = () => {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII'
  const [experiences, setExperiences] = useState([])
  const [userId, setUserId] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [reloadTrigger, setReloadTrigger] = useState(true)

  const getExperiences = async () => {
    setIsLoading(true)
    try {
      const res1 = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      if (res1.ok) {
        const data1 = await res1.json()
        setUserId(data1._id)
        const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${data1._id}/experiences`
        try {
          const res2 = await fetch(endPoint, {
            headers: {
              Authorization: API_KEY,
            },
          })
          if (res2.ok) {
            const data2 = await res2.json()
            setExperiences(data2)
          } else {
            throw new Error(`${res2.status} - Errore nella fetch (Esperienze)`)
          }
        } catch (err2) {
          console.log(err2)
        }
      } else {
        throw new Error(`${res1.status} - Errore nella fetch`)
      }
    } catch (err1) {
      console.log(err1)
    } finally {
      setIsLoading(false)
    }
  }

  const trigger = () => setReloadTrigger(!reloadTrigger)

  useEffect(() => {
    getExperiences()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadTrigger])

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Card.Title className="m-0">Esperienze</Card.Title>
          <NewExperienceModal id={userId} api={API_KEY} trigger={trigger} />
        </div>
        {isLoading ? (
          <div className="text-center mb-5">
            <Spinner animation="border" />
          </div>
        ) : (
          experiences.map((el) => (
            <ExperienceElement
              key={el._id}
              trigger={trigger}
              userId={userId}
              id={el._id}
              api={API_KEY}
              company={el.company}
              role={el.role}
              description={el.description}
              area={el.area}
              start={el.startDate}
              end={el.endDate}
            />
          ))
        )}
      </Card.Body>
    </Card>
  )
}

export default NewExperiences
