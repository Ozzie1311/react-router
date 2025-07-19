import { useOutletContext } from 'react-router-dom'

export const HostVanPhotos = () => {
  const { currentVan } = useOutletContext()
  console.log(currentVan)
  return (
    <img
      className='img-photo'
      src={currentVan.imageUrl}
      alt={currentVan.name}
      width={120}
    />
  )
}
