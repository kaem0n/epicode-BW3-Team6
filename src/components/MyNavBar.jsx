import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavSearchBar from './NavSearchBar'

const MyNavBar = () => {
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
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-white p-0 border-bottom"
      id="navbar"
    >
      <Container>
        <Navbar.Brand className="p-0">
          <i className="fa-brands fa-linkedin text-primary navbrand-icon"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavSearchBar />
          <Nav>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="fa-solid fa-house nav-icon"></i>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="fa-solid fa-user-group nav-icon"></i>
              <span>Rete</span>
            </Nav.Link>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="fa-solid fa-briefcase nav-icon"></i>
              <span>Lavoro</span>
            </Nav.Link>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="fa-solid fa-comment-dots nav-icon"></i>
              <span>Messaggistica</span>
            </Nav.Link>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="fa-solid fa-bell nav-icon"></i>
              <span>Notifiche</span>
            </Nav.Link>
            <NavDropdown
              align="end"
              title={
                <div className="d-flex flex-column justify-content-center align-items-center py-1 border-end">
                  <img
                    width="24"
                    src="https://placedog.net/50/50"
                    height="24"
                    alt="user"
                    className="rounded-circle dropdown-toggle"
                    role="button"
                  />
                  <div className="dropdown-toggle">Tu</div>
                </div>
              }
              id="collapsible-nav-dropdown"
            >
              <div className="px-2">test</div>
            </NavDropdown>
            <Nav.Link
              onClick={openCanvas}
              className="d-flex flex-column justify-content-center align-items-center py-1 pointer"
            >
              <i className="bi bi-grid-3x3-gap-fill d-flex nav-icon"></i>
              <div className="dropdown-toggle">Per le aziende</div>
            </Nav.Link>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center premium-link">
              {premiumTxtGen()}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavBar
