import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PostModal from "./PostModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Spinner } from "react-bootstrap";

const CreateHomePost = () => {
  const [showPostModal, setShowPostModal] = useState(false); // Stato per controllare la visibilità del modale per la creazione di un post
  const state = useSelector((state) => state.profile);
  const handleCreatePostClick = () => {
    setShowPostModal(true);
  };

  const handleClosePostModal = () => {
    setShowPostModal(false);
  };

  return (
    <>
      {state.profile ? (
        <Card className=" mb-2">
          <Card.Body>
            <Card.Text>
              <div className="d-flex align-items-center mt-1">
                <img
                  src={state.profile.image}
                  alt="img-profilo"
                  style={{ width: "50px", height: "50px", border: "none" }}
                  className="  rounded-circle me-2 "
                />
                <Button
                  onClick={handleCreatePostClick}
                  className="btn-starthomepost flex-grow-1"
                >
                  Avvia un post
                </Button>
              </div>
              <div className="d-flex justify-content-around flex-wrap pt-2">
                <Button className="btn-homepost text-secondary">
                  <span>
                    <i className="bi bi-image text-primary"></i>
                  </span>{" "}
                  Contenuti multimediali
                </Button>
                <Button className="btn-homepost text-secondary">
                  <span>
                    <i
                      className="fa-solid fa-calendar-days"
                      style={{ color: "#C37D16" }}
                    ></i>
                  </span>{" "}
                  Evento
                </Button>
                <Button className="btn-homepost text-secondary">
                  <span>
                    <i
                      className="fa-sharp fa-light fa-newspaper"
                      style={{ color: "#E06848" }}
                    ></i>
                  </span>{" "}
                  Scrivi un articolo
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Spinner variant="primary"></Spinner>
      )}

      <PostModal show={showPostModal} hide={handleClosePostModal} />
    </>
  );
};
export default CreateHomePost;
