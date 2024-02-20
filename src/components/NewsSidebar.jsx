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
          <ul className="mt2  mb1">
            <li>
              <a href="#">
                <p> Top Voices Lavoro: 6 temi da approfondire</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p> Top Voices Lavoro: 6 temi da approfondire</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p> Top Voices Lavoro: 6 temi da approfondire</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p> Top Voices Lavoro: 6 temi da approfondire</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p> Top Voices Lavoro: 6 temi da approfondire</p>
              </a>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsSidebar;
