import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom'
import { vansData } from '../../../vansData'
import { useGetVans } from '../../Hooks/useGetVans'
import { BackToVans } from '../../components/BackToVans'

const activeStyles = {
  fontWeight: 'bold',
  color: '#161616',
  textDecoration: 'underline',
}

export const HostVanDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const { data, loading, error } = useGetVans()

  const search = location.state?.search || ''

  if (loading) {
    return <h1>Loading your van...</h1>
  }

  if (error) {
    return <h1>There was an Error: {error.message}</h1>
  }

  const currentVan = data.find((van) => van.id === id)
  return (
    <>
      <BackToVans location={search} />
      <section className='host-van-detail'>
        <div className='host-van-detail-container'>
          <img
            src={currentVan.imageUrl}
            alt={currentVan.name}
            width={165}
            height={185}
          />
          <div className='detail-info-container'>
            <i className={`i-${currentVan.type}`}>
              {currentVan.type.charAt(0).toUpperCase() +
                currentVan.type.slice(1)}
            </i>
            <h2>{currentVan.name}</h2>
            <p>
              <span>${currentVan.price}</span>/day
            </p>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className='vans-nav'>
          <NavLink
            to='.'
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to='pricing'
          >
            Pricing
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to='photos'
          >
            Photos
          </NavLink>
        </nav>

        {/* Outlet */}
        <Outlet context={{ currentVan }} />
      </section>
    </>
  )
}
