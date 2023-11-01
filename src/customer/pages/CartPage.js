import React from 'react'
import CartItem from '../components/cart/CartItem'
import { Button } from '@mui/material'

const CartPage = () => {
    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {[1,1,1,1].map((item)=><CartItem />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>₹300</span>

                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Discount</span>
                                <span className='text-green-600'>-₹100</span>

                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>

                            </div>
                            <div className='flex justify-between pt-3 text-black mb-10'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>₹300</span>
                            </div>
                            <Button
                                variant="contained"
                                type="submit"
                                className='w-full mt-5'
                                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                            >
                                Check Out
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
