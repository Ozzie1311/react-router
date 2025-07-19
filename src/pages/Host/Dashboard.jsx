import image1 from '../../Images/star.svg'
import '../../Styles/Dashboard.css'
import { HostVan } from '../Host/HostVan'
export const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='wrapper welcome'>
        <div className='welcome-info'>
          <h2 className='welcome-title'>Welcome!</h2>
          <p className='welcome-income'>
            Income last <span className='welcome-span'>30 days</span>
          </p>
          <p className='welcome-price'>$2,260</p>
        </div>
        <div className='details'>Details</div>
      </div>

      <div className='wrapper score'>
        <h2 className='score-title'>Review score </h2>
        <div className='img-container'>
          <img className='score-img' src={image1} alt='Star image' />{' '}
        </div>
        <div className='details'>Details</div>
      </div>

      <HostVan />
    </section>
  )
}
