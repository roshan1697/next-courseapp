import AppBar from '@/components/appbar'
import React from 'react'

import Footer from '@/components/footer'
import axios from 'axios'
const getData = async(id:string)=>{
  const response = await axios.post('http://localhost:3000/api/course', {
    id,
  }) 
  return response
}
const Course = async({params}:{params:{id:string}}) => {
 
  const Data = await getData(params.id)
  const Course = Data.data.course
  
  return (
    <div className=' '>
      <AppBar />
      <div className='pt-16 p-4 flex flex-col-reverse lg:flex-row'>

        <div className=' p-4  lg:w-full'>

          <div className='flex-col justify-between '>
            <h2 className="text-5xl font-bold mt-6">{Course.name}</h2>
            <div className=" flex  justify-end p-2">
              <label className="cursor-pointer flex items-center ">
                <span className="label-text px-2 font-bold">Bookmark</span>

                <input type="checkbox" className="checkbox checkbox-success" />
              </label>
            </div>
          </div>
          <p className='text-2xl py-2'>{Course.description}</p>
          <div className='py-2'>
            <span className='text-md font-bold'>Instructor</span>
            <div className=' flex items-center'>

              <div className="w-8 rounded-full mt-1 ">
                <img className='rounded-full' alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <span className="text-sm px-2 ">{Course.instructor}</span>

            </div>
          </div>
          <div className='text-sm '>
            <ul className=''>
              <li><a className='pr-2 py-2 font-bold'>Enrollment status:</a><a>{Course.enrollmentStatus}</a></li>
              <li><a className='pr-2 py-2 font-bold'>Course duration:</a><a>{Course.duration}</a></li>
              <li><a className='pr-2 py-2 font-bold'>Schedule:</a><a>{Course.schedule}</a></li>
              <li><a className='pr-2 py-2 font-bold'>Location:</a><a>{Course.location}</a></li>
              <ul>
                <li><a className='pr-2 py-2 font-bold'>Pre-requisites</a></li>
                {
                  Course.prerequisites.map((value, ind) => {
                    return <li key={ind}>&bull;<a className='pr-2 py-2'> {value}</a></li>
                  })
                }
              </ul>

            </ul>


          </div>


          <div className="flex justify-end">

            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>




        <div className='flex items-center lg:w-10/12'>
          <figure><img src={Course.thumbnail} alt="Shoes" /></figure>

        </div>
      </div>
      <div className='lg:w-9/12 px-4 mt-2'>
        <span className='text-2xl font-bold pl-2'>Syllabus:</span>
        {Course.syllabus.map((value, ind) => {
          return <div tabIndex={0} key={ind} className="collapse collapse-arrow border border-base-300 bg-base-200 my-2">
            <div className="collapse-title text-lg font-medium">
              <span className='font-bold'>Week: {value.week}</span>
            </div>
            <div className="collapse-content">
              <p><a className='font-bold'>Topic:</a> {value.topic}</p>

              <p><a className='font-bold'>Content:</a> {value.content}</p>
            </div>
          </div>
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Course