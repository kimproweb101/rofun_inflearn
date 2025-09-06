'use server'
export async function searchUsers(name:string){
  const DB=[
    {id:1, name:"name1"},
    {id:2, name:"name2"},
    {id:3, name:"name3"},
  ]
  return DB.filter((user)=> user.name.includes(name))
}