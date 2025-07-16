import { vansData } from '../../../vansData'
import { Link, useSearchParams } from 'react-router-dom'

export const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get('type')

  const filterData = typeFilter
    ? vansData.filter((vans) => vans.type === typeFilter)
    : vansData

  return (
    <section className='vans'>
      <h1 className='vans-title'>Explore our van options</h1>

      <div className='vans-type-wrapper'>
        <div className='vans-type-container'>
          <button
            className='van-type simple'
            onClick={() => setSearchParams({ type: 'simple' })}
          >
            Simple
          </button>
          <button
            className='van-type rugged'
            onClick={() => setSearchParams({ type: 'rugged' })}
          >
            Rugged
          </button>
          <button
            className='van-type luxury'
            onClick={() => setSearchParams({ type: 'luxury' })}
          >
            Luxury
          </button>
        </div>
        {typeFilter && (
          <button
            className='van-type clear-filter'
            onClick={() => setSearchParams({})}
          >
            Clear filters
          </button>
        )}
      </div>

      <div className='vans-container'>
        {filterData.map((vans) => {
          return (
            <Link
              to={`${vans.id}`}
              state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter,
              }}
              className='vans-link'
              key={vans.id}
            >
              <div className='vans'>
                <div className='vans-image'>
                  <img src={vans.imageUrl} alt={vans.name} />
                </div>
                <div className='vans-info-container'>
                  <h2>{vans.name}</h2>
                  <p>${vans.price}/day</p>
                </div>
                <button className={`vans-button-${vans.type}`}>
                  {vans.type.charAt(0).toUpperCase() + vans.type.slice(1)}
                </button>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
