import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PostModal from "./PostModal";
import ActivitiesModal from "./ActivitiesModal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CreateHomePost = () => {
  const [showPostModal, setShowPostModal] = useState(false); // Stato per controllare la visibilità del modale per la creazione di un post

  const handleCreatePostClick = () => {
    setShowPostModal(true);
  };

  const handleClosePostModal = () => {
    setShowPostModal(false);
  };

  return (
    <>
      <Card className=" mb-2">
        <Card.Body>
          <Card.Text>
            <div className="d-flex align-items-center mt-1">
              <img
                src="http://placekitten.com/200/300"
                alt="img-profilo"
                style={{ width: "50px", height: "50px", border: "none" }}
                className="  rounded-circle me-2 "
              />
              <Button
                onClick={handleCreatePostClick}
                size="lg"
                className="suggestions-button lg flex-grow-1"
              >
                Avvia un post
              </Button>
            </div>
            <div className="d-flex justify-content-around pt-2">
              <Button className="btn-homepost">Contenuti multimediali </Button>
              <Button>Evento </Button>
              <Button>Scrivi un articolo </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <PostModal show={showPostModal} hide={handleClosePostModal} />
    </>
  );
};
export default CreateHomePost;
