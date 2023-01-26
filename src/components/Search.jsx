import React from 'react';
import module from './Search.module.scss'

function Search(props) {
    function myFunction() {

    }
    return (
        <div>
            <input type="text" onChange="myFunction()" />
        </div>

    );
}

export default Search;