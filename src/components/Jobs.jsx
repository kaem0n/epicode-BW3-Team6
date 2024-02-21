import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const [lavori, setLavori] = useState([]);
  const [jobSelected, setJobSelected] = useState(null);
  const [word, setWord] = useState("");
  console.log(word);

  const handleSubmit = (e) => {
    e.preventDefault();
    jobsSearch();
  };

  const jobsSearch = () => {
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${word}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((lavori) => {
        // console.log(lavori);
        setLavori(lavori);
      })
      .catch((errore) => {
        console.log(errore, "la fetch dei lavori non è andata a buon fine");
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col className="col-6">
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Cerca un lavoro"
                onChange={(e) => setWord(e.target.value)}
              />
              <Button type="submit">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="col-6">
          {lavori.data
            ? lavori.data.slice(0, 20).map((lavoro) => {
                return (
                  <div
                    className="list-group"
                    key={lavoro._id}
                    onClick={() => setJobSelected(lavoro)}
                  >
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                      aria-current="true"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{lavoro.title}</h5>
                        <small>{lavoro.publication_date.slice(0, 10)}</small>
                      </div>
                      <p className="mb-1">{lavoro.company_name}</p>
                      <small>{lavoro.candidate_required_location}</small>
                    </a>
                  </div>
                );
              })
            : "Non ci sono lavori al momento"}
        </Col>
        <Col className="col-6">
          {jobSelected !== null ? (
            <Card>
              <Card.Body>
                <Card.Title>{jobSelected.title}</Card.Title>
                <Card.Subtitle
                  className="mb-2 text-secondary"
                  style={{ fontSize: "smaller" }}
                >
                  {jobSelected.company_name}
                  <i className="bi bi-dot"></i>
                  {jobSelected.candidate_required_location}
                  <i className="bi bi-dot"></i>
                  {jobSelected.publication_date.slice(0, 10)}
                </Card.Subtitle>
                <Card.Text>
                  <i className="bi bi-briefcase-fill text-secondary"></i>
                  <span
                    className="ms-2"
                    style={{ fontSize: "smaller", backgroundColor: "#daebd1" }}
                  >
                    {jobSelected.job_type}
                  </span>
                  <div>
                    <i className="bi bi-people-fill text-secondary"></i>
                    <span className="ms-2" style={{ fontSize: "smaller" }}>
                      Alcuni tuoi collegamenti lavorano qui
                    </span>
                  </div>
                  <div>
                    <i
                      className="bi bi-lightbulb text-secondary"
                      style={{ fontSize: "smaller" }}
                    ></i>
                    <span className="ms-2" style={{ fontSize: "smaller" }}>
                      Vedi come ti posizioni rispetto a 6 candidati. Prova
                      Premium per 0 EUR
                    </span>
                  </div>
                  <Button variant="primary" className="rounded-pill">
                    Candidati
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="ms-2 rounded-pill"
                  >
                    Salva
                  </Button>
                </Card.Text>
                <Card.Link href={jobSelected.url}>
                  Vai alla pagina dell'offerta
                </Card.Link>
              </Card.Body>
            </Card>
          ) : (
            "Seleziona un lavoro"
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Jobs;
