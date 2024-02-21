import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import pagine

import MyNavBar from './components/MyNavBar';
import NavCanvas from './components/NavCanvas';
import Profile from './components/Profile';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import JobsPage from './components/JobsPage';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <MyNavBar />
        <NavCanvas />
      </header>
      <main>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default App;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII
