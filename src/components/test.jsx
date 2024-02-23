import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Test = () => {
  const [showCards, setShowCards] = useState(false);

  const openButton = () => {
    setShowCards(!showCards);
  };

  return (
    // <div>
    //   <Button onClick={openButton}>Mostra le Card</Button>
    //   {showCards && (
    //     <div>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>ppp</Card.Title>
    //           <Card.Text>non ddddddd</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   )}
    // </div>

    <div style={{ position: 'relative' }}>
      <Button onClick={openButton}>Mostra le Card</Button>
      {showCards && (
        <div>
          <Card
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
            }}
          >
            <Card.Body>
              <Card.Title>ppp</Card.Title>
              <Card.Text>non ddddddd</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Test;
