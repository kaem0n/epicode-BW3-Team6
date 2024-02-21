import Card from "react-bootstrap/Card";

const HomeShowMore = () => {
  return (
    <>
      <Card className="mt-2">
        <Card.Body className="d-flex  justify-content-between ">
          <div className="d-flex flex-column justify-content-around">
            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{ fontSize: "smaller" }}
            >
              Gruppi
            </a>
            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{ fontSize: "smaller" }}
            >
              Eventi{" "}
            </a>
            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{ fontSize: "smaller" }}
            >
              Hastag seguiti
            </a>
          </div>
          <div className="d-flex align-items-center fw-semibold">
            <i className="bi bi-plus-lg "></i>
          </div>
        </Card.Body>
        <Card.Footer className="mtlr ">
          <a className="text-decoration-none" href="#">
            <div className="d-flex justify-content-center text-secondary text-decoration-none  ">
              Scopri di più
            </div>
          </a>
        </Card.Footer>
      </Card>
    </>
  );
};

export default HomeShowMore;
