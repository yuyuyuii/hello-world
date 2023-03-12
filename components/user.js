export default function User({ user }) {
  return (
    <>
      <li>{ user.name }</li>
      <li>{ user.email }</li>
    </>
  )
}