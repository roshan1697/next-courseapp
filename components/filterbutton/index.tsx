import React from 'react'

const FilterButton = () => {
  return (
<div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1  text-xl">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a className='font-bold'>Bookmarked Courses</a></li>
    <li><a className='font-bold'>All Courses</a></li>
  </ul>
</div>  )
}

export default FilterButton