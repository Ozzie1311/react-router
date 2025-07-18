import { Outlet, Navigate, useLocation } from 'react-router-dom'

export const AuthRequired = () => {
  const isLoggedIn = window.localStorage.getItem('loggedin')
  const location = useLocation()

  if (!isLoggedIn) {
    return (
      <Navigate
        replace
        state={{ message: 'You must log in first.', from: location.pathname }}
        to='/login'
      />
    )
  }

  return <Outlet />
}
