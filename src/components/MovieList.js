import Movie from './Movie';





function MoviesList(props) {

    return props.movieData.map(item => {
        return (
            <Movie item={item} key={item.id} />
        )
    })
}







export default MoviesList;