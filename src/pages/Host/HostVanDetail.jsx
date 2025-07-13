import { useParams } from 'react-router-dom'
import { vansData } from '../../../vansData'
import { BackToVans } from '../../components/BackToVans'

export const HostVanDetail = () => {
  const params = useParams()
  const findVan = vansData.find((vans) => vans.id === params.id)
  return (
    <section className='host-van-detail'>
      <BackToVans />
    </section>
  )
}
