import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MainHomePost = () => {
  const [post, setPost] = useState([]);
  const fetchPost = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setPost(data);
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
  }, []);
  return (
    <>
      {post.map((posts) => {
        return (
          <div key={posts._id}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img
                        src="http://placekitten.com/200/300"
                        alt="img-profilo"
                        style={{ width: "50px", height: "50px" }}
                      ></img>
                      <div className="ms-2">
                        <p className="mt-0 mb-0">{posts.username}</p>

                        <p className="mt-0 mb-0">{posts.createdAt}</p>
                      </div>
                    </div>
                    <div>
                      <span className="pe-2">
                        <i className="bi bi-three-dots"></i>
                      </span>
                      <span>
                        <i className="bi bi-x-lg"></i>
                      </span>
                    </div>
                  </div>
                  <p>{posts.text}</p>
                  {posts.image && (
                    <div>
                      <img src={posts.image} style={{ width: "100%" }}></img>
                    </div>
                  )}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-around">
                  <Button>Consiglia </Button>
                  <Button>Commenta </Button>
                  <Button>Diffondi il post </Button>
                  <Button>Invia </Button>
                </div>
              </Card.Footer>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default MainHomePost;
