import { useEffect, useState } from "react"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData(params) {
      const res = await fetch('http://localhost:4000/dashboard')
      const data = await res.json();
      setDashboardData(data)
      setIsLoading(false)
    }
    fetchDashboardData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <h2>Dashboard</h2>
      <h2>Ports - { dashboardData.ports}</h2>
      <h2>Likes - { dashboardData.likes}</h2>
      <h2>Followers - { dashboardData.followers}</h2>
      <h2>Following - { dashboardData.following}</h2>
    </>
  )
}