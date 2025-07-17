import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminPanel({mobiles}) {
  return (
    <>
    <Link to="/add"><button>Add Product</button></Link>
    <div>{mobiles.map((item,ind)=>(
        <div>
           <Link to={`/admin/products/${item.id}`}><img src={item.image} width="80" height="80"/></Link>
        </div>
    ))
    }</div>
    </>
  )
}


export default AdminPanel