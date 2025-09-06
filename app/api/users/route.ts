import { NextResponse } from "next/server";

export async function GET(request: Request){
  return NextResponse.json({
    users:[
      {id:1,name:"name1"},
      {id:2,name:"name2"},
      {id:3,name:"name3"},
    ]
  })
}