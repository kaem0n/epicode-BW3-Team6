import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CreateHomePost = () => {
  return (
    <>
      <Card className=" mb-2">
        <Card.Body>
          <Card.Text>
            <div className="d-flex align-items-center mt-1">
              <img
                src="http://placekitten.com/200/300"
                alt="img-profilo"
                style={{ width: '50px', height: '50px', border: 'none' }}
                className="  rounded-circle me-2 "
              />
              <Button size="lg" className="suggestions-button lg flex-grow-1">
                Avvia un post
              </Button>
            </div>
            <div className="d-flex justify-content-around pt-2">
              <Button className="btn-homepost">Contenuti multimediali </Button>
              <Button>Evento </Button>
              <Button>Scrivi un articolo </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default CreateHomePost;
