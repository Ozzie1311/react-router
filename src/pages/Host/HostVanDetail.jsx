import { useParams, Outlet, NavLink } from 'react-router-dom'
import { vansData } from '../../../vansData'
import { BackToVans } from '../../components/BackToVans'

const activeStyles = {
  fontWeight: 'bold',
  color: '#161616',
  textDecoration: 'underline',
}

export const HostVanDetail = () => {
  const params = useParams()
  const findVan = vansData.find((vans) => vans.id === params.id)
  return (
    <>
      <BackToVans />
      <section className='host-van-detail'>
        <div className='host-van-detail-container'>
          <img
            src={findVan.imageUrl}
            alt={findVan.name}
            width={165}
            height={185}
          />
          <div className='detail-info-container'>
            <i className={`i-${findVan.type}`}>
              {findVan.type.charAt(0).toUpperCase() + findVan.type.slice(1)}
            </i>
            <h2>{findVan.name}</h2>
            <p>
              <span>${findVan.price}</span>/day
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
        <Outlet context={{ findVan }} />
      </section>
    </>
  )
}
