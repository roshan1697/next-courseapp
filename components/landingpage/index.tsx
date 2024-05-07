import React, { useState } from 'react'
import AppBar from '../appbar'
import CourseCard from '../coursecard'
import FilterButton from '../filterbutton'
import { Data } from '@/lib/coursedata'
import Footer from '../footer'

const LandingPage = () => {
  return (
    <div className=''>
        <AppBar userSignIn={false}/>
        <div className='p-4 pt-16'>
        <div className='p-1 flex justify-end'>

        <FilterButton/>
        </div>
        <div className='flex flex-wrap justify-evenly'>

        {Data.map((data)=>{
          return <CourseCard key={data.id} title={data.name} description={data.description}/>
        })}
        </div>
        </div>

        <Footer/>
        </div>
  )
}

export default LandingPage