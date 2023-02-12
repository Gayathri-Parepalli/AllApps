// import React from "react";
// import { render, screen } from "@testing-library/react";
// import ProductDetails from "../components/ProductDetails";
// import * as reactRedux from "react-redux";

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// describe("Test TargetComponent", () => {
//   const product = {
//     category: "men's clothing",
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     id: 2,
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     price: 22.3,
//     rating: { rate: 4.1, count: 259 },
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//   };
//   beforeEach(() => {
//     useDispatchMock.mockImplementation(() => () => {});
//     useSelectorMock.mockImplementation((selector) => selector(product));
//   });
//   afterEach(() => {
//     useDispatchMock.mockClear();
//     useSelectorMock.mockClear();
//   });

//   const useSelectorMock = reactRedux.useSelector;
//   const useDispatchMock = reactRedux.useDispatch;

//   it("it shows image", () => {
//     const { queryByTestId } = render(<ProductDetails />);
//     const img = queryByTestId("image");
//     expect(img.innerHTML).toBe("");
//   });
// });

import React from "react";
import { render } from "@testing-library/react";
import ProductDetails from "../components/ProductDetails";

describe("MySearchComponent", () => {
  it("it shows image", () => {
    const mockConfigState = {
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
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useSelector: jest.fn().mockReturnValueOnce(mockConfigState),
      useDispatch: jest.fn(),
    }));

    const { queryByTestId } = render(<ProductDetails />);
    const img = queryByTestId("image");
    expect(img.innerHTML).toBe("");
  });
});
