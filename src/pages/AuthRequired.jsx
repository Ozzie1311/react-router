import { Outlet, Navigate } from 'react-router-dom'

export const AuthRequired = () => {
  const authenticated = false

  if (!authenticated) {
    return <Navigate to='/login' />
  }

  return <Outlet />
}
