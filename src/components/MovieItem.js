const MovieItem = ({movie, onSelectMovie}) =>{

    return(
    <div className="card m-1 col-md-3 col-lg-3">
    <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
    <div className="card-body">
      <h5 className="card-title">{movie.Title}</h5>
    </div>
    <div className="card-footer">
      <button onClick={() => onSelectMovie(movie)} data-toggle="modal" data-target="#exampleModal" href={'movies/'+movie.imdbID} className="btn btn-primary btn-sm">VIEW DETAIL</button>
      </div>
  </div>
  );

}

export default MovieItem;