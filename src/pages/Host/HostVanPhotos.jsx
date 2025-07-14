import { useOutletContext } from 'react-router-dom'

export const HostVanPhotos = () => {
  const { findVan } = useOutletContext()
  console.log(findVan)
  return (
    <img
      className='img-photo'
      src={findVan.imageUrl}
      alt={findVan.name}
      width={120}
    />
  )
}
