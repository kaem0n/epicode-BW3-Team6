import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProfileSection from './ProfileSection'
import Suggestions from './Suggestions'
import Analysis from './Analisys'
import Resources from './Resources'
import Activities from './Activities'
import Formation from './Formation'
import Interests from './Interests'
import ProfileSettings from './ProfileSettings'
import Persons from './Persons'
import MyFooter from './MyFooter'
import NewExperiences from './NewExperiences'
import { myProfile } from '../redux/actions/ProfileSection'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Profile = () => {
  const dispatch = useDispatch()
  const API_KEY = localStorage.getItem('api-key')

  useEffect(() => {
    dispatch(myProfile(API_KEY))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={7} lg={8} xl={9}>
            <ProfileSection />
            <Suggestions />
            <Analysis />
            <Resources />
            <Activities />
            <Formation />
            <NewExperiences />
            <Interests />
          </Col>
          <Col xs={12} md={5} lg={4} xl={3}>
            <ProfileSettings />
            <Persons />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default Profile
