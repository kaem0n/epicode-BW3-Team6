import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Suggestions from "./components/Suggestions";
import { Button, Card } from "react-bootstrap";
import ProfileSettings from "./components/ProfileSettings";
import Persons from "./components/Persons";

function App() {
  return (
    <div>
      <Suggestions />
      <ProfileSettings />
      <Persons />
    </div>
  );
}

export default App;
export default App;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII
