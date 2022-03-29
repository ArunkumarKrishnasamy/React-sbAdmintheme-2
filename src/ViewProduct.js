import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from './UserContext';

function ViewProduct() {
    let params=useParams();
    const productData=useContext(UserContext)
  return (
    <div>ViewProduct Details
        <h1>{productData.products[params.id].name}</h1>
        <h1>{productData.products[params.id].brand}</h1>
        <h1>{productData.products[params.id].price}</h1>
    </div>
  )
}

export default ViewProduct