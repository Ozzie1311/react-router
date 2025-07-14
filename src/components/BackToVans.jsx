import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

export const BackToVans = () => {
  return (
    <Link className='back-link' to='..' relative='path'>
      <FaArrowLeftLong />
      <p>Back to all vans</p>
    </Link>
  )
}
