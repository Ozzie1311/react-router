import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Vans } from './pages/Vans/Vans'
import { Login } from './pages/Login'
import { VansDetailed } from './pages/Vans/VansDetailed'
import { Layout } from './pages/Layout'
import { HostLayout } from './pages/Host/HostLayout'
import { Dashboard } from './pages/Host/Dashboard'
import { Income } from './pages/Host/Income'
import { Reviews } from './pages/Host/Reviews'
import { HostVan } from './pages/Host/HostVan'
import { HostVanDetail } from './pages/Host/HostVanDetail'
import { HostVanInfo } from './pages/Host/HostVanInfo'
import { HostVanPricing } from './pages/Host/HostVanPricing'
import { HostVanPhotos } from './pages/Host/HostVanPhotos'
import { ErrorPage } from './pages/ErrorPage'
import { AuthRequired } from './pages/AuthRequired'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VansDetailed />} />
          <Route path='login' element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='vans' element={<HostVan />} />
              <Route path='vans/:id' element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path='pricing' element={<HostVanPricing />} />
                <Route path='photos' element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
