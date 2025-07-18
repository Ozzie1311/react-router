import { useOutletContext } from 'react-router-dom'

export const HostVanInfo = () => {
  const { currentVan } = useOutletContext()

  return (
    <div className='hostVanInfo'>
      <p>
        <strong>Name:</strong> {currentVan.name}
      </p>
      <p>
        <strong>Category:</strong>{' '}
        {currentVan.type.charAt(0).toUpperCase() + currentVan.type.slice(1)}
      </p>
      <p>
        <strong>Description:</strong> {currentVan.description}
      </p>
      <p>
        <strong>Visibility:</strong> Public
      </p>
    </div>
  )
}
