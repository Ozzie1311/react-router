import { MainHeader } from './MainHeader'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main>
      <MainHeader />
      <Outlet />
      <Footer>2022 #VANSLIFE</Footer>
    </main>
  )
}
