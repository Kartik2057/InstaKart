import { api } from '../../config/apiConfig';
import {
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_SUCCESS,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_SUCCESS,
    UPDATE_PAYMENT_FAILURE,
  } from './ActionType';
  
  
  export const createPayment = (orderId) => async (dispatch) => {
    console.log("create payment reqData ",orderId)
    try {
      dispatch({
        type: CREATE_PAYMENT_REQUEST,
      });
  
    const { data } = await api.post(`/api/payments/${orderId}`,{});
    console.log("data",data)
    if(data.payment_link_url){
        window.location.href=data.payment_link_url;
    }
      dispatch({
        type: CREATE_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PAYMENT_FAILURE,
        payload: error.message,
      });
    }
  };
  



  export const updatePayment = (reqData) => {
    return async (dispatch) => {
    //   console.log("update payment reqData ",reqData)
      dispatch(updatePaymentRequest());
      try {
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${reqData.jwt}`,
        //   },
        // };
        const {data} = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("updated payment data : ",data)
        dispatch(updatePaymentSuccess(data));
      } catch (error) {
        dispatch(updatePaymentFailure(error.message));
      }
    };
  };

export const updatePaymentRequest = () => {
  return {
    type: UPDATE_PAYMENT_REQUEST,
  };
};

export const updatePaymentSuccess = (payment) => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payload: payment,
  };
};

export const updatePaymentFailure = (error) => {
  return {
    type: UPDATE_PAYMENT_FAILURE,
    payload: error,
  };
};