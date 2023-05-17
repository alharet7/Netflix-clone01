import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

function ModalMovie(props) {
    const path = 'https://image.tmdb.org/t/p/w500';
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={path + props.clickedMovie.poster_path} width='100%'></Image>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add Comment here</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="comments"
                                value={props.comments}
                                onChange={(e) => props.setComments(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.addToFav}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>




        </>
    )
}


export default ModalMovie;