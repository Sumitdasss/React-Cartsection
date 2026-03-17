import React, { useState } from 'react'
import Data from"../../../data.json"
import Producttwo from '../Producttwo';

const Products = () => {
    const [Product  ]=useState(Data.Product);
  return (
    <div className="max-w-[1440px] mx-auto mt-[50px]">
    <div className='flex justify-between'>{
        Product.map(p=>(
         <Producttwo key={p.id}  Product={p} />
        ))
    }</div>
    </div>
  )
}

export default Products