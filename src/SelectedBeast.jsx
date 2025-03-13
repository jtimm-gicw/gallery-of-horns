import { Modal, Button } from 'react-bootstrap';

function SelectedBeast({ beast, setSelectedBeast }) {
  return (
    <Modal show={!!beast} onHide={() => 
    // show={!!beast} → This makes the modal appear only if a beast is selected (!!beast means "true if beast exists").  onHide() hides the modal if clicked outside
    setSelectedBeast(null)}>
      <Modal.Header closeButton>
        <Modal.Title>{beast?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img 
          src={beast?.image_url} 
          alt={beast?.description} 
          style={{ width: '100%' }} 
        />
        <p>{beast?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setSelectedBeast(null)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;