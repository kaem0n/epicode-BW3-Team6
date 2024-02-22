import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import pagine
import MyNavBar from './components/MyNavBar'
import NavCanvas from './components/NavCanvas'
import Profile from './components/Profile'
import Home from './components/Home'
import JobsPage from './components/JobsPage'
import LogIn from './components/LogIn'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem('api-key') ? (
              <>
                <header>
                  <MyNavBar />
                  <NavCanvas />
                </header>
                <main>
                  <Home />
                </main>
              </>
            ) : (
              <LogIn />
            )
          }
        />
        <Route
          path="/home"
          element={
            <>
              <header>
                <MyNavBar />
                <NavCanvas />
              </header>
              <main>
                <Home />
              </main>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <header>
                <MyNavBar />
                <NavCanvas />
              </header>
              <main>
                <Profile />
              </main>
            </>
          }
        />
        <Route
          path="/jobs"
          element={
            <>
              <header>
                <MyNavBar />
                <NavCanvas />
              </header>
              <main>
                <JobsPage />
              </main>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII
