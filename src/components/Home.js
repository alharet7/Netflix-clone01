// import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from './MovieList';
// import { findByLabelText } from "@testing-library/react";



function Home() {

    const [movieData, setMovieData] = useState([])

    const getAllMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;

        // using axios
        // axios.get(serverURL)
        // .then(response=>{
        //     console.log(response.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })

        // using fetch
        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMovieData(data)

                })
            })
    }

    useEffect(() => {
        getAllMovies()
    }, [])

    return (
        <>
            {/* <h1 className="h1">Home</h1> */}
            < MoviesList movieData={movieData} />
        
        </>
    );

}


export default Home;