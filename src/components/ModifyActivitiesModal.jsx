import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const ModifyActivitiesModal = (post) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/posts/${post.id}`;
  const [show, setShow] = useState(false);
  const originalActivities = {
    id: post.id,
    text: post.text,
    imageUrl: post.imageUrl,
    username: post.username,
  };
  const [text, setText] = useState(originalActivities.text);
  console.log(originalActivities);
  const modifyActivities = async () => {
    try {
      const res = await fetch(endPoint, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...originalActivities, text: text }),
      });
      if (res.ok) {
        setShow(false);
      } else {
        throw new Error(
          `${res.status} - Errore nella fetch (modifica esperienza)`
        );
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const handleClick = () => {
    modifyActivities();
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button onClick={() => setShow(true)} variant="outline-secondary">
        <span>
          <i className="bi bi-pen fs-4 text-secondary"></i>
        </span>
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        centered
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Modifica post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col
                xs={12}
                sm={3}
                lg={2}
                className="d-flex justify-content-center ps-0 p-sm-1 text-sm-start pe-0"
              >
                <p>{post.imageUrl}</p>
              </Col>
              <Col
                xs={12}
                sm={9}
                lg={10}
                className="mt-3 text-sm-start mt-sm-0 ps-0 d-flex align-items-center justify-content-center justify-content-sm-start"
              >
                <h5>Username: {post.username}</h5>
              </Col>
            </Row>
            <Row className="mt-4 mb-4">
              <Form.Control
                as="textarea"
                placeholder={post.text}
                style={{ height: "200px", border: "none" }}
                value={text}
                onChange={handleChange}
              />
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClick}>
            Salva modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModifyActivitiesModal;
