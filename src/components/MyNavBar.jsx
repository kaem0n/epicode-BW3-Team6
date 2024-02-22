import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavSearchBar from './NavSearchBar'
import NavProfileCard from './NavProfileCard'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

const MyNavBar = () => {
  const toggleDropdown = () => {
    const dropdownBtn = document.getElementById('dropdown-ellipsis')
    dropdownBtn.click()
  }

  const premiumTxtGen = () => {
    const text = [
      'Raggiungi i tuoi obiettivi con Premium',
      'Prova 1 mese di Premium per 0 EUR',
      'Da non perdere: Premium per 0 EUR',
      'Ottieni Premium per 0 EUR',
      'Sblocca Premium gratis per 1 mese',
      'Aggiorna le tue competenze con Premium',
      'Prova Premium per 0 EUR',
      'Una rete più smart con Premium',
      'Prova Premium gratis',
      'Fai decollare la tua carriera con Premium',
      'Sblocca 1 mese di Premium',
    ]
    const i = Math.floor(Math.random() * text.length)
    return text[i]
  }

  const openCanvas = () => {
    const canvasBtn = document.getElementById('canvas-toggle')
    canvasBtn.click()
  }

  return (
    <header>
      <Navbar
        collapseOnSelect
        className="bg-white p-0 border-bottom"
        id="navbar"
        fixed="top"
      >
        <Container fluid="xl" className="justify-content-start">
          <Link to="/home" className="navbar-brand p-0 pointer">
            <i className="fa-brands fa-linkedin text-primary navbrand-icon"></i>
          </Link>

          <NavSearchBar />

          <Nav>
            <Link
              to="/home"
              className="nav-link d-flex flex-column justify-content-center align-items-center py-1"
            >
              <i className="fa-solid fa-house nav-icon"></i>
              <span className="d-none d-md-inline">Home</span>
            </Link>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="fa-solid fa-user-group nav-icon"></i>
              <span className="d-none d-md-inline">Rete</span>
            </Nav.Link>
            <Link
              to="/jobs"
              className="nav-link d-flex flex-column justify-content-center align-items-center py-1"
            >
              <i className="fa-solid fa-briefcase nav-icon"></i>
              <span className="d-none d-md-inline">Lavoro</span>
            </Link>
            <Nav.Link className="d-none-400 d-flex flex-column justify-content-center align-items-center py-1">
              <i className="fa-solid fa-comment-dots nav-icon"></i>
              <span className="d-none d-md-inline">Messaggistica</span>
            </Nav.Link>
            <Nav.Link className="d-none-475 d-flex flex-column justify-content-center align-items-center py-1">
              <i className="fa-solid fa-bell nav-icon"></i>
              <span className="d-none d-md-inline">Notifiche</span>
            </Nav.Link>
            <div className="d-none justify-content-center align-items-center d-sm-flex">
              <NavProfileCard />
            </div>
            <Nav.Link
              onClick={openCanvas}
              className="d-none d-sm-flex flex-column justify-content-center align-items-center py-1 ms-0 ms-md-3 pointer"
            >
              <i className="bi bi-grid-3x3-gap-fill d-flex nav-icon"></i>
              <div className="dropdown-toggle d-none d-md-block">
                Per le aziende
              </div>
            </Nav.Link>
            <Nav.Link className="d-none d-md-flex flex-column justify-content-center align-items-center premium-link ms-0 ms-md-2">
              {premiumTxtGen()}
            </Nav.Link>
          </Nav>

          <Nav.Link
            className="ms-auto d-flex d-md-none flex-column justify-content-center align-items-center py-1"
            onClick={toggleDropdown}
          >
            <i className="fa-solid fa-ellipsis nav-icon"></i>
          </Nav.Link>
          <Dropdown align="end">
            <Dropdown.Toggle id="dropdown-ellipsis" className="d-none">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-4">
              <div className="d-flex justify-content-center align-items-center px-1">
                <Nav.Link className="d-flex-400 flex-column justify-content-center align-items-center py-1">
                  <i className="fa-solid fa-comment-dots nav-icon"></i>
                  <span className="d-none d-md-inline">Messaggistica</span>
                </Nav.Link>
                <Nav.Link className="d-flex-475 flex-column justify-content-center align-items-center py-1">
                  <i className="fa-solid fa-bell nav-icon"></i>
                  <span className="d-none d-md-inline">Notifiche</span>
                </Nav.Link>
                <div className="d-flex d-sm-none justify-content-center align-items-center d-sm-flex">
                  <NavProfileCard />
                </div>
                <Nav.Link
                  onClick={openCanvas}
                  className="d-flex d-sm-none flex-column justify-content-center align-items-center ms-0 ms-md-1 pointer"
                >
                  <i className="bi bi-grid-3x3-gap-fill d-flex nav-icon"></i>
                  <div className="dropdown-toggle d-none d-md-block">
                    Per le aziende
                  </div>
                </Nav.Link>
                <Nav.Link className="d-flex d-md-none premium-link fs-8 m-0 p-0">
                  {premiumTxtGen()}
                </Nav.Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </header>
  )
}

export default MyNavBar
