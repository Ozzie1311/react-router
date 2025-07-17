import { NavLink } from 'react-router-dom'
import { LuCircleUserRound } from 'react-icons/lu'

export const MainHeader = () => {
  return (
    <header>
      <NavLink className='logo' to='/'>
        #VANLIFE
      </NavLink>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to='host'
        >
          Hosts
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to='about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to='vans'
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to='login'
        >
          <LuCircleUserRound />
        </NavLink>
      </div>
    </header>
  )
}
