import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'

const NavSearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  const toggleDropdown = () => {
    const dropdownBtn = document.getElementById('dropdown-basic')
    dropdownBtn.click()
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
    <Form className="me-auto position-relative" onSubmit={handleSubmit}>
      <Row>
        <Col xs="auto" className="dropdown">
          <i
            className="fa-solid fa-magnifying-glass nav-search-icon"
            onClick={fixSearchIconClick}
          ></i>
          <Form.Control
            type="text"
            placeholder="Cerca"
            className="mr-sm-2 nav-search me-auto dropdown-toggle"
            id="nav-searchbar"
            onClick={toggleDropdown}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </Col>
      </Row>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="d-none">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu className="nav-search-dropdown">
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
  )
}

export default NavSearchBar
