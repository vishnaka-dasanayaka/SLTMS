import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div>
      <div className='flex'>
        <input type="text" className='w-full h-10 pl-3 bg-gray-300' placeholder='Search Here...'/>
        <button className='pl-5 pr-5 bg-gray-300 hover:bg-gray-600 hover:text-white'><SearchIcon/></button>
      </div>
    </div>
  )
}

export default SearchBar
