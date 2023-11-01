import React from 'react'
import AddressCard from '../components/checkout/AddressCard'
import { Box, Button, Grid, Typography } from "@mui/material";
import OrderTracker from '../components/checkout/OrderTracker';
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";

const OrderDetailPage = () => {
    return (
        <div className=" px-2 lg:px-36 space-y-7 ">
            <Grid container className="p-3 shadow-lg">
                <Grid xs={12}>
                    <p className="font-bold text-lg py-2">Delivery Address</p>
                </Grid>
                <Grid item xs={6}>
                    <AddressCard />
                </Grid>
            </Grid>
            <Box className="p-5 shadow-lg border rounded-md">
                <Grid
                    container
                    sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                    <Grid item xs={9}>
                        <OrderTracker activeStep={3} />
                    </Grid>
                </Grid>
            </Box>
            <Grid container className="space-y-5">
                {[1,1,1,1].map((item)=>
                <Grid container item
                    className="shadow-xl rounded-md p-5 border"
                    sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        {" "}
                        <div className="flex  items-center">
                            <img
                                className="w-[5rem] h-[5rem] object-cover object-top"
                                src="https://ae01.alicdn.com/kf/HTB1uTOKKFXXXXX4XVXXq6xXFXXXc/ED-F33-1-Luxury-Crystal-Women-Evening-Dress-India-Crystal-Sari-Indian-Women-Crystal-Sari-India.jpg"
                                alt=""
                            />
                            <div className="ml-5 space-y-2">
                                <p className="">Saaree</p>
                                <p className="opacity-50 text-xs font-semibold space-x-5">
                                    <span>Color: pink</span> <span>Size: M</span>
                                </p>
                                <p>Seller: Mehandiratta</p>
                                <p>₹300 </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        {
                            <Box
                                sx={{ color: deepPurple[500], fontSize:"1rem" }}
                                className="flex items-center cursor-pointer"
                            >
                                <StarIcon
                                    sx={{ fontSize: "3rem" }}
                                    className="px-2 text-5xl"
                                />
                                <span>Rate & Review Product</span>
                            </Box>
                        }
                    </Grid>
                </Grid>)}
                
            </Grid>
        </div>
    )
}

export default OrderDetailPage
