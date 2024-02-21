import Card from 'react-bootstrap/Card';
const SearchJobs = () => {
  return (
    <>
      {' '}
      <Card className="mt-2">
        <Card.Body className="ps-0 pe-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fs-7">
              <i className="bi bi-bookmark-fill"></i> Le mie offerte di lavoro
            </div>
            <div className="d-md-none"></div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SearchJobs;
