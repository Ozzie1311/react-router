import { useParams, Link } from 'react-router-dom'
import { vansData } from '../../vansData'
import { FaArrowLeftLong } from 'react-icons/fa6'

export const VansDetailed = () => {
  const params = useParams()
  const findVan = vansData.find((vans) => vans.id === params.id)
  return (
    <section className='vans-detail'>
      <Link to='/vans'>
        <FaArrowLeftLong />
        <p>Back to all vans</p>
      </Link>

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
