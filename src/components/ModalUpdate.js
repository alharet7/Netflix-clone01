import {Modal ,Form, Button ,Image}from 'react-bootstrap';
import axios from 'axios';
// import { useState, useEffect } from 'react';


function ModalUpdate(props) {

    // const [comment, setComment] = useState("");

    const PATH = `https://image.tmdb.org/t/p/w500`;


    const updateComment = async (e) => {
        e.preventDefault();

        const obj = {
            comment: e.target.comment.value
        }

        const serverURL = `http://localhost:3003/${props.data.id}`;

        const result = await axios.put(serverURL, obj);
        // console.log('done', result.data)

        props.handleClose();

        props.takeNewDataFromUpdatedModal(result.data)


    }



    return (
        <>
            <Modal show={props.updateMovie} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={PATH + props.data.poster_path}></Image>
                    {props.data.overview}
                
                    <Form onSubmit={updateComment}>
                        <Form.Group >
                            <Form.Label>comment</Form.Label>
                            <Form.Control name="comment" type="text" defaultValue={props.data.comment} />
                        </Form.Group>
                        <Button variant="success" type="submit" >Save changes</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalUpdate;