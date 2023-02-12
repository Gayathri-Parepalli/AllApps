import {
  ProductReducer,
  selectedProductReducer,
} from "../redux/reducer/ProductReducer";
import { ActionTypes } from "../redux/contents/ActionTypes";

describe("product reducers", () => {
  const state = {
    products: [],
    cart: [],
    userExists: [],
    userCart: [],
    editProduct: {},
    sortedProducts: [],
    userCartProducts: [],
  };
  const state1 = {
    category: "men's clothing",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 2,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.3,
    rating: { rate: 4.1, count: 259 },
    title: "Mens Casual Premium Slim Fit T-Shirts ",
  };
  it("should return the initial state", () => {
    expect(ProductReducer(state, {})).toEqual({
      products: [],
      cart: [],
      userExists: [],
      userCart: [],
      editProduct: {},
      sortedProducts: [],
      userCartProducts: [],
    });
  });
  it("should handle select product", () => {
    expect(
      selectedProductReducer(state1, {
        type: ActionTypes.SELECT_PRODUCT,
      })
    ).toEqual({
      category: "men's clothing",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      id: 2,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
      rating: { rate: 4.1, count: 259 },
      title: "Mens Casual Premium Slim Fit T-Shirts ",
    });
  });
});
