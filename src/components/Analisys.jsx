import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Analysis = () => {
  return (
    <Card className="m-3">
      <Card.Body className="ms-2">
        <div className="mb-3">
          <h2> Analisi</h2>
          <p>
            <span>
              <i className="bi bi-eye-fill me-2"></i>
            </span>
            Solo per te
          </p>
        </div>
        <Card.Text>
          <div className="d-flex">
            <span>
              <i className="bi bi-people-fill me-2"></i>
            </span>
            <div>
              <p>visualizzazioni del profilo</p>
              <p>aggiorna il tuo proflo per attrarre visitatori</p>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted footer-hover">
        <Button
          variant="link"
          className="btn btn-link w-100 button-hover"
          style={{ borderRadius: 0, borderTop: 'none' }}
        >
          Mostra tutte le analisi
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Analysis;
