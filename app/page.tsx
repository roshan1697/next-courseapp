
import LandingPage from "@/components/landingpage";
import axios from "axios";
import Image from "next/image";

import useSWR from 'swr'
 const getData = async()=> {
  const response = await axios.get('http://localhost:3000/api/user')
  
  
return response.data.Data
  
}

export default async function Home() {
  
  const courses = await getData()
  
  
  
if (!courses){
  return <h1>loading...</h1>
}
  return (
    <div>
      
            
      <LandingPage course={courses}/>
      
    </div>
  );
}
