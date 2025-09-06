import { NextResponse } from "next/server";

const DB=[
      {id:1,name:"name1"},
      {id:2,name:"name2"},
      {id:3,name:"name3"},
    ]
export async function GET(request: Request){
  const searchParams=new URL(request.url).searchParams
  const name=searchParams.get("name") as string

  return NextResponse.json({
    users:DB.filter(user=>user.name.includes(name))
  })
}