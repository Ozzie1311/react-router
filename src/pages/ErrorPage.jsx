import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import '../Styles/ErrorPage.css'

export const ErrorPage = () => {
  return (
    <section className='error'>
      <div className='error-wrapper'>
        <h1>Sorry page not found</h1>
        <Link to='..'>
          <button>
            <FaHome />
            <p>Go to home page</p>
          </button>
        </Link>
      </div>
    </section>
  )
}
