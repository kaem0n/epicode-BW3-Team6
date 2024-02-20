import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MainHomePost = () => {
  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <Card.Text>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  src="http://placekitten.com/200/300"
                  alt="img-profilo"
                  style={{ width: '50px', height: '50px' }}
                ></img>
                <div className="ms-2">
                  <p className="mt-0 mb-0">Linkedin notizie</p>
                  <p className="mt-0 mb-0">follower</p>
                  <p className="mt-0 mb-0">time?</p>
                </div>
              </div>
              <div>
                <span className="pe-2">
                  <i className="bi bi-three-dots"></i>
                </span>
                <span>
                  <i className="bi bi-x-lg"></i>
                </span>
              </div>
            </div>
            <p>contenuto .....</p>
            <div>
              <img
                src="http://placekitten.com/600/600"
                style={{ width: '100%' }}
              ></img>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div>
            <Button>Contenuti multimediali </Button>
            <Button>Evento </Button>
            <Button>Scrivi un articolo </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default MainHomePost;
