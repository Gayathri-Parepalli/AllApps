import { ActionTypes } from "../contents/ActionTypes";
import fakeStoreApi from "../../apis/FakeStoreApi";

// export const fetchProducts = () => async (dispatch) => {
//   const response = await fakeStoreApi.get("/products");
//   dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
// };

export const allProducts = (products) => {
  return {
    type: ActionTypes.DISPLAY_PRODUCTS,
    payload: products,
  };
};
export const selectProducts = (id) => {
  return {
    type: ActionTypes.SELECT_PRODUCT,
    payload: id,
  };
};

export const priceLowToHigh = (data) => {
  return {
    type: ActionTypes.PRICE_LOW_TO_HIGH,
    payload: data,
  };
};
export const priceHighToLow = (data) => {
  return {
    type: ActionTypes.PRICE_HIGH_TO_LOW,
    payload: data,
  };
};
export const ratingLowToHigh = (data) => {
  return {
    type: ActionTypes.RATING_LOW_TO_HIGH,
    payload: data,
  };
};
export const ratingHighToLow = (data) => {
  return {
    type: ActionTypes.RATING_HIGH_TO_LOW,
    payload: data,
  };
};
export const productCategory = (category) => {
  return {
    type: ActionTypes.FILTER_PRODUCT,
    payload: category,
  };
};
export const removeProductCategory = () => {
  return {
    type: ActionTypes.REMOVE_FILTER_PRODUCT,
  };
};
export const removeProductDetails = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_DETAILS,
  };
};
export const addToCart = (product) => {
  return {
    type: ActionTypes.ADDTOCART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: ActionTypes.REMOVEFROMCART,
    payload: product,
  };
};
export const deleteFromCart = (product) => {
  return {
    type: ActionTypes.REMOVEFROMCART,
    payload: product,
  };
};
export const userExistsAlready = (user) => {
  return {
    type: ActionTypes.USEREXISTS,
    payload: user,
  };
};

export const userCart = (data) => {
  return {
    type: ActionTypes.USERCART,
    payload: data,
  };
};
export const userCartProducts = (data) => {
  return {
    type: ActionTypes.USERPRODUCTS,
    payload: data,
  };
};
export const addToUserCart = (product) => {
  return {
    type: ActionTypes.ADDTOUSERCART,
    payload: product,
  };
};
export const deleteFromUserCart = (product) => {
  return {
    type: ActionTypes.REMOVEFROMUSERCART,
    payload: product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id,
  };
};

export const addProduct = (data) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: data,
  };
};

export const editProduct = (data) => {
  return {
    type: ActionTypes.EDIT_PRODUCT,
    payload: data,
  };
};
export const searchData = (data) => {
  return {
    type: ActionTypes.SEARCH_PRODUCT,
    payload: data,
  };
};

export const removeExistingCart = () => {
  return {
    type: ActionTypes.REMOVEEXISTINGCART,
  };
};
export const removeExistingUserCart = () => {
  return {
    type: ActionTypes.REMOVEEXISTINGUSERCART,
  };
};
export const removeExistingUserDetails = () => {
  return {
    type: ActionTypes.REMOVEEXISTINGUSER,
  };
};
export const removeExistingUsercartDetails = () => {
  return {
    type: ActionTypes.REMOVEEXISTINGUSERCARTDETAILS,
  };
};
export const favProduct = (data) => {
  return {
    type: ActionTypes.FAVPRODUCT,
    payload: data,
  };
};
export const removeFavProduct = () => {
  return {
    type: ActionTypes.REMOVEFAVPRODUCT,
  };
};
export const removeProducts = () => {
  return {
    type: ActionTypes.REMOVE_DISPLAY_PRODUCTS,
  };
};

export const shippingAddress = (address) => {
  return {
    type: ActionTypes.SHIPPING_ADDRESS,
    payload: address,
  };
};
export const cardDetails = (details) => {
  return {
    type: ActionTypes.CARD_DETAILS,
    payload: details,
  };
};
export const removeShippingAddress = () => {
  return {
    type: ActionTypes.REMOVE_SHIPPING_ADDRESS,
  };
};
export const removeCardDetails = () => {
  return {
    type: ActionTypes.REMOVE_CARD_DETAILS,
  };
};
export const removeSortedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SORTED_PRODUCTS,
  };
};
export const editUserData = (data) => {
  return {
    type: ActionTypes.EDIT_USER,
    payload: data,
  };
};
export const allUsersData = (data) => {
  return {
    type: ActionTypes.All_USERS,
    payload: data,
  };
};
export const editedData = (data) => {
  return {
    type: ActionTypes.EDITED_DATA,
    payload: data,
  };
};
export const deleteUserData = (id) => {
  return {
    type: ActionTypes.DELETE_USERS,
    payload: id,
  };
};
