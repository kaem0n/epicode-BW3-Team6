import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const NewsSidebar = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <h6>LinkedIn notizie</h6>
          <span>
            <i
              className="bi bi-info-square-fill"
              style={{ fontSize: "smaller" }}
            ></i>
          </span>
        </Card.Title>
        <Card.Text>
          <ul className="mt2  mb1 list-unstyled">
            <li className="mtlr d-flex">
              <span>
                <i className="bi bi-dot fs-2"></i>
              </span>
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <p className=" m-0 fw-semibold ">
                  Top Voices Lavoro: 6 temi da approfondire
                </p>
                <p className="text-secondary">17 ore fa</p>
              </span>
            </li>
            <li className="mtlr d-flex">
              <span>
                <i className="bi bi-dot fs-2"></i>
              </span>
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <p className=" m-0 fw-semibold">
                  Top Voices Lavoro: 6 temi da approfondire
                </p>
                <p className="text-secondary">17 ore fa</p>
              </span>
            </li>
            <li className="mtlr d-flex">
              <span>
                <i className="bi bi-dot fs-2"></i>
              </span>
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <p className=" m-0 fw-semibold">
                  Top Voices Lavoro: 6 temi da approfondire
                </p>
                <p className="text-secondary">17 ore fa</p>
              </span>
            </li>
            <li className="mtlr d-flex">
              <span>
                <i className="bi bi-dot fs-2"></i>
              </span>
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <p className=" m-0 fw-semibold">
                  Top Voices Lavoro: 6 temi da approfondire
                </p>
                <p className="text-secondary">17 ore fa</p>
              </span>
            </li>
            <li className="mtlr d-flex ">
              <span>
                <i className="bi bi-dot fs-2"></i>
              </span>
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <p className=" m-0 fw-semibold">
                  Top Voices Lavoro: 6 temi da approfondire
                </p>
                <p className="text-secondary">17 ore fa</p>
              </span>
            </li>
          </ul>
        </Card.Text>
        <div>
          <Button variant="outline-secondary" className="border-0">
            Vedi altro <i className="bi bi-arrow-down-short"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsSidebar;
