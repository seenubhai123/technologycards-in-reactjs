// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} list-style`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="img-flex">
          <img className="img" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
