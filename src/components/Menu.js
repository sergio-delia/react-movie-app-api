

function Menu() {
    
    return(
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/movies">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/series">Disabled</a>
              </li>
            </ul>
          </div>
    )

}


export default Menu;