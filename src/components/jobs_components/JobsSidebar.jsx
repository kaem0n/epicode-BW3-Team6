import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';

import Dropdown from 'react-bootstrap/Dropdown';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const JobsSidebar = () => {
  return (
    <>
      <Card className="mt-2">
        <Card.Body className="ps-0 pe-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fs-7">
              <i className="bi bi-bookmark-fill"></i> Le mie offerte di lavoro
            </div>
            <div className="d-md-none">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="btn-homepost text-secondary"
                >
                  Altro
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Button>Pubblica offerta gratutita</Button>
    </>
  );
};

export default JobsSidebar;
