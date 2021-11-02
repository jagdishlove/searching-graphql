import React from 'react'


function Search({ state, loading, error, onChange, onSearch }) {



    return (
        <div>
            <input
                value={state}
                type="text"
                onChange={onChange}
                placeholder="Search" />
            <button onClick={loading || onSearch}>Search</button>
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default Search
