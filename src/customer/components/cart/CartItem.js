import React from 'react'
import { Button, IconButton} from '@mui/material'
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img
            className='w-full h-full object-cover object-top' 
            src='https://i.pinimg.com/originals/1a/15/bd/1a15bd899740b1b63989470f787c9b11.jpg'
            alt=''/>
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Title</p>
          <p className="opacity-70">Size: 34</p>
          <p className="opacity-70 mt-2">Seller: Brand</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹44</p>
            <p className="font-semibold text-lg">
              ₹32
            </p>
            <p className="text-green-600 font-semibold">
              60% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton color="primary" aria-label="add an alarm">
            <RemoveCircleOutlinedIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">Quantity</span>
          <IconButton color="primary" aria-label="add an alarm">
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button variant="text">
            Remove
          </Button>
          
        </div>
      </div>
    </div>
  )
}

export default CartItem
