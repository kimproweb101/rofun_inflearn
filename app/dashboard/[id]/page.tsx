export default function DashboardDetailPage({params, searchParams}){
  console.log(params)
  return <main>dashboard {params.id} code={searchParams.code}</main>
}