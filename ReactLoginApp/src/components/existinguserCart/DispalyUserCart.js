import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CardActions from "@mui/material/CardActions";
import { useSelector, useDispatch } from "react-redux";
import MyAppBar from "../MyAppBar";
import {
  addToUserCart,
  deleteFromUserCart,
} from "../../redux/actions/ProductActions";
import ProceedToCheck from "../ProceedToCheck";
const DispalyUserCart = (isLoading) => {
  const userCartProducts = useSelector((state) => state.userCartProducts);
  const dispatch = useDispatch();
  const addProductToCart = (data) => {
    console.log(data);
    dispatch(addToUserCart(data));
  };
  const removeProductFromCart = (data) => {
    console.log(data);
    dispatch(deleteFromUserCart(data));
  };
  return (
    <div>
      <div>
        <MyAppBar />
        {userCartProducts.length > 0 ? (
          userCartProducts.map((val, index) => (
            <Card sx={{ display: "flex" }} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 5,
                  pb: 10,
                  pt: 10,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 200, maxHeight: 200 }}
                  image={val.product.image}
                  alt={val.product.title}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  pl: 10,
                  pt: 10,
                }}
              >
                <CardContent>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    style={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    date:{val.date}
                  </Typography>

                  <Typography
                    component="div"
                    variant="subtitle1"
                    style={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    {val.product.category}
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    style={{ textAlign: "left", fontSize: "20pt" }}
                  >
                    {val.product.title}
                  </Typography>

                  <Typography
                    component="div"
                    variant="subtitle1"
                    style={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      fontSize: "20pt",
                      marginBottom: 10,
                    }}
                  >
                    {val.quantity} X ${val.product.price}=$
                    {val.quantity * val.product.price}
                  </Typography>
                  <CardActions
                    style={{
                      textAlign: "left",
                      textTransform: "uppercase",
                    }}
                  >
                    <IconButton onClick={() => addProductToCart(val)}>
                      <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => removeProductFromCart(val)}>
                      <RemoveIcon />
                    </IconButton>
                  </CardActions>
                </CardContent>
              </Box>
            </Card>
          ))
        ) : (
          <h1 style={{ margin: 100 }}>your cart is empty</h1>
        )}
      </div>
      {userCartProducts.length ? <ProceedToCheck /> : null}
    </div>
  );
};

export default DispalyUserCart;
