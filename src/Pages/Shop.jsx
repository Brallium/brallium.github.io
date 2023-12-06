import React from 'react'
import f1 from '../Components/Images/fragrant1.jpeg'
import f2 from '../Components/Images/fragrant2.jpeg'
import stand from '../Components/Images/Standard ver.jpeg'
import arrowb from '../Components/Images/arrow-down.png'
import prod from '../Components/Images/Products.png'

const Shop = () => {
  return (
  <>
  <div className='header'>
    <div className="center-mid">
      <h1>Our Products</h1>
        <h2>Shop all</h2>
        <div className="arrow-button">
          <button className="arrow-down">
          < img src={arrowb} alt=""/>
          </button>
        </div>
    </div>
  </div>
  <img
  className="curly-line"
  src={process.env.PUBLIC_URL + "./images/CurlyLine.png"}
  alt="curlyLine"
        />
  <div className="products">
    <img src ={prod} alt=""/>
  </div>
  <div className= 'head'>
    <h1>Find Your Perfect Fit.</h1>
     <div className="button">
      <button className="find-fit">
        Don't know your size </button>
  </div>
    <div className="frag1">
      <img src={f1} alt="" />
    </div>
    <div className="frag2">
        <img src={f2} alt="" />
      </div>
      <div className="standard">
        <img src={stand} alt="" />
      </div>
      
      </div>
   
    
  
{'}'}

export default Shop
</> 
  )
}
