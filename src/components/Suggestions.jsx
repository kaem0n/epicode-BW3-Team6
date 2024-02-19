import { Button, Card, Col, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";

const Suggestions = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Row className="justify-content-center align-item-center mt-5 m-0">
      <Col
        xs={12}
        sm={10}
        md={8}
        lg={8}
        xl={6}
        xxl={6}
        className="d-flex justify-content-center align-item-center"
      >
        <Card>
          <Card.Body>
            <div>
              <Card.Title>Consigliato per te</Card.Title>
              <Card.Text className="mb-2 text-muted">
                <i className="bi bi-eye-fill"></i> Solo per te
              </Card.Text>
            </div>
            <div>
              <Card.Subtitle className="mt-3 mb-2">Principiante</Card.Subtitle>
              <ProgressBar now={60} />
              <Card.Text className="mt-2 mb-4">
                Completa 3 passaggi per raggiungere il livello intermedio
              </Card.Text>
            </div>
            <div className="carousel ">
              <Slider {...settings}>
                <Col className="box pe-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        Condividi la tua posizione lavorativa più recente
                      </Card.Title>
                      <Card.Text className="mb-2 text-muted">
                        Aggiungendo il tuo ruolo attuale al profilo aiuterai i
                        recruiter a trovarti.
                      </Card.Text>

                      <Button className="suggestions-button mt-3">
                        Aggiungi posizione
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="box pe-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>In quale settore lavori?</Card.Title>
                      <Card.Text className="mb-2 text-muted">
                        Gli utenti che aggiungono un settore ricevono fino a 2,5
                        volte più visualizzazioni del profilo.
                      </Card.Text>

                      <Button className="suggestions-button mt-3">
                        Aggiungi settore
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="box pe-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        Aggiungi una foto al tuo profilo per aiutare gli altri a
                        riconoscerti
                      </Card.Title>
                      <Card.Text className="mb-2 text-muted">
                        Gli utenti con una foto del profilo ricevono fino a 2,3
                        volte più visualizzazioni del profilo.
                      </Card.Text>

                      <Button className="suggestions-button mt-3">
                        Aggiungi foto
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="box pe-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        Quale scuola o università hai frequentato?
                      </Card.Title>
                      <Card.Text className="mb-2 text-muted">
                        Gli utenti che includono una scuola o università
                        ricevono fino a 2,2 volte più visualizzazioni del
                        profilo.
                      </Card.Text>

                      <Button className="suggestions-button mt-3">
                        Aggiungi titolo di studio
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="box pe-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        Scrivi un riepilogo per mettere in evidenza la tua
                        personalità o la tua esperienza lavorativa
                      </Card.Title>
                      <Card.Text className="mb-2 text-muted">
                        Gli utenti che includono un riepilogo ricevono fino a
                        3,9 volte più visualizzazioni del profilo.
                      </Card.Text>

                      <Button className="suggestions-button mt-3">
                        Aggiungi un riepilogo
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Slider>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Suggestions;
