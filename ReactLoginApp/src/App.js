import "./App.css";
import ProductList from "./components/products/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import ProductsCategory from "./components/products/ProductsCategory";
import Cart from "./components/newUserCart/Cart";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserCart from "./components/existinguserCart/UsersCart";
import AddProducts from "./components/products/AddProducts";
import EditProduct from "./components/products/EditProduct";
import Sort from "./components/sorting/Sort";
import ProtectedRoutes from "./components/ProtectedRoutes";
import WishList from "./components/wishList/WishList";
import CheckOut from "./components/checkOut/CheckOut";
import UsersPage from "./components/usersData/UsersPage";
import EditUser from "./components/usersData/EditUser";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/usersPage" element={<UsersPage />} />
          <Route path="/editUser/:userId" element={<EditUser />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/productList" element={<ProductList />} />
            <Route
              path="/productList/productDetails/:productId"
              element={<ProductDetails />}
            />

            <Route
              path="/productList/productsCategory/:category"
              element={<ProductsCategory />}
            />
            <Route
              path="/productsCategory/productDetails/:productId"
              element={<ProductDetails />}
            />

            <Route path="/cart" element={<Cart />} />
            <Route path="/usersCart" element={<UserCart />} />
            <Route path="/addProducts" element={<AddProducts />} />
            <Route path="/editProduct" element={<EditProduct />} />
            <Route path="/sort" element={<Sort />} />
            <Route
              path="/sort/productDetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="/wishList" element={<WishList />} />
            <Route
              path="/WishList/productDetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="/checkOut" element={<CheckOut />} />
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
