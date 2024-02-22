import { useRef } from "react";
import { Button } from "react-bootstrap";

const ExperienceImage = (props) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${props.userId}/experiences/${props.id}/picture`;

  const fileInputRefs = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("experience", file);
      fetch(endPoint, {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const imageUrl = data.image;
          props.onUpload(imageUrl);
          props.trigger();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const handleClick = () => {
    fileInputRefs.current.click();
  };
  return (
    <div>
      <input
        type="file"
        ref={fileInputRefs}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <Button className="me-3 border-0 rounded-circle addpost-btn mt-2 mt-sm-0">
        <i
          style={{ color: "black", fontSize: "20px" }}
          className="bi bi-card-image"
          onClick={handleClick}
        ></i>
      </Button>
    </div>
  );
};
export default ExperienceImage;
