import { combineReducers } from "redux";
import {
  ProductReducer,
  selectedProductReducer,
  filterProductReducer,
  addToCartReducer,
  userExists,
  userCartReducer,
  editProductReducer,
  userCartProducts,
  favProductReducer,
  sortedProducts,
  shippingAddress,
  cardDetails,
  edituser,
  allUsers,
} from "./ProductReducer";
const reducer = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductReducer,
  filterProduct: filterProductReducer,
  cart: addToCartReducer,
  userExists: userExists,
  userCart: userCartReducer,
  editProduct: editProductReducer,
  userCartProducts: userCartProducts,
  favProduct: favProductReducer,
  sortedProducts: sortedProducts,
  shippingAddress: shippingAddress,
  cardDetails: cardDetails,
  edituser: edituser,
  allUsers: allUsers,
});
export default reducer;
