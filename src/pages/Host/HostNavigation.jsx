import { NavLink } from 'react-router-dom'

export const HostNavigation = () => {
  return (
    <nav className='host-nav'>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : null)}
        end
        to='/host'
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : null)}
        to='/host/income'
      >
        Income
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : null)}
        to='/host/vans'
      >
        Vans
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : null)}
        to='/host/reviews'
      >
        Reviews
      </NavLink>
    </nav>
  )
}
