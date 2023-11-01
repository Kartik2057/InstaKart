import React from "react";
import { Badge, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "./AddressCard";
import CartItem from "../cart/CartItem";
// import { createPayment } from "../../../Redux/Customers/Payment/Action";

const OrderSummary = () => {


    return (
        <div className="space-y-5">
            <div className="p-5 shadow-lg rounded-md border ">
                <AddressCard />
            </div>
            <div className="lg:grid grid-cols-3 relative justify-between">
                <div className="lg:col-span-2 ">
                    {[1,1,1,1].map((item)=><CartItem/>)}
                </div>
                <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
                    <div className="border p-5 bg-white shadow-lg rounded-md">
                        <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                        <hr />

                        <div className="space-y-3 font-semibold">
                            <div className="flex justify-between pt-3 text-black ">
                                <span>Price (3 item)</span>
                                <span>₹300</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span className="text-green-700">-₹30</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Charges</span>
                                <span className="text-green-700">Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total Amount</span>
                                <span className="text-green-700">₹400</span>
                            </div>
                        </div>

                        <Button
                            // onClick={handleCreatePayment}
                            variant="contained"
                            type="submit"
                            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                        >
                            Payment
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;