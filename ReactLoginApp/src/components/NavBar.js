import React, { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { searchData } from "../redux/actions/ProductActions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import {
  userCart,
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
import {
  priceLowToHigh,
  priceHighToLow,
  ratingLowToHigh,
  ratingHighToLow,
} from "../redux/actions/ProductActions";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function NavBar() {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userExists = JSON.parse(localStorage.getItem("userExists"));
  console.log(userExists);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [merged, setMerged] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlefavProducts = () => {
    navigate("/wishList");
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    textField: {
      borderBottom: "1px solid white",
      color: "white",
      width: 400,
    },
  }));
  const classes = useStyles();
  //display count for userCart
  useEffect(() => {
    if (userExists) {
      const id = userExists[0]["id"];
      axios
        .get(`https://fakestoreapi.com/carts/user/${id}`)
        .then((res) => {
          dispatch(userCart(res.data));
          console.log(res.data);
          const products = res.data.map((val) => val.products);
          console.log(products);
          const id = products.map((val) => val.map((data) => data.productId));
          console.log(id);
          setMerged([].concat.apply([], id));
          console.log(merged);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  // Sort by rating and price
  const onChange = (e) => {
    const data = JSON.parse(localStorage.getItem("products"));
    setSelectedValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "price(low to high)") {
      dispatch(priceLowToHigh(data));
      handleClose();
      navigate("/sort");
    } else if (e.target.value === "price(high to low)") {
      dispatch(priceHighToLow(data));
      handleClose();
      navigate("/sort");
    } else if (e.target.value === "rating(low to high)") {
      dispatch(ratingLowToHigh(data));
      handleClose();
      navigate("/sort");
    } else if (e.target.value === "rating(high to low)") {
      dispatch(ratingHighToLow(data));
      handleClose();
      navigate("/sort");
    }
  };

  const handleClick = () => {
    if (userExists) {
      console.log(userExists);
      navigate("/usersCart");
    } else {
      navigate("/cart");
    }
  };
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    dispatch(searchData(search));
  };
  const handleLogOut = () => {
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
    <Box sx={{ flexGrow: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>

          <InputBase
            placeholder="type to search"
            variant="standard"
            value={search}
            onChange={onChangeHandler}
            className={classes.textField}
            inputProps={{ "aria-label": "search" }}
            endAdornment={<SearchIcon />}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate("/addProducts")}>
              Add Product
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => handleClick()}
              color="inherit"
              endIcon={<ShoppingCartIcon />}
            >
              {userExists ? merged.length : cart.length}
            </Button>
          </Typography>
          <Button
            color="inherit"
            onClick={handleClickOpen}
            sx={{ flexGrow: 1 }}
          >
            {<ArrowUpwardIcon />}
            {<ArrowDownwardIcon />}
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sort</FormLabel>
                <RadioGroup aria-label="sort" name="radio-buttons-group">
                  <FormControlLabel
                    checked={selectedValue === "price(low to high)"}
                    value="price(low to high)"
                    control={<Radio />}
                    label="price(low to high)"
                    onChange={onChange}
                  />
                  <FormControlLabel
                    checked={selectedValue === "price(high to low)"}
                    value="price(high to low)"
                    control={<Radio />}
                    label="price(high to low)"
                    onChange={onChange}
                  />
                  <FormControlLabel
                    checked={selectedValue === "rating(low to high)"}
                    value="rating(low to high)"
                    control={<Radio />}
                    label="rating(low to high)"
                    onChange={onChange}
                  />
                  <FormControlLabel
                    checked={selectedValue === "rating(high to low)"}
                    value="rating(high to low)"
                    control={<Radio />}
                    label="rating(high to low)"
                    onChange={onChange}
                  />
                </RadioGroup>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
          <Button
            color="inherit"
            onClick={handlefavProducts}
            sx={{ flexGrow: 1, marginLeft: "2%" }}
          >
            <FavoriteBorderIcon style={{ color: "white" }} />
          </Button>
          <Button
            color="inherit"
            onClick={handleLogOut}
            sx={{ flexGrow: 1, marginLeft: "2%" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
