import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newExperience } from "../redux/actions/ProfileSection";
import { useEffect, useState } from "react";
const userId = "65d3121324f605001937d45c";

const ExperienceModal = (props) => {
  const newExperienceState = useSelector(
    (state) => state.experience.newExperience
  );

  const dispatch = useDispatch();
  const [esperienza, setEsperienza] = useState({});

  const handleInputChange = (field, value) => {
    setEsperienza({ ...esperienza, [field]: value });
  };

  const addExperienceFetch = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(esperienza),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log(
            newExperienceState,
            "questo è il tuo stato di esperienze"
          );
        } else {
          throw new Error();
        }
      })

      .catch((errore) => {
        console.log(errore, "il tuo oggetto non è stato salvato");
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Inserisci le tue esperienze
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Azienda</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Azienda"
              value={esperienza.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Ruolo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Azienda"
              value={esperienza.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Descrizione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Azienda"
              value={esperienza.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Luogo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Azienda"
              value={esperienza.area}
              onChange={(e) => handleInputChange("area", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary">Data di inizio</Form.Label>
            <Form.Control
              type="date"
              value={esperienza.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
            />
            <Form.Label className="text-secondary">Data di fine</Form.Label>
            <Form.Control
              type="date"
              value={esperienza.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Chiudi</Button>
        <Button type="submit" onClick={addExperienceFetch}>
          Aggiungi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ExperienceModal;
