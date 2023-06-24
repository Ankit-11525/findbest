import React from 'react'
import './SearchcssPage.css'
const SearchPage = props => {
  const searchField=(props.location && props.location.value) || "";
  return (
    <div>
        Thanks for seraching related to ${searchField}
    </div>
  )
}

export default SearchPage
