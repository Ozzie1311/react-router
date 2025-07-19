import { useOutletContext } from 'react-router-dom'

export const HostVanPricing = () => {
  const { currentVan } = useOutletContext()
  return (
    <div className='pricing-container'>
      <h2>${currentVan.price}</h2>
      <p>/day</p>
    </div>
  )
}
