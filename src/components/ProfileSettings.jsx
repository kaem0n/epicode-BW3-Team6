import { Button, Card } from "react-bootstrap";

const ProfileSettings = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between ">
            <Card.Title>Lingua del profilo</Card.Title>
            <Button className="border-0 bg-transparent ">
              <i className="bi bi-pencil"></i>
            </Button>
          </div>
          <Card.Text className="border-bottom pb-3">Italiano</Card.Text>
          <div className="d-flex align-items-center justify-content-between ">
            <Card.Title>Public profile & URL</Card.Title>

            <Button className="border-0 bg-transparent ">
              <i className="bi bi-pencil"></i>
            </Button>
          </div>
          <Card.Text>www.link.profilo</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileSettings;
