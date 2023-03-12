import useSWR from 'swr'

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/dashboard')
  const data = await res.json();
  return data
}


export default function DashboardSWR(params) {
  const { data, error } = useSWR('dashboard', fetcher)
  
  if (error) return 'An error has occured'
  if (!data) return 'Loading'
  
  return (
    <>
      <h2>Dashboard</h2>
      <h2>ports - { data.ports}</h2>
      <h2>Likes - { data.likes}</h2>
      <h2>Followers - { data.followers}</h2>
      <h2>Following - { data.following}</h2>
    </>
  )
}

