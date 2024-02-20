import Card from 'react-bootstrap/Card';

const HomeShowMore = () => {
  return (
    <>
      <Card>
        <Card.Body className="d-flex  justify-content-between ">
          <div className="d-flex flex-column justify-content-around ">
            <a href="#">Gruppi </a>
            <a href="#">Eventi </a>
            <a href="#">Hastag seguiti</a>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-plus-lg "></i>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomeShowMore;
