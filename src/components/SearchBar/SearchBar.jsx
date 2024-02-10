
import React, { useState, useContext } from 'react'
import { IoIosSearch } from 'react-icons/io'


import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  const { setProducts, setLoading } = useContext(AppContext)




  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true)
    const products = await fetchProducts(searchValue) 

    
    setProducts(products)
    setLoading(false)
    searchValue('')
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        className="search_input"
        onChange={({target}) => setSearchValue(target.value)}
        required
      />
      
      <button
        type="submit"
        className="search_button" 
      >
        <IoIosSearch />
      </button>

    </form>)
}

export default SearchBar
