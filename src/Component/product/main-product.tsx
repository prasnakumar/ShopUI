import React from 'react'
import './main-product.scss'
import Productcard from './product-card/product-card'

function Mainproduct() {
    const a=[1,2,3,12,31,23,12,3,123,1,23,12,3,12,312,3,12,3,21]
  return (
    <div className='main-page'>
        {a.map((val:any,key:any)=>
 <Productcard />
        )}
   </div>
  )
}

export default Mainproduct