import { useParams, Outlet, NavLink } from 'react-router-dom'
import { vansData } from '../../../vansData'
import { BackToVans } from '../../components/BackToVans'

const activeStyles = {
  fontWeight: 'bold',
  color: '#161616',
  textDecoration: 'underline',
}

export const HostVanDetail = () => {
  const params = useParams()
  const findVan = vansData.find((vans) => vans.id === params.id)
  return (
    <>
      <BackToVans />
    </section>
  )
}
