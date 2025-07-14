import { NavLink, Outlet, useParams } from 'react-router-dom'
import { vansData } from '../../../vansData'

export const VansLayout = () => {
  const params = useParams()
  const findVan = vansData.find((van) => van.id === params.id)
  return <section className='vans2'></section>
}
