import { ActionTypes } from "../contents/ActionTypes";

const initialState = {
  products: [],
  cart: [],
  userExists: [],
  userCart: [],
  editProduct: {},
  sortedProducts: [],
  userCartProducts: [],
  favProduct: [],
  searchData: [],
  shippingAddress: {},
  cardDetails: {},
  editUser: {},
  allUsers: [],
};

// Product reducer
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DISPLAY_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.REMOVE_DISPLAY_PRODUCTS:
      return { ...state, products: [] };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((val) => val.id !== payload),
      };
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case ActionTypes.SEARCH_PRODUCT:
      return {
        ...state,
        products: state.products.filter((val) =>
          val.title.toUpperCase().includes(payload.toUpperCase())
        ),
      };
    default:
      return state;
  }
};

// Sorting products based on rating and price
export const sortedProducts = (
  state = initialState.sortedProducts,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.PRICE_LOW_TO_HIGH:
      return [
        payload.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)),
      ];
    case ActionTypes.PRICE_HIGH_TO_LOW:
      return [
        payload.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)),
      ];
    case ActionTypes.RATING_LOW_TO_HIGH:
      return [
        payload.sort(
          (a, b) => parseFloat(a.rating.rate) - parseFloat(b.rating.rate)
        ),
      ];
    case ActionTypes.RATING_HIGH_TO_LOW:
      return [
        payload.sort(
          (a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate)
        ),
      ];
    case ActionTypes.REMOVE_SORTED_PRODUCTS:
      return [];
    default:
      return state;
  }
};

// user details reducer
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_PRODUCT_DETAILS:
      return {};
    default:
      return state;
  }
};

// filter based on category reducer
export const filterProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.FILTER_PRODUCT:
      return { ...state, products: payload };
    case ActionTypes.REMOVE_FILTER_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const editProductReducer = (
  state = initialState.editProduct,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.EDIT_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
//Add  and remove product to cart reducer(for new user)
export const addToCartReducer = (
  state = initialState.cart,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADDTOCART:
      const exist = state.find((product) => product.id === payload.id);
      if (exist) {
        return state.map((product) =>
          product.id === payload.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      } else {
        console.log("data");
        return [
          ...state,
          {
            ...payload,
            qty: 1,
          },
        ];
      }

    case ActionTypes.REMOVEFROMCART:
      const productExist = state.find((product) => product.id === payload.id);
      if (productExist.qty === 1) {
        return state.filter((product) => product.id !== payload.id);
      } else {
        return state.map((product) =>
          product.id === payload.id
            ? { ...product, qty: product.qty - 1 }
            : product
        );
      }
    case ActionTypes.REMOVEEXISTINGCART:
      return (state = []);
    default:
      return state;
  }
};
//Reducer to find user exists or not
export const userExists = (
  state = initialState.userExists,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.USEREXISTS:
      return [payload];
    case ActionTypes.REMOVEEXISTINGUSER:
      return (state = []);
    default:
      return state;
  }
};
//user Cart products reducer
export const userCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USERCART:
      return { ...state, userCart: payload };
    case ActionTypes.REMOVEEXISTINGUSERCARTDETAILS:
      return (state.userCart = []);
    default:
      return state;
  }
};
//Add  and remove product to cart reducer(for existing user) and display userCart
export const userCartProducts = (
  state = initialState.userCartProducts,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.USERPRODUCTS:
      return [...state, payload];
    case ActionTypes.ADDTOUSERCART:
      const exist = state.find(
        (product) => product.productId === payload.productId
      );
      if (exist) {
        return state.map((product) =>
          product.productId === payload.productId &&
          product.product.date === payload.product.date
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return state;
      }
    case ActionTypes.REMOVEEXISTINGUSERCART:
      return (state = []);
    case ActionTypes.REMOVEFROMUSERCART:
      const productExist = state.find(
        (product) => product.productId === payload.productId
      );
      if (productExist.quantity === 1) {
        return state.filter(
          (product) => product.productId !== payload.productId
        );
      } else {
        return state.map((product) =>
          product.productId === payload.productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }
    default:
      return state;
  }
};
//fav product reducer
export const favProductReducer = (
  state = initialState.favProduct,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FAVPRODUCT:
      return [...payload.filter((val) => val.fav === true)];
    case ActionTypes.REMOVEFAVPRODUCT:
      return [];
    default:
      return state;
  }
};

export const shippingAddress = (
  state = initialState.shippingAddress,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SHIPPING_ADDRESS:
      return payload;
    case ActionTypes.REMOVE_SHIPPING_ADDRESS:
      return {};
    default:
      return state;
  }
};

export const cardDetails = (
  state = initialState.cardDetails,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.CARD_DETAILS:
      return payload;
    case ActionTypes.REMOVE_CARD_DETAILS:
      return {};
    default:
      return state;
  }
};
// edit user reducer
export const edituser = (state = initialState.editUser, { type, payload }) => {
  switch (type) {
    case ActionTypes.EDIT_USER:
      return payload;
    default:
      return state;
  }
};
export const allUsers = (state = initialState.allUsers, { type, payload }) => {
  switch (type) {
    case ActionTypes.All_USERS:
      return payload;
    case ActionTypes.DELETE_USERS:
      return state.filter((val) => val.id !== payload);
    case ActionTypes.EDITED_DATA:
      return state.map((val) => {
        if (val.id == payload.id) {
          return (val = payload);
        } else {
          return val;
        }
      });

    default:
      return state;
  }
};
