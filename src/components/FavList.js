import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import ModalUpdate from './ModalUpdate';
import axios from "axios";


function FavList() {

    const path = 'https://image.tmdb.org/t/p/w500';

    const [favArr, setfavArr] = useState([]);
    const [updateMovie, setupdateMovie] = useState(false);
    const [data, setData] = useState([]);
    const [newArr, setnewArr] = useState([]);

    const handleClose = () => {
        setupdateMovie(false);
    }

    const getFavMovies = () => {
        const serverURL = `http://localhost:3003/getMovies`;
        fetch(serverURL)
            .then((response) => {
                response.json()
                    .then(data => {
                        setfavArr(data)
                        // console.log(data)
                    })
            })
    }

    const update = (item) => {
        setupdateMovie(true);
        setData(item);
    }

    const deletemovie = (movieId) => {

        const serverURL = `http://localhost:3003/deleteMovie/${movieId}`;
        axios.delete(serverURL)
            .then(response => {
                getFavMovies()
                console.log(response.data)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const takeNewDataFromUpdatedModal = (arr) => {

        setnewArr(arr)
    }

    useEffect(() => {
        setnewArr(favArr)
    }, [favArr] )


    useEffect(() => {
    getFavMovies()
        } , [])

return (
    <>
            <section style={{ display: 'flex', flexDirection: 'row', margin: 'auto 200px' }}>
                <div style={{ width: '17rem' }}>

                    {newArr.map(item => {
                        return (
                            <Card  key={item.id}>
                                <Card.Img variant="top" src={path + item.poster_path} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        <p>{item.overview}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        <h6>Comment:</h6>
                                        <p>{item.comment}</p>
                                    </Card.Text>
                                    <Button variant="dark" onClick={() => { update(item) }}>Update comment</Button>
                                    <Button variant="danger" onClick={() => { deletemovie(item.id) }}>Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}


                </div>
            </section>
            <ModalUpdate updateMovie={updateMovie} handleClose={handleClose} data={data} takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal} />
        </>
)
}

export default FavList;