import Card from 'react-bootstrap/Card';

const OpenJobs = () => {
  return (
    <>
      <Card className="mt-2">
        <Card.Body className="ps-0 pe-0">
          <div>
            <div>
              {' '}
              <h6>Disponibile a lavorare</h6>
              <p className="text-secondary">
                Consigliato in base alla tua attività
              </p>
            </div>
            <div className="d-md-none"></div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default OpenJobs;
