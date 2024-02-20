import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// eslint-disable-next-line react/prop-types
const Person = ({ img, name, title, id }) => {
  return (
    <Row className="border-bottom mb-3 py-2 flex-column">
      <Col className="d-flex align-items-start">
        <img
          src={img}
          className="rounded-circle me-2 flex-shrink-0 pointer"
          width="48px"
          height="48px"
        />
        <div>
          <a
            href={id}
            className="d-block fs-6 text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            id="università"
          >
            {name}
          </a>
          <p className="fs-7 mb-2 pointer">{title}</p>
          <Button
            variant="secondary"
            className="rounded-pill py-1 btn-modal-italiano bg-transparent mb-2"
          >
            <span className="text-secondary">
              <i className="bi bi-person-plus-fill"></i> Collegati
            </span>
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default Person
