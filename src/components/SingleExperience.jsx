/* eslint-disable react/prop-types */
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

const userId = "65d3121324f605001937d45c";

const SingleExperience = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const removeExperienceFetch = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${props.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(props),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })

      .catch((errore) => {
        console.log(errore, "il tuo oggetto non è stato eliminato");
      });
  };

  return (
    <Row className="border-bottom mx-2 my-2 justify-content-between">
      <Col className="col-2">
        <img
          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
          style={{ width: "100%" }}
          alt="logo-scuola"
        />
      </Col>
      <Col>
        <p className="fw-semibold mb-0">{props.company}</p>
        <p className="mb-0 fs-6">{props.role}</p>
        <p className="text-secondary mb-0 fs-6">
          {props.startDate.slice(0, 10)}
        </p>
        <p className="text-secondary mb-0 fs-6">{props.endDate.slice(0, 10)}</p>
        <p>{props.description}</p>
      </Col>
      <Col className="col-2 d-flex justify-content-between">
        <i className="bi bi-pen fs-5" onClick={handleShow}></i>
        <i className="bi bi-x-lg fs-5" onClick={removeExperienceFetch}></i>
        <UpdateModal show={show} onHide={handleClose} data={props.data} />
      </Col>
    </Row>
  );
};

export default SingleExperience;
