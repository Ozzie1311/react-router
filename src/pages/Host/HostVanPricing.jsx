import { useOutletContext } from 'react-router-dom'

export const HostVanPricing = () => {
  const { findVan } = useOutletContext()
  return (
    <div className='pricing-container'>
      <h2>${findVan.price}</h2>
      <p>/day</p>
    </div>
  )
}
