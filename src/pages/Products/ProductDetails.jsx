import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './ProductDetails.scss'

const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching product details:', error)
        setLoading(false)
      })
  }, [productId])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="product-item-details-container">
      <div className="product-item-image-container">
        <img
          className="product-item-image"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="product-item-desciption-container">
        <div>
          <p className="pd-product-name">{product.title}</p>
          <p className="pd-product-desc">{product.description}</p>
          <p className="pd-product-price">Price: ${product.price}</p>
          <p className="pd-product-review">
            Rating: {product.rating.rate} (Reviews: {product.rating.count})
          </p>
          <div className="pd-category-container">
            <p className="pd-product-category">
              {product.category.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
