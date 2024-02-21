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
              <Button className="btn-starthomepost flex-grow-1">
                Avvia un post
              </Button>
            </div>
            <div className="d-flex justify-content-around flex-wrap pt-2">
              <Button className="btn-homepost text-secondary">
                <span>
                  <i className="bi bi-image text-primary"></i>
                </span>{' '}
                Contenuti multimediali
              </Button>
              <Button className="btn-homepost text-secondary">
                <span>
                  <i
                    className="fa-solid fa-calendar-days"
                    style={{ color: '#C37D16' }}
                  ></i>
                </span>{' '}
                Evento
              </Button>
              <Button className="btn-homepost text-secondary">
                <span>
                  <i
                    className="fa-sharp fa-light fa-newspaper"
                    style={{ color: '#E06848' }}
                  ></i>
                </span>{' '}
                Scrivi un articolo
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default CreateHomePost;
