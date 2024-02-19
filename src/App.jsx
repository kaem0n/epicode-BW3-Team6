import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
// import dei component
import MyFooter from "./components/MyFooter";
import Resources from "./components/Resources";
import ProfileSection from "./components/ProfileSection";
import Interests from "./components/Interests";
import Formation from "./components/Formation";

function App() {
  return (
    <>
      <ProfileSection />
      <Formation />
      <Resources />
      <Interests />
      <MyFooter />
    </>
  );
}

export default App;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII
