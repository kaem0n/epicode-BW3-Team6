import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { myExperience } from "../redux/actions/ProfileSection";
import ExperienceModal from "./ExperienceModal";
import SingleExperience from "./SingleExperience";
const userId = "65d3121324f605001937d45c";

const Experience = () => {
  const dispatch = useDispatch();
  const stateExperience = useSelector(
    (state) => state.experience.experiences[0]
  );
  console.log(stateExperience);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const experienceFetch = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((esperienze) => {
        // console.log(esperienze);
        dispatch(myExperience(esperienze));
      })
      .catch((err) => {
        console.log(err, "errore nella chiamata delle esperienze");
      });
  };

  useEffect(() => {
    experienceFetch();
  }, []);

  return (
    <>
      <Row className="mt-2 mb-2">
        <Col>
          <Card className="p-2">
            <Row className="justify-content-between ">
              <Col className="col-5">
                <Card.Title className="ps-2">Esperienze</Card.Title>
              </Col>
              <Col className="col-3 d-flex justify-content-evenly text-secondary">
                <i className="bi bi-plus-lg fs-4 " onClick={handleShow}></i>
                <ExperienceModal show={show} onHide={() => setShow(false)} />
              </Col>
            </Row>

            {stateExperience && stateExperience.length > 0 ? (
              stateExperience.map((esperienza, index) => (
                <SingleExperience
                  key={index}
                  company={esperienza.company}
                  role={esperienza.role}
                  startDate={esperienza.startDate}
                  endDate={esperienza.endDate}
                  description={esperienza.description}
                  id={esperienza._id}
                  data={esperienza}
                ></SingleExperience>
              ))
            ) : (
              <p>Non ci sono esperienze al momento</p>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Experience;
