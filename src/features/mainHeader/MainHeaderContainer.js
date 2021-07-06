import React, { useState } from 'react';
import MainHeader from './MainHeader';

function MainHeaderContiner() {
    const [searchInput, setSearchInput] = useState('');

    const onSubmitSearch = (e) => {
        e.preventDefault();
        console.log('submit~!');
    };
    const onChangeSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return <MainHeader
        searchInput={searchInput} 
        onSubmitSearch = {onSubmitSearch}
        onChangeSearch = {onChangeSearch}
    />
};

export default MainHeaderContiner;
