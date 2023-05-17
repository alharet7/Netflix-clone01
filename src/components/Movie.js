
import ModalMovie from './ModalMovie'
import {Button ,Card} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';



function Movie(props) {

    const item = props.item;
    const path = 'https://image.tmdb.org/t/p/w500';

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const [comments, setComments] = useState('');

    const handleShow = (item) => {
        setShowFlag(true)
        // console.log(item)
        setClickedMovie(item)
    }

    const handleClose = () => {
        setShowFlag(false)
    }
    const addToFav = () => {
        const serverURL = `http://localhost:3003/addMovies`;
        const dataMovie = { ...props.item, comments: comments };
        axios.post(serverURL, dataMovie)
            .then(response => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        // console.log(item)
    }

    return (
        <>

            <div className="cont">

                <Card className="cardCon" style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={path + item.poster_path} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.overview}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { handleShow(item) }} >Add to Favorite</Button>
                    </Card.Body>
                </Card>

                <ModalMovie showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie} addToFav={addToFav} setComments={setComments} comments={comments}/>

            </div>
        </>
    )

}




export default Movie;