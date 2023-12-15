import React from 'react'
import { Link } from 'react-router-dom'

function SearchBox() {
  return (
    <div className="w-[95%] mx-auto rounded-full glass__bg my-3 relative">
    <input
      type="search"
      className="block text-white px-6 leading-[4rem] rounded-full w-full bg-transparent text-2xl basis-full focus:semi__glass__bg"
      placeholder="Search for inspiring books"
    />

  </div>
  )
}

export default SearchBox