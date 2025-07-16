import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

export const BackToVans = ({ location, type }) => {
  return (
    <Link className='back-link' to={`..${location}`} relative='path'>
      <FaArrowLeftLong />
      <p>Back to {type} vans</p>
    </Link>
  )
}
