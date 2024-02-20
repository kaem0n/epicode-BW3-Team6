import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
//import pagine
import Formation from "./components/Formation";
import Interests from "./components/Interests";
import MyFooter from "./components/MyFooter";
import ProfileSection from "./components/ProfileSection";
import Resources from "./components/Resources";
import Suggestions from "./components/Suggestions";
import Persons from "./components/Persons";
import ProfileSettings from "./components/ProfileSettings";
import Analisys from "./components/Analisys";
import Activities from "./components/Activities";
import MyNavBar from "./components/MyNavBar";
import NavCanvas from "./components/NavCanvas";
import Experience from "./components/Experience";

function App() {
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
              <Experience />
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
}

export default App;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII
