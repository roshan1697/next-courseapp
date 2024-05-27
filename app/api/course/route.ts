import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";


export  const POST = async(req:NextRequest) => {
    try {
    const body = await req.json()
    const { id } = body
   const course = await prisma.course.findUnique({
    where:{
        id:parseInt(id),
    },
    include:{
        syllabus:true,
        student:true
    }
   })
    
    return NextResponse.json({ course }, {
        status: 200,
      },)
} catch (error) {
    console.log(error)
  }
}
