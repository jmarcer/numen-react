import React from 'react'

const Product = ({ data, addToCart }) => {
  const { id, name, price, description } = data
  return (
    <div className="product">
      <div className="product-img"></div>
      <div className="product-detail">
        <h4>{name}</h4>
        <p> {description} </p>
        <div className="buttons">
          <div className="price"> $ {price}</div>
          <button className='btn-card' onClick={() => addToCart(id)}>Add</button>
        </div>
      </div>
    </div>
  )

}

export default Product;