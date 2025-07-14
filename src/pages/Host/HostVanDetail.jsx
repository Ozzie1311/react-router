import { useParams } from 'react-router-dom'
import { vansData } from '../../../vansData'
import { BackToVans } from '../../components/BackToVans'

export const HostVanDetail = () => {
  const params = useParams()
  const findVan = vansData.find((vans) => vans.id === params.id)
  return (
    <section className='host-van-detail'>
      <BackToVans />
      <div className='van-detail-container'>
        <div className='van-detail-img-container'>
          <img src={findVan.imageUrl} alt={findVan.name} />
        </div>
        <div className='van-detail-text-container'>
          <i className={`detail-${findVan.type}`}>
            {findVan.type.charAt(0).toUpperCase() + findVan.type.slice(1)}
          </i>
          <h1>{findVan.name}</h1>
          <p>
            <span>${`${findVan.price}`}</span>/day
          </p>
        </div>
      </div>
    </section>
  )
}
