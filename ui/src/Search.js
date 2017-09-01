import React from 'react'

const Search = (props) => (
    <form onSubmit={props.onSubmit}>
        <label>
            Search For Listings by Agent:&nbsp;
            <input
                type="text"
                name="agent"
                value={props.value}
                onChange={props.onChange}
            />
        </label>
        <input
            type="submit"
            value="Submit"
        />
    </form>
)

export default Search
