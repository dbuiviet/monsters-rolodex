import React from 'react';

import './search-box.style.css';

export const SearchBox = ({ placeholder, changeHandler }) => {
    return (
        <div>
            <input className='search-box'
                type='search'
                placeholder={placeholder}
                onChange={changeHandler}
            />
        </div>
    );
}