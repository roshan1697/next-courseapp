import { NextRequest , NextResponse } from "next/server";
import prisma from "@/db";

export const GET = async(req:NextRequest)=> {
  try {

    const Data  = await prisma.course.findMany()
    
    return NextResponse.json(
      {
      Data
      },
      {
        status: 200,
      },
    )
  } catch (err )
{
  console.log(err)
}}