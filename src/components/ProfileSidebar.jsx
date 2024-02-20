import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProfileSidebar = () => {
  return (
    <>
      <Card>
        <div className="p-0">
          <div className="position-relative">
            <img
              src="https://www.ll-mm.com/images/placeholders/image-placeholder.jpg"
              alt="bg-hero"
              style={{ width: '100%', height: '57px' }}
            />
          </div>
        </div>
        <div className="position-absolute">
          <img
            src="http://placekitten.com/200/300"
            alt="img-profile"
            style={{ width: '65px', height: '65px', left: '53px' }}
            className="rounded-circle"
          />
        </div>
        <Card.Body className="text-center">
          <Card.Title>Nome Utente</Card.Title>
          <Card.Text>Formazione</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div className="d-flex  justify-content-between">
              {' '}
              <p>Collegamenti </p>
              <span>
                <i className="bi bi-person-plus-fill"></i>
              </span>
            </div>
            <p>Espandi la tua rete</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Accedi a strumenti è informazioni in esclusiva</p>
            <p>
              <span></span> Prova Premium per 0 euro
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>
              <i className="bi bi-bookmark-fill"></i>
            </span>{' '}
            I miei elementi
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};
export default ProfileSidebar;
