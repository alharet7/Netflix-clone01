import {Modal ,Form, Button ,Image}from 'react-bootstrap';
import axios from 'axios';
// import { useState, useEffect } from 'react';


function ModalUpdate(props) {

    // const [comment, setComment] = useState("");

    const PATH = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`;


    const updateComments = async (e) => {
        e.preventDefault();

        const obj = {
            comments: e.target.comments.value
        }

        const serverURL = `${process.env.REACT_APP_serverURL}/upDateMovie/${props.data.id}`;

        const result = await axios.put(serverURL, obj);
        console.log('done', result.data)

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
                
                    <Form onSubmit={updateComments}>
                        <Form.Group >
                            <Form.Label>comment</Form.Label>
                            <Form.Control name="comments" type="text" defaultValue={props.data.comments} />
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