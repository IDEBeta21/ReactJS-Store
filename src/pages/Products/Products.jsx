import React, { useState, useEffect } from 'react'

import './Products.scss'
import Card from '../../components/Card'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch all products
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })

    // Fetch categories
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error))
  }, [])

  const selectCategory = (event) => {
    setSelectedCategory(event.target.value)
    setLoading(true)

    const itemCategory = event.target.value

    if (itemCategory) {
      fetch(`https://fakestoreapi.com/products/category/${itemCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching category products:', error)
          setLoading(false)
        })
    } else {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching all products:', error)
          setLoading(false)
        })
    }
  }

  const openProductItem = (productId) => {
    navigate(`/productdetails/${productId}`)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="sorter-container">
        <p>SHOW</p>
        <div>
          <select
            className="category-dropdown"
            onChange={selectCategory}
            value={selectedCategory}
          >
            <option value="">ALL</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            productName={product.title}
            productPrice={`$ ${product.price}`}
            imageUrl={product.image}
            productReview={`Review: ${product.rating.rate} (${product.rating.count})`}
            productCategory={product.category.toUpperCase()}
            onCardClick={() => openProductItem(product.id)}
          />
        ))}
      </div>
    </>
  )
}

export default Products
