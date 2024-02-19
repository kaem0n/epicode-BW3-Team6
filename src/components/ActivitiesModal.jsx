import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ActivitiesModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Quali contenuti vuoi mostrare per primi?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-3">
          La tua attività recente mostrerà solo i contenuti degli ultimi 360
          giorni
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Salva</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActivitiesModal;
