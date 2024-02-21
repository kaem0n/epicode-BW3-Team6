import Card from 'react-bootstrap/Card';

const NewsSidebar = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <h6>LinkedIn notizie</h6>
          <span>
            <i className="bi bi-info-square-fill"></i>
          </span>
        </Card.Title>
        <Card.Text>
          <ul className="mt2  mb1 list-unstyled">
            <li className="mtlr">
              <a className="text-decoration-none" href="#">
                <div className=" link-dark text-decoration-none   ">
                  <p className="text-truncate m-0">
                    Top Voices Lavoro: 6 temi da approfondire
                  </p>
                  <p className="text-secondary">17 ore fa</p>
                </div>
              </a>
            </li>
            <li className="mtlr">
              <a className="text-decoration-none" href="#">
                <div className=" link-dark text-decoration-none   ">
                  <p className=" m-0">
                    Top Voices Lavoro: 6 temi da approfondire
                  </p>
                  <p className="text-secondary">17 ore fa</p>
                </div>
              </a>
            </li>
            <li className="mtlr">
              <a className="text-decoration-none" href="#">
                <div className=" link-dark text-decoration-none   ">
                  <p className=" m-0">
                    Top Voices Lavoro: 6 temi da approfondire
                  </p>
                  <p className="text-secondary">17 ore fa</p>
                </div>
              </a>
            </li>
            <li className="mtlr">
              <a className="text-decoration-none" href="#">
                <div className=" link-dark text-decoration-none   ">
                  <p className=" m-0">
                    Top Voices Lavoro: 6 temi da approfondire
                  </p>
                  <p className="text-secondary">17 ore fa</p>
                </div>
              </a>
            </li>
            <li className="mtlr ">
              <a className="text-decoration-none" href="#">
                <div className=" link-dark text-decoration-none   ">
                  <p className=" m-0 ">
                    <span className="span-bullet m-0"></span>
                    Il richiamo della montagna
                  </p>
                  <p className="text-secondary">17 ore fa</p>
                </div>
              </a>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsSidebar;
