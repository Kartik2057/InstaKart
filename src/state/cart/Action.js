import {api} from "../../config/apiConfig"

import {
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAILURE,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const addItemToCart = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    const { data } = await api.put(`/api/cart/add`, 
      reqData
    );
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ITEM_TO_CART_FAILURE,
      payload: error.message,
    });
  }
};


export const getCart = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_REQUEST });
    const { data } = await api.get(`/api/cart`);
    // console.log("cart ",data)
    dispatch({
      type: GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAILURE,
      payload: error.message,
    });
  }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
    try {
      dispatch({ type: REMOVE_CART_ITEM_REQUEST });
      await api.delete(`/api/cart_items/${cartItemId}`);
      console.log("removed cartItem", cartItemId);
      dispatch({
        type: REMOVE_CART_ITEM_SUCCESS,
        payload: cartItemId,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_CART_ITEM_FAILURE,
        payload: error.message,
      });
    }
  };
  
export const updateCartItem = (reqData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CART_ITEM_REQUEST });
      const { data } = await api.put(
        `/api/cart_items/${reqData.cartItemId}`,
        reqData.data
      );
      // console.log("updated cartitem ",data)
      dispatch({
        type: UPDATE_CART_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CART_ITEM_FAILURE,
        payload: error.message,
      });
    }
  };