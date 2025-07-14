import { useOutletContext } from 'react-router-dom'

export const HostVanPhotos = () => {
  const { findVan } = useOutletContext()
  console.log(findVan)
  return <h1>This is the HostVanPhotos component</h1>
}
