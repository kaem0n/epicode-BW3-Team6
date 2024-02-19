import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PostModal from './PostModal';
import ActivitiesModal from './ActivitiesModal';

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
      <Card className="m-3">
        <Card.Body className="ms-2">
          <div className="d-flex align-items-center">
            <div className="mb-3">
              <h2> Attività</h2>
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
                  width: '3.5rem',
                  height: '3.5rem',
                  minWidth: 'auto',
                }}
                onClick={handleActivitiesIconClick}
              >
                <span>
                  <i className="bi bi-pencil-fill"></i>
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
        <Card.Footer className="text-muted footer-hover">
          <Button
            variant="link"
            className="btn btn-link w-100 button-hover"
            style={{ borderRadius: 0, borderTop: 'none' }}
          >
            Mostra tutte le analisi
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Activities;
