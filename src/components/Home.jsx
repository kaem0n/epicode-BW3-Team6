import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'react-bootstrap';
//import pagine

import Suggestions from './components/Suggestions';

import MyNavBar from './components/MyNavBar';
import NavCanvas from './components/NavCanvas';
import CreateHomePost from './components/CreateHomePost';
import MainHomePost from './components/MainHomePost';
import NewsSidebar from './components/NewsSidebar';
import HomeFooter from './components/HomeFooter';
import ProfileSidebar from './components/ProfileSidebar';

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
            <Col xs={12} md={2} lg={2}>
              <ProfileSidebar />
            </Col>
            <Col xs={12} md={7} lg={7}>
              <CreateHomePost />

              <MainHomePost />
              <MainHomePost />
              <MainHomePost />

              <Suggestions />
            </Col>
            <Col xs={12} md={3} lg={3}>
              <NewsSidebar />

              <HomeFooter />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>{/* <MyFooter /> */}</footer>
    </>
  );
};
export default Home;
