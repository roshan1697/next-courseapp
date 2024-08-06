
import AppBar from '../appbar'
import CourseCard from '../coursecard'
import FilterButton from '../filterbutton'
import Footer from '../footer'

interface CourseData {
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
}
const LandingPage = async({course}:CourseData[]) => {

  return (
    <div className=''>
        <AppBar />
        <div className='p-4 pt-16'>
        <div className='p-1 flex justify-end'>

        <FilterButton/>
        </div>
        <div className='flex flex-wrap justify-evenly'>

        {course.map((data,ind)=>{
          return <CourseCard key={ind} title={data.name} description={data.description} thumbnail={data.thumbnail} 
          id={data.id}
          />
        })}
        </div>
        </div>
       
        <Footer/>
        </div>
  )
}

export default LandingPage