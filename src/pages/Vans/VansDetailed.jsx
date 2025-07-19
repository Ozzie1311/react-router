import { useParams, useLocation } from 'react-router-dom'
import { useGetVans } from '../../Hooks/useGetVans'
import { BackToVans } from '../../components/BackToVans'

export const VansDetailed = () => {
  const params = useParams()
  const { data, loading, error } = useGetVans()
  const location = useLocation()
  const findVan = data.find((vans) => vans.id === params.id)

  const search = location.state?.search || '' // con esto verificamos que el location.state no sea un valor falsy
  const filter = location.state?.type || '' // con esto nos estamos trayendo el valor del filtro

  if (loading) {
    return <h1>Loading your van...</h1>
  }

  if (error) {
    return <p>There is an error: {error.message}</p>
  }

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
