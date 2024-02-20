import Formation from './components/Formation';
import Interests from './components/Interests';
import MyFooter from './components/MyFooter';
import ProfileSection from './components/ProfileSection';
import Resources from './components/Resources';
import Suggestions from './components/Suggestions';
import Persons from './components/Persons';
import ProfileSettings from './components/ProfileSettings';
import Analisys from './components/Analisys';
import Activities from './components/Activities';
import MyNavBar from './components/MyNavBar';
import NavCanvas from './components/NavCanvas';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <header>
        <MyNavBar />
        <NavCanvas />
      </header>
      <main>
        <Container>
          <Row>
            <Col className="col-8">
              <ProfileSection />
              <Analisys />
              <Resources />
              <Activities />
              <Formation />
              <Suggestions />
              <Interests />
            </Col>
            <Col className="col-4">
              <ProfileSettings />
              <Persons />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
};
export default Home;
