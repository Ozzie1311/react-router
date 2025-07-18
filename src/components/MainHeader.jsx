import { NavLink } from 'react-router-dom'
import { LuCircleUserRound } from 'react-icons/lu'
import { IoLogInOutline } from 'react-icons/io5'

export const MainHeader = () => {
  const fakeLogOut = () => {
    window.localStorage.removeItem('loggedin')
    console.log('Me estoy deslogueando')
  }
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
        <NavLink onClick={fakeLogOut}>
          <IoLogInOutline size={20} />
        </NavLink>
      </div>
    </header>
  )
}
