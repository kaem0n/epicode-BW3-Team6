import Card from 'react-bootstrap/Card';

const HomeShowMore = () => {
  return (
    <>
      <Card>
        <Card.Body className="d-flex  justify-content-between ">
          <div className="d-flex flex-column justify-content-around   ">
            <a href="#" className="text-decoration-none">
              Gruppi
            </a>
            <a href="#" className="text-decoration-none">
              Eventi{' '}
            </a>
            <a href="#" className="text-decoration-none">
              Hastag seguiti
            </a>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-plus-lg "></i>
          </div>
        </Card.Body>
        <Card.Footer className="mtlr ">
          <a className="text-decoration-none" href="#">
            <div className="d-flex justify-content-center link-dark text-decoration-none  ">
              Scopri di più
            </div>
          </a>
        </Card.Footer>
      </Card>
    </>
  );
};

export default HomeShowMore;
