import { Outlet } from 'react-router-dom'
import { HostNavigation } from './HostNavigation'

export const HostLayout = () => {
  return (
    <section className='host'>
      <HostNavigation />
      <Outlet />
    </section>
  )
}
