import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeExistingCart,
  removeExistingUserCart,
  removeExistingUserDetails,
  removeExistingUsercartDetails,
  removeFavProduct,
  removeProducts,
  removeShippingAddress,
  removeCardDetails,
  removeSortedProducts,
} from "../redux/actions/ProductActions";
function MyAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("userExists");
    localStorage.removeItem("auth");
    localStorage.removeItem("userExists");
    dispatch(removeExistingCart());
    dispatch(removeExistingUserCart());
    dispatch(removeExistingUserDetails());
    dispatch(removeExistingUsercartDetails());
    dispatch(removeFavProduct());
    dispatch(removeProducts());
    dispatch(removeCardDetails());
    dispatch(removeShippingAddress());
    dispatch(removeSortedProducts());
    navigate("/");
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHOP
          </Typography>
          <Box display="flex" flexDirection="row" justifyContent="flex-end">
            <Button color="inherit" onClick={handleLogOut}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default MyAppBar;
