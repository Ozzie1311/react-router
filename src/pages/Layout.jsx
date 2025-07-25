import { MainHeader } from '../components/MainHeader'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main className='main-container'>
      <MainHeader />
      <Outlet />
      <Footer>2022 #VANSLIFE</Footer>
    </main>
  )
}
