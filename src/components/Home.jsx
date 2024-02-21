import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'react-bootstrap';

//import pagine
import CreateHomePost from './CreateHomePost';
import MainHomePost from './MainHomePost';
import NewsSidebar from './NewsSidebar';
import HomeFooter from './HomeFooter';
import ProfileSidebar from './ProfileSidebar';
import Suggestions from './Suggestions';
import HomeShowMore from './HomeShowMore';
import JobsSidebar from './jobs_components/JobsSidebar';

const Home = () => (
  <Container className="mt-5" fluid="xl">
    <Row className="justify-content-center">
      <Col xs={12} md={2} lg={3}>
        <ProfileSidebar />
        <HomeShowMore />
        <JobsSidebar />
      </Col>
      <Col xs={12} md={6} lg={5} xl={6}>
        <CreateHomePost />
        <MainHomePost />
        <Suggestions />
      </Col>
      <Col xs={12} md={4} lg={4} xl={3}>
        <NewsSidebar />
        <HomeFooter />
      </Col>
    </Row>
  </Container>
);

export default Home;
