import { useRouter } from "next/router"
import { useState } from "react"


export async function getServerSideProps(context) {
  const { query } = context
  const { category } = query
  const queryString = category ? `category=${category}` : ''
  const res = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await res.json()

  return {
    props: {
      eventList: data
    }
  }
}

export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
  const res = await fetch(`http://localhost:4000/events?category=sports`)
  const data = await res.json()
  setEvents(data)
  router.push('/events?category=sports', undefined, { shallow: true })
  }

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {
        events.map((event => {
          return (
            <div key={event.id}>
              <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
              <p>{event.description}</p>
              <hr />
            </div>
          )
        }))
      }
    </>
  )
}