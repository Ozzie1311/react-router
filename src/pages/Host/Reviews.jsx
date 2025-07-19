import image from '../../Images/reviews.png'
import line from '../../Images/Line.svg'
import orangeStar from '../../Images/orangeStar.svg'
import reviews1 from '../../Images/reviews1.svg'
import reviews2 from '../../Images/reviews2.svg'
import '../../Styles/Reviews.css'

export const Reviews = () => {
  const arrayStar = Array(5).fill(orangeStar)
  return (
    <section className='reviews'>
      <div className='reviews-info'>
        <h1 className='reviews-title'>Your reviews</h1>
        <span className='span-f'>
          last <span className='span-s'>30 days</span>
        </span>
      </div>
      <img className='reviews-img' src={image} alt='Raiting image' />
      <div className='star-container'>
        {arrayStar.map((star, index) => {
          return <img key={index} src={star} alt='Orange star' />
        })}
      </div>
      <img className='rv1' src={reviews1} alt='Img of review' />
      <img className='line' src={line} alt='Img of a line' />
      <div className='star-container'>
        {arrayStar.map((star, index) => {
          return <img key={index} src={star} alt='Orange star' />
        })}
      </div>
      <img className='rv2' src={reviews2} alt='Img of a review' />
    </section>
  )
}
