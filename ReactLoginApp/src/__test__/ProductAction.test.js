import { allProducts } from "../redux/actions/ProductActions";
import { ActionTypes } from "../redux/contents/ActionTypes";
describe("actions", () => {
  it("should create an action to get products", () => {
    const products = [];
    const expectedAction = {
      type: ActionTypes.DISPLAY_PRODUCTS,
      payload: products,
    };
    expect(allProducts(products)).toEqual(expectedAction);
  });
  it("should create an action to select product", () => {
    const expectedAction = {
      type: ActionTypes.DISPLAY_PRODUCTS,
      payload: 1,
    };
    expect(allProducts(1)).toEqual(expectedAction);
  });
});
