import Menu from "./Menu"
import SearchBar from "./SearchBar"

function Navbar({onSearchChange}) {
    
    return(
        <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Menu />
          <SearchBar onSearchChange = {onSearchChange}/>
        </nav>
      </div>
    )

}


export default Navbar;