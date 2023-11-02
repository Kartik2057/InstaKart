import { Grid, Box } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`)}>
            <Box className="p-5 shadow-lg hover:shadow-2xl border ">
                <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className='flex cursor-pointer'>
                            <img className="w-[5rem] h-[5rem] object-cover object-top"
                                src='https://ae01.alicdn.com/kf/HTB1uTOKKFXXXXX4XVXXq6xXFXXXc/ED-F33-1-Luxury-Crystal-Women-Evening-Dress-India-Crystal-Sari-Indian-Women-Crystal-Sari-India.jpg' />
                            <div className="ml-5 space-y-2">
                                <p className="mb-2">Title</p>
                                <p className="opacity-50 text-xs font-semibold space-x-5">
                                    <span>Size: M</span>
                                </p>
                                <p className="opacity-50 text-xs font-semibold space-x-5">
                                    <span>Color:Black</span>
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <p>₹300</p>
                    </Grid>
                    <Grid item xs={4}>
                        {true && <p>
                            <FiberManualRecordIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>
                                Delivered on March 3
                            </span>
                        </p>}
                        {false && <p>
                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>
                                Expected delivery on March 3
                            </span>
                        </p>}
                        <p className="text-xs">Your Item Has Been Delivered</p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default OrderCard
