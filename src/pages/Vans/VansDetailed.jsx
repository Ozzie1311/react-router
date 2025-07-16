import { useParams, useLocation } from 'react-router-dom'
import { vansData } from '../../../vansData'
import { BackToVans } from '../../components/BackToVans'

export const VansDetailed = () => {
  const params = useParams()
  const location = useLocation()
  const findVan = vansData.find((vans) => vans.id === params.id)

  const search = location.state?.search || '' // con esto verificamos que el location.state no sea un valor falsy
  const filter = location.state?.type || '' // con esto nos estamos trayendo el valor del filtro
  return (
    <section className='vans-detail'>
      <BackToVans type={filter} location={search} />
      <div className='detail-container'>
        <div className='detail-img-container'>
          <img src={findVan.imageUrl} alt={findVan.name} />
        </div>
        <i className={`detail-${findVan.type}`}>
          {findVan.type.charAt(0).toUpperCase() + findVan.type.slice(1)}
        </i>
        {/* Information Container */}
        <div className='info-container'>
          <h1 className='info-container-title'>{findVan.name}</h1>
          <p className='info-container-price'>
            <span className='span-price'>${findVan.price}</span>
            /day
          </p>
          <p className='info-container-description'>{findVan.description}</p>
          <button className='info-container-button'>Rent this van</button>
        </div>
      </div>
    </section>
  )
}
