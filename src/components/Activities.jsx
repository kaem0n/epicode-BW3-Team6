import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PostModal from "./PostModal";
import ActivitiesModal from "./ActivitiesModal";

const Activities = () => {
  const [showPostModal, setShowPostModal] = useState(false); // Stato per controllare la visibilità del modale per la creazione di un post
  const [showActivitiesModal, setShowActivitiesModal] = useState(false); // Stato per controllare la visibilità del  modale attivita

  // Funzione per aprire il modale per la creazione di un post
  const handleCreatePostClick = () => {
    setShowPostModal(true);
  };

  // Funzione per chiudere il modale per la creazione di un post
  const handleClosePostModal = () => {
    setShowPostModal(false);
  };

  // Funzione per aprire  attività modale
  const handleActivitiesIconClick = () => {
    setShowActivitiesModal(true);
  };

  // Funzione per chiudere attività modale
  const handleCloseActivitiesModal = () => {
    setShowActivitiesModal(false);
  };

  return (
    <>
      <Card className="mb-2">
        <Card.Body className="ms-2">
          <div className="d-flex align-items-center">
            <div className="mb-3">
              <h5> Attività</h5>
            </div>
            <div className="flex-grow-1"></div>
            <div>
              <Button
                variant="outline-primary me-2"
                onClick={handleCreatePostClick}
              >
                Crea un post
              </Button>
            </div>

            <div>
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  minWidth: "auto",
                }}
                onClick={handleActivitiesIconClick}
              >
                <span>
                  <i className="bi bi-pen fs-4 text-secondary"></i>
                </span>
              </div>
            </div>
          </div>

          <Card.Text>
            <p>Non hai pubblicato ancora nulla</p>
            <p>I post che condividi appariranno qui</p>
          </Card.Text>
        </Card.Body>

        <PostModal show={showPostModal} hide={handleClosePostModal} />

        <ActivitiesModal
          show={showActivitiesModal}
          hide={handleCloseActivitiesModal}
        />
        <a className="text-decoration-none" href="#">
          <div className="d-flex justify-content-center border-top p-2 link-dark text-decoration-none mtlr text-secondary ">
            Mostra tutte le risorse <i className="bi bi-arrow-right"></i>
          </div>
        </a>
      </Card>
    </>
  );
};

export default Activities;
