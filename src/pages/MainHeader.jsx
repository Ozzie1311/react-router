import { Link } from 'react-router-dom'

export const MainHeader = () => {
  return (
    <header>
      <Link className='logo' to='/'>
        #VANLIFE
      </Link>
      <div>
        <Link className='link' to='/host'>
          Hosts
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
        <Link className='link' to='/vans'>
          Vans
        </Link>
      </div>
    </header>
  )
}
