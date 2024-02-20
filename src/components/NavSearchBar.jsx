import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'

const NavSearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  const toggleDropdown = () => {
    const dropdownBtn = document.getElementById('dropdown-basic')
    const mobileSearchBar = document.getElementById('nav-searchbar-mobile')
    dropdownBtn.click()
    if (mobileSearchBar) {
      setTimeout(() => {
        mobileSearchBar.focus()
      }, 10)
    }
  }

  const fixSearchIconClick = () => {
    const searchBar = document.getElementById('nav-searchbar')
    searchBar.click()
    searchBar.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue('')
  }

  const txtFill = (str) => setInputValue(str)

  return (
    <>
      <Form className="me-lg-auto" onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto" className="d-none d-lg-block position-relative">
            <i
              className="fa-solid fa-magnifying-glass nav-search-icon"
              onClick={fixSearchIconClick}
            ></i>
            <Form.Control
              type="text"
              placeholder="Cerca"
              className="nav-search me-auto"
              id="nav-searchbar"
              onClick={toggleDropdown}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </Col>
        </Row>

        <Nav>
          <Nav.Link
            className="d-lg-none d-flex flex-column justify-content-center align-items-center py-1"
            onClick={toggleDropdown}
          >
            <i className="fa-solid fa-magnifying-glass nav-icon"></i>
            <span className="d-none d-md-inline">Cerca</span>
          </Nav.Link>
        </Nav>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="d-none">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu className="nav-search-dropdown">
            <div className="px-2 pb-2 mb-1 border-bottom position-relative d-lg-none">
              <i className="fa-solid fa-magnifying-glass nav-search-icon-mobile"></i>
              <Form.Control
                type="text"
                placeholder="Cerca"
                className="nav-search me-auto"
                id="nav-searchbar-mobile"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                autoFocus
              />
            </div>
            <p className="mb-2 ms-3 fw-semibold">Prova a cercare</p>
            <Dropdown.Item
              href="#"
              className="py-2 fw-semibold"
              onClick={() => {
                txtFill('#hiring')
              }}
            >
              <i className="fa-solid fa-magnifying-glass me-3 fs-7"></i> #hiring
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="py-2 fw-semibold"
              onClick={() => {
                txtFill('#recruiter')
              }}
            >
              <i className="fa-solid fa-magnifying-glass me-3 fs-7"></i>{' '}
              #recruiter
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="py-2 fw-semibold"
              onClick={() => {
                txtFill('#intern')
              }}
            >
              <i className="fa-solid fa-magnifying-glass me-3 fs-7"></i> #intern
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="py-2 fw-semibold"
              onClick={() => {
                txtFill('#hr')
              }}
            >
              <i className="fa-solid fa-magnifying-glass me-3 fs-7"></i> #hr
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </>
  )
}

export default NavSearchBar
