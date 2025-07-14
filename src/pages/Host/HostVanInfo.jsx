import { useOutletContext } from 'react-router-dom'

export const HostVanInfo = () => {
  const { findVan } = useOutletContext()

  return (
    <div className='hostVanInfo'>
      <p>
        <strong>Name:</strong> {findVan.name}
      </p>
      <p>
        <strong>Category:</strong>{' '}
        {findVan.type.charAt(0).toUpperCase() + findVan.type.slice(1)}
      </p>
      <p>
        <strong>Description:</strong> {findVan.description}
      </p>
      <p>
        <strong>Visibility:</strong> Public
      </p>
    </div>
  )
}
