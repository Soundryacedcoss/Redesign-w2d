import React, {useContext, useState } from 'react'
import './Catogory.css'
export const Category = () => {
  return (
    <div className='CategoryPage'>
        <div className='Category-Row1-col1'>
            <h3>Lucknow veg express</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Average 5/5</p>
            <button className='RatingButton'>View Rating</button>
        </div>
        <hr />
        <p className='CategoryPara'>Fresh Fruits</p>
        <hr />
        <p className='CategoryPara'>Fresh Vegetable</p>
          <hr />
        <p className='CategoryPara'>Dry fruits</p>
        <hr/>
        <p className='CategoryPara'>Dairy Products</p>
        <hr />
        <p className='CategoryPara'>FRozen product</p>
       
    </div>
  )
}
