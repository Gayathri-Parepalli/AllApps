import React, { useEffect, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { userCart, userCartProducts } from "../../redux/actions/ProductActions";
const DisplayUserCart = React.lazy(() => import("./DispalyUserCart"));
const UsersCart = () => {
  const dispatch = useDispatch();
  const userExists = JSON.parse(localStorage.getItem("userExists"));
  const userCart1 = useSelector((state) => state.userCart.userCart);
  const [data1, setData1] = useState([]);

  const id = userExists[0]["id"];
  const userCartProducts1 = useSelector((state) => state.userCartProducts);

  useEffect(() => {
    if (userCartProducts1.length === 0) {
      console.log(userExists, id);
      axios
        .get(`https://fakestoreapi.com/carts/user/${id}`)
        .then((res) => {
          console.log(res.data);
          dispatch(userCart(res.data));
          userCart1.map((val) =>
            val.products.map(async (id) => {
              return await axios
                .get(`https://fakestoreapi.com/products/${id.productId}`)
                .then((res) => {
                  id = { ...id, product: res.data, date: val.date };
                  console.log(res.data);
                  setData1((data1) => [...data1, id]);
                  console.log(id, userCart1, data1);
                  dispatch(userCartProducts(id));
                })
                .catch((err) => console.log(err));
            })
          );
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <DisplayUserCart />
      </Suspense>
    </div>
  );
};

export default UsersCart;
