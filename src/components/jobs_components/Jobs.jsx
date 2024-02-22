import { useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Jobs = () => {
  const [jobSelected, setJobSelected] = useState(null);
  const jobs = useSelector((state) => state.jobs.list);
  const jobsLoading = useSelector((state) => state.jobs.isLoading);

  return (
    <Row>
      <Col className="col-6">
        {jobsLoading ? (
          <div className="text-center mt-5 pt-5">
            <Spinner animation="border" />
          </div>
        ) : jobs ? (
          jobs.slice(0, 20).map((job) => {
            return (
              <div
                className="list-group"
                key={job._id}
                onClick={() => setJobSelected(job)}
              >
                <div
                  className="list-group-item list-group-item-action pointer"
                  aria-current="true"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{job.title}</h5>
                    <small>{job.publication_date.slice(0, 10)}</small>
                  </div>
                  <p className="mb-1">{job.company_name}</p>
                  <small>{job.candidate_required_location}</small>
                </div>
              </div>
            );
          })
        ) : (
          'Non ci sono lavori al momento'
        )}
      </Col>
      <Col className="col-6">
        {jobSelected !== null ? (
          <Card className="sticky-top top-jobselected">
            <Card.Body>
              <Card.Title>{jobSelected.title}</Card.Title>
              <Card.Subtitle
                className="mb-2 text-secondary"
                style={{ fontSize: 'smaller' }}
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
                  style={{ fontSize: 'smaller', backgroundColor: '#daebd1' }}
                >
                  {jobSelected.job_type}
                </span>
                <div>
                  <i className="bi bi-people-fill text-secondary"></i>
                  <span className="ms-2" style={{ fontSize: 'smaller' }}>
                    Alcuni tuoi collegamenti lavorano qui
                  </span>
                </div>
                <div>
                  <i
                    className="bi bi-lightbulb text-secondary"
                    style={{ fontSize: 'smaller' }}
                  ></i>
                  <span className="ms-2" style={{ fontSize: 'smaller' }}>
                    Vedi come ti posizioni rispetto a 6 candidati. Prova Premium
                    per 0 EUR
                  </span>
                </div>
                <Button variant="primary" className="rounded-pill">
                  Candidati
                </Button>
                <Button variant="outline-primary" className="ms-2 rounded-pill">
                  Salva
                </Button>
              </Card.Text>
              <Card.Link href={jobSelected.url}>
                Vai alla pagina dell&apos;offerta
              </Card.Link>
              <Card.Title className="mt-3">
                Informazioni sull&apos;offerta di lavoro
              </Card.Title>
              <div
                dangerouslySetInnerHTML={{ __html: jobSelected.description }}
              ></div>
            </Card.Body>
          </Card>
        ) : (
          'Seleziona un lavoro'
        )}
      </Col>
    </Row>
  );
};
export default Jobs;
