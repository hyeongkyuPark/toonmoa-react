import React from 'react';

function Search({
    onSubmit,
    placehoder,
    submitText,
    value,
    onChange,
    ...res
}) {
    return (
        <>
            <form onSubmit={onSubmit} {...res}>
                <input type="text" placeholder={placehoder} value={value} onChange={onChange} />
                <input type="submit" value={submitText} />
            </form>
        </>
    )
}

Search.defaultProps = {
    placehoder: '',
    submitText: '검색'
}

export default Search;
