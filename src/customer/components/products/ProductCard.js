import React from 'react'
import "./ProductCard.css";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate  = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer' >
      <div className="h-[20rem]">
        <img
          className='h-full w-full object-cover object-left-top'
          src={product.imageUrl}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className='font-bold'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <div className="font-semibold">₹{product.discountedPrice}</div>
          <div className="line-through opacity-50">₹{product.price}</div>
          <div className="text-green-600 font-semibold">{product.discountPersent}% off</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
