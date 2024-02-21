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
          <ListGroup.Item className="mtlr">
            <a className="text-decoration-none" href="#">
              <div className="link-dark text-decoration-none   ">
                <div className="d-flex  justify-content-between">
                  {' '}
                  <p className="text-secondary">Collegamenti </p>
                  <span>
                    <i className="bi bi-person-plus-fill"></i>
                  </span>
                </div>
                <p>Espandi la tua rete</p>
              </div>
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="mtlr">
            <a className="text-decoration-none" href="#">
              <div className=" link-dark text-decoration-none  ">
                <p className="text-secondary">
                  Accedi a strumenti è informazioni in esclusiva
                </p>
                <p>
                  <span></span> Prova Premium per 0 euro
                </p>
              </div>
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="mtlr">
            <a className="text-decoration-none" href="#">
              <div className="d-flex link-dark text-decoration-none   ">
                <i className="bi bi-bookmark-fill"></i> I miei elementi
              </div>
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};
export default ProfileSidebar;
