import { Link } from 'react-router-dom'

export const HostNavigation = () => {
  return (
    <nav className='host-nav'>
      <Link to='/host'>Dashboard</Link>
      <Link to='/host/income'>Income</Link>
      <Link to='/host/vans'>Vans</Link>
      <Link to='/host/reviews'>Reviews</Link>
    </nav>
  )
}
