import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ProfileSidebar = () => {
  return (
    <>
      <Card>
        <div className="p-0">
          <div className="position-relative">
            <img
              src="https://www.ll-mm.com/images/placeholders/image-placeholder.jpg"
              alt="bg-hero"
              style={{ width: "100%", height: "57px" }}
            />
          </div>
        </div>
        <div
          className="position-absolute"
          style={{ left: "50%", top: "10%", transform: "translateX(-50%)" }}
        >
          <img
            src="http://placekitten.com/200/300"
            alt="img-profile"
            style={{ width: "3.5em", height: "3.5em", left: "53px" }}
            className="rounded-circle"
          />
        </div>
        <Card.Body className="text-center mt-5">
          <Card.Title className="mb-0">Nome Utente</Card.Title>
          <Card.Text
            className=" text-secondary"
            style={{ fontSize: "smaller" }}
          >
            Formazione
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="mtlr">
            <a className="text-decoration-none" href="#">
              <div className="link-dark text-decoration-none   ">
                <div className="d-flex justify-content-between">
                  <p
                    className="text-secondary mb-0 "
                    style={{ fontSize: "smaller" }}
                  >
                    Collegamenti{" "}
                  </p>
                  <span>
                    <i className="bi bi-person-plus-fill"></i>
                  </span>
                </div>
                <p className="mt-0 fw-semibold" style={{ fontSize: "smaller" }}>
                  Espandi la tua rete
                </p>
              </div>
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="mtlr">
            <a className="text-decoration-none" href="#">
              <div className=" link-dark text-decoration-none">
                <p className="text-secondary" style={{ fontSize: "smaller" }}>
                  Accedi a strumenti è informazioni in esclusiva
                </p>
                <p className="mt-0 fw-semibold" style={{ fontSize: "smaller" }}>
                  <span>
                    <i className="bi bi-square-fill text-warning"></i>
                  </span>{" "}
                  Prova Premium per 0 EURO
                </p>
              </div>
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="mtlr">
            <a
              className="text-decoration-none"
              style={{ fontSize: "smaller" }}
              href="#"
            >
              <div className="d-flex align-items-center justify-content-evenly text-secondary text-decoration-none   ">
                <i
                  className="bi bi-bookmark-fill text-secondary"
                  style={{ fontSize: "smaller" }}
                ></i>{" "}
                I miei elementi
              </div>
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};
export default ProfileSidebar;
