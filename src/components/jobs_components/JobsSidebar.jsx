import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';

const JobsSidebar = () => {
  return (
    <>
      <Card className="mt-2 mb-2" style={{ fontSize: '1.1rem' }}>
        <Card.Body className="ps-0 pe-0">
          <div className="d-flex justify-content-between   align-items-center">
            <ul className="list-unstyled m-0 p-0 ps-3">
              <li className="mb-0 mb-md-3 mt-md-3">
                <i className="bi bi-bookmark-fill pe-1 "></i>{' '}
                <span>Le mie offerte di lavoro</span>
              </li>
              <div className="d-none d-md-block pe-1">
                <li className="mb-3">
                  <i className="bi bi-list-ul pe-1"></i> <span>Preferenze</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-clipboard2-check pe-1"></i>{' '}
                  <span>Valutazione delle competenze</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-play-btn-fill pe-1"></i>{' '}
                  <span>Indicazioni per chi cerca lavoro</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-gear-fill pe-1"></i>{' '}
                  <span>Impostazioni candidatura </span>
                </li>
              </div>
            </ul>
            <div className="d-md-none ">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="btn-homepost text-secondary fw-bold me-2"
                >
                  Altro
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="fw-bold" href="#/action-1">
                    {' '}
                    <i className="bi bi-list-ul pe-2 fw-bold"></i>Preferenze
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold" href="#/action-2">
                    <i className="bi bi-clipboard2-check pe-2 fw-bold"></i>
                    Valutazione delle referenze
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold" href="#/action-3">
                    <i className="bi bi-play-btn-fill pe-2 fw-bold"></i>
                    Indicazioni per chi cerca lavoro
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold" href="#/action-3 fw-bold">
                    <i className="bi bi-gear-fill pe-2 fw-bold"></i>
                    Impostazioni candidatura
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="d-md-block d-lg-block d-none text-center">
        <Button className="btn-jobsidebar">
          {' '}
          <i className="bi bi-pencil-square"></i> Pubblica offerta gratutita
        </Button>
      </div>
    </>
  );
};

export default JobsSidebar;
