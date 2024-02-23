import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PostModal from "./PostModal";
import ActivitiesModal from "./ActivitiesModal";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import {
  addImageToPost,
  deleteFromFavouriteAction,
} from "../redux/actions/ProfileSection";

const Activities = () => {
  const API_KEY = localStorage.getItem("api-key");
  const [showPostModal, setShowPostModal] = useState(false); // Stato per controllare la visibilità del modale per la creazione di un post
  const [showActivitiesModal, setShowActivitiesModal] = useState(false); // Stato per controllare la visibilità del  modale attivita
  const state = useSelector((state) => state.posts);
  const state1 = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState();
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

  const fileInputRefs = useRef({});

  const handleImageClick = (postId) => {
    if (fileInputRefs.current[postId]) {
      fileInputRefs.current[postId].click();
    }
  };

  const handleFileChange = (postId) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const data = new FormData();
      data.append("post", file);
      fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "POST",
        body: data,
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const imageUrl = data.image;
          dispatch(addImageToPost(postId, imageUrl));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const GetFetchPost = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/posts/65d638b9a33fc900196584e4`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDeletePost = (postId) => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(deleteFromFavouriteAction(postId));
        } else {
          throw new Error("Errore durante l'eliminazione del post");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    GetFetchPost();
  }, []);

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

          <div className="card-text">
            {state.posts.length === 0 ? (
              <div>
                <p>Non hai pubblicato ancora nulla</p>
                <p>I post che condividi appariranno qui</p>
              </div>
            ) : (
              state.posts.map((post) => {
                return (
                  <Row key={post._id} className="border-bottom pb-3">
                    <Col className="mt-4  ">
                      <p className="name-activities mb-1">
                        {state1.profile.name} {state1.profile.surname}
                      </p>
                      <p className="text-activities">{post.text}</p>
                      {post.imageUrl && (
                        <img
                          className="img-post"
                          src={post.imageUrl}
                          alt="Post"
                        />
                      )}
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center  ">
                      <Button className="me-3 border-0 rounded-circle addpost-btn mt-2 mt-sm-0">
                        <i
                          style={{ color: "black", fontSize: "20px" }}
                          className="bi bi-card-image"
                          onClick={() => handleImageClick(post._id)}
                        ></i>
                      </Button>

                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => (fileInputRefs.current[post._id] = el)}
                        onChange={handleFileChange(post._id)}
                        style={{ display: "none" }}
                      />
                      <i
                        className="bi bi-pencil text-secondary fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                      ></i>
                      <i
                        className="bi bi-x-lg text-secondary fs-4 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                        onClick={() => handleDeletePost(post._id)}
                      ></i>
                    </Col>
                  </Row>
                );
              })
            )}
          </div>
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
