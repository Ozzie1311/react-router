import image2 from '../../Images/graph.svg'
import '../../Styles/Income.css'

export const Income = () => {
  return (
    <section className='income'>
      <div className='income-info'>
        <h1 className='income-title'>Income</h1>
        <p className='income-p'>
          Last <span className='income-span'>30 days</span>
        </p>
        <p className='income-price'>$2,260</p>
      </div>
      <div className='income-graph'>
        <img src={image2} alt='Image from a graph' />
      </div>
      <div className='transactions'>
        <h2 className='transactions-title'>Your transactions (3)</h2>
        <p className='income-p'>
          Last <span className='income-span'>30 days</span>
        </p>
      </div>
      <ul className='transaction-list'>
        <li className='item' key={1}>
          <p className='p-price'>$720</p>
          <p className='p-date'>13/03/25</p>
        </li>
        <li className='item' key={2}>
          <p className='p-price'>$560</p>
          <p className='p-date'>10/11/24</p>
        </li>
        <li className='item' key={3}>
          <p className='p-price'>$980</p>
          <p className='p-date'>23/8/24</p>
        </li>
      </ul>
    </section>
  )
}
