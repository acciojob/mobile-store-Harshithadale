import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

function ProductDetails({mobiles}) {
  const { id } = useParams();
  const product = mobiles.find(mob => mob.id === Number(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width={200} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
       <Link to="/">
        <button className="btn">Other Products</button>
      </Link>
    </div>
  );
}

export default ProductDetails;
