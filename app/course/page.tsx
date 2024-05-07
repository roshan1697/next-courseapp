import AppBar from '@/components/appbar'
import React from 'react'
import { Data } from '@/lib/coursedata'
import Footer from '@/components/footer'
const Course = () => {
  return (
    <div className=' '>
      <AppBar />
      <div className='pt-16 p-4 flex  '>

        <div className='w-9/12 p-4'>

          <div className='flex-col justify-between '>
            <h2 className="text-5xl font-bold mt-6">{Data[0].name}</h2>
            <div className=" flex  justify-end p-2">
              <label className="cursor-pointer flex items-center ">
                <span className="label-text px-2 font-bold">Bookmark</span>

                <input type="checkbox"  className="checkbox checkbox-success" />
              </label>
            </div>
          </div>
          <p className='text-2xl py-2'>Learn the basics of React Native development and build your first mobile app.</p>
          <div className='py-2'>
            <span className='text-md font-bold'>Instructor</span>
            <div className=' flex items-center'>

            <div className="w-8 rounded-full mt-1 ">
              <img className='rounded-full' alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <span className="text-sm px-2 ">{Data[0].instructor}</span>

            </div>
          </div>
            <div className='text-sm '>
              <ul className=''>
                <li><a className='pr-2 py-2 font-bold'>Enrollment status:</a><a>{Data[0].enrollmentStatus}</a></li>
                <li><a className='pr-2 py-2 font-bold'>Course duration:</a><a>{Data[0].duration}</a></li>
                <li><a className='pr-2 py-2 font-bold'>Schedule:</a><a>{Data[0].schedule}</a></li>
                <li><a className='pr-2 py-2 font-bold'>Location:</a><a>{Data[0].location}</a></li>
                <ul>
                  <li><a className='pr-2 py-2 font-bold'>Pre-requisites</a></li>
                  {
                    Data[0].prerequisites.map((value,ind)=>{
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




        <div className='flex items-center'>
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

        </div>
      </div>
      <div className='w-9/12 px-4 mt-2'>
        <span className='text-2xl font-bold pl-2'>Syllabus:</span>
        {Data[0].syllabus.map((value,ind)=>{
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
      <Footer/>
    </div>
  )
}

export default Course