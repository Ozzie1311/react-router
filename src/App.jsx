import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Vans } from './pages/Vans/Vans'
import { VansDetailed } from './pages/Vans/VansDetailed'
import { Layout } from './pages/Layout'
import { HostLayout } from './pages/Host/HostLayout'
import { Dashboard } from './pages/Host/Dashboard'
import { Income } from './pages/Host/Income'
import { Reviews } from './pages/Host/Reviews'
import { HostVan } from './pages/Host/HostVan'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VansDetailed />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='/host/vans' element={<HostVan />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
