import { useState } from "react";

function SearchBar ({onSearchChange}) {

    const [search, setSearch] = useState('')

    const manageSearch = (evt) =>{

        const {target} = evt;
        setSearch(target.value);
        console.log(search);
    }

    function searcMovies(evt){

        evt.preventDefault();
        if(search.length >= 3){
            console.log('eccomi');
            onSearchChange(search.trim())
            console.log(search.trim());
        }

    }

    return(
        <form className="form-inline mt-2 mt-md-0">
        <input name="search" value={search} onChange={manageSearch} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button onClick={searcMovies} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <button onClick={() =>{setSearch('')} }className="btn btn-outline-info my-2 my-sm-0" type="reset">Reset</button>
      </form>
    )

}

export default SearchBar;