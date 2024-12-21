import React from 'react'
import './Card.scss' // Import the CSS file for styling

const Card = ({
  productName,
  productPrice,
  productReview,
  productCategory,
  imageUrl,
  onCardClick,
}) => {
  return (
    <div className="card" onClick={onCardClick}>
      <div className="product-image-container">
        {imageUrl && (
          <img src={imageUrl} alt={productName} className="product-image" />
        )}
      </div>
      <div className="product-card-content">
        <p className="product-name">{productName}</p>
        <p className="product-price">{productPrice}</p>
        <p className="product-review">{productReview}</p>
        <div className="category-container">
          <p className="product-category">{productCategory}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
