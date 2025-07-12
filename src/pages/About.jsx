import aboutImage from '../Images/aboutImage.png'

export const About = () => {
  return (
    <section className='about'>
      <div className='about-img'>
        <img src={aboutImage} alt='Van image' />
      </div>
      <div className='about-info'>
        <h1 className='about-info-title'>
          Don´t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className='about-info-p'>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch(Hitch costs extra 😉)
        </p>
        <p className='about-info-p'>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className='about-cta-container'>
          <h2 className='cta-container-text'>Your destination is waiting.</h2>
          <h2 className='cta-container-text'>Your van is ready.</h2>
          <button className='cta-container-button'>Explore our vans</button>
        </div>
      </div>
    </section>
  )
}
