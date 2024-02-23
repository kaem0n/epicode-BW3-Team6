import { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const MainHomePost = () => {
  const API_KEY = localStorage.getItem("api-key");
  const [clicked, setClicked] = useState(false);
  const [comment, setComment] = useState(20);
  const state = useSelector((state) => state.profile);
  const [post, setPost] = useState([]);
  const fetchPost = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setPost(data.reverse());
        console.log(data);
      } else {
        throw new Error("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {post.map((posts) => {
        return (
          <div key={posts._id}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Text>
                  <Row className="justify-content-end">
                    <Col className="col-2 ">
                      <div>
                        <span className="pe-2">
                          <i className="bi bi-three-dots fs-6"></i>
                        </span>
                        <span>
                          <i className="bi bi-x-lg"></i>
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          {posts.user.image === undefined ? (
                            <img
                              src="http://placekitten.com/200/300"
                              alt="img-profilo"
                              style={{ width: "50px", height: "50px" }}
                              className="rounded-circle objectfit-cover"
                            ></img>
                          ) : (
                            <img
                              src={posts.user.image}
                              alt="img-profilo"
                              style={{ width: "50px", height: "50px" }}
                              className="rounded-circle objectfit-cover"
                            ></img>
                          )}
                          <div className="ms-2" style={{ fontSize: "small" }}>
                            <p className="mt-0 mb-0 fw-semibold fs-6">
                              {posts.username}
                            </p>
                            <p className="mt-0 mb-0 text-secondary">
                              {posts.createdAt}
                              <i className="bi bi-dot"></i>
                              <i className="bi bi-globe-americas fw-bold"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col className="col-3 d-flex justify-content-end">
                      <i className="bi bi-plus text-primary"></i>
                      <span className="fw-semibold text-primary">Segui</span>
                    </Col>
                    <Row>
                      <Col className="col-12">
                        <p>{posts.text}</p>
                      </Col>
                    </Row>
                  </Row>
                  {posts.image && (
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <img
                          src={posts.image}
                          style={{ width: "100%" }}
                          className="rounded objectfit-cover"
                        ></img>
                      </Col>
                    </Row>
                  )}
                  <Row className="justify-content-between mt-2">
                    <Col className="col-4">
                      <i className="bi bi-hand-thumbs-up text-primary me-1"></i>
                      <i className="bi bi-suit-heart text-danger me-1"></i>
                      <span
                        className="text-secondary"
                        style={{ fontSize: "smaller" }}
                      >
                        60 mi piace
                      </span>
                    </Col>
                    <Col className="col-3 text-secondary">
                      2 diffusioni post
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-white text-secondary fw-semibold cdi"
                  >
                    <i className="bi bi-hand-thumbs-up me-1"></i>Consiglia
                  </button>
                  <button
                    type="button"
                    className="btn btn-white text-secondary fw-semibold cdi"
                    onClick={() => setClicked(!clicked)}
                  >
                    <i className="bi bi-chat-text me-1"></i>Commenta
                  </button>
                  <button
                    type="button"
                    className="btn btn-white text-secondary fw-semibold cdi"
                  >
                    <i className="bi bi-arrow-90deg-right me-1"></i>Diffondi
                  </button>
                  <button
                    type="button"
                    className="btn btn-white text-secondary fw-semibold cdi"
                  >
                    <i className="bi bi-send me-1"></i>Invia
                  </button>
                </div>
                {clicked ? (
                  <Row className="align-items-center mt-2">
                    <Col className="col-2">
                      <img
                        src={state.profile.image}
                        alt="img-profilo"
                        style={{ width: "50px", height: "50px" }}
                        className="rounded-circle objectfit-cover"
                      ></img>
                    </Col>
                    <Col>
                      <Form.Control />
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
              </Card.Footer>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default MainHomePost;
