function MovieDetail({movie}){
    return(
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{movie?.Title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {movie?.Plot}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
}


export default MovieDetail;