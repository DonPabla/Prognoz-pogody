import React from 'react';
import module from './Search.module.scss'

function Search(props) {
    console.log(module)
    return (
        <div className={module.search}>
            <input type="text" />
            <input type="submit" value="Найти" />
        </div>

    );
}

export default Search;