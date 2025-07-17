import React from 'react'
import { Link } from 'react-router-dom'
function ProductList({mobiles}) {
  return (
    <div>
      {
        mobiles.map((item,ind)=>(
          <>

       <Link to={`/products/${item.id}`} style={{textDecoration:"none"}}> 
       <h1>{item.name}</h1>
       <p>{item.description}</p>
       <p>{item.price}</p>
       <img src={item.image} width="80" height="80"/>
       </Link> 
       
  
        </>
      ))
      }
    </div>
  )
}

export default ProductList