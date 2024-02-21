import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProfileSection from './ProfileSection'
import Suggestions from './Suggestions'
import Analysis from './Analisys'
import Resources from './Resources'
import Activities from './Activities'
import Formation from './Formation'
import Experience from './Experience'
import Interests from './Interests'
import ProfileSettings from './ProfileSettings'
import Persons from './Persons'

const Profile = () => (
  <Container>
    <Row>
      <Col xs={12} md={7} lg={8} xl={9}>
        <ProfileSection />
        <Suggestions />
        <Analysis />
        <Resources />
        <Activities />
        <Formation />
        <Experience />
        <Interests />
      </Col>
      <Col xs={12} md={5} lg={4} xl={3}>
        <ProfileSettings />
        <Persons />
      </Col>
    </Row>
  </Container>
)

export default Profile
