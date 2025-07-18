import { Link } from 'react-router-dom'
import { useGetVans } from '../../Hooks/useGetVans'

export const HostVan = () => {
  const { data } = useGetVans()
  return (
    <section className='hostVan'>
      <h1 className='hostVan-title'>Your listed vans</h1>
      <div className='hostVan-container'>
        {data
          .map((vans) => {
            return (
              <Link to={`/host/vans/${vans.id}`} key={vans.id}>
                <div className='van-item'>
                  <div className='van-item-img-container'>
                    <img src={vans.imageUrl} alt={vans.name} />
                  </div>
                  <div className='van-item-text-container'>
                    <h2>{vans.name}</h2>
                    <p>${vans.price}/day</p>
                  </div>
                </div>
              </Link>
            )
          })
          .slice(2)}
      </div>
    </section>
  )
}
