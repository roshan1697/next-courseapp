import React from 'react'
interface Data {
  title: string;
  description: string;
  thumbnail:string;
}
const CourseCard
  = ({ title, description,thumbnail }: Data) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl my-2">
        <figure><img className='h-56' src={thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <div className='flex justify-between items-center'>
            <h2 className="card-title">{title}</h2>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text px-2 font-bold">Bookmark</span>

                <input type="checkbox" checked={false} className="checkbox checkbox-success" />
              </label>
            </div>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end items-center">

            <button className="btn btn-primary">Enroll</button>
          </div>
        </div>
      </div>
    )
  }

export default CourseCard
