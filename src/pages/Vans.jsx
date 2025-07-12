import { vansData } from '../../vansData'
import { Link } from 'react-router-dom'

const miSet = new Set()

vansData.forEach((vans) => {
  miSet.add(vans.type)
})

const arrayTypes = Array.from(miSet)

export const Vans = () => {
  return (
    <section className='vans'>
      <h1 className='vans-title'>Explore our van options</h1>
      <div className='vans-type-container'>
        <div className='vans-type'>
          {arrayTypes.map((type) => {
            return (
              <span className='span-type' key={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            )
          })}
        </div>
        <span className='vans-clear-filters'>Clear filters</span>
      </div>
      <div className='vans-container'>
        {vansData.map((vans) => {
          return (
            <Link to={`/vans/${vans.id}`} className='vans-link' key={vans.id}>
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
