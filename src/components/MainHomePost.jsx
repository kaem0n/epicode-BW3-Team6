import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                ></img>
                <div className="ms-2" style={{ fontSize: "small" }}>
                  <p className="mt-0 mb-0 fw-semibold fs-6">Autore</p>
                  <p className="mt-0 mb-0 text-secondary">follower</p>
                  <p className="mt-0 mb-0 text-secondary">
                    time?<i className="bi bi-dot"></i>
                    <i className="bi bi-globe-americas fw-bold"></i>
                  </p>
                </div>
              </div>
              <div>
                <span className="pe-2">
                  <i className="bi bi-three-dots fs-6"></i>
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
                style={{ width: "100%" }}
              ></img>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-around">
            <Button>Consiglia </Button>
            <Button>Commenta </Button>
            <Button>Diffondi il post </Button>
            <Button>Invia </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default MainHomePost;
