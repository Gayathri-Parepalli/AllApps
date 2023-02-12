import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Home from "../Home";
import NavBar from "../NavBar";
import { useSelector, useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteProduct,
  editProduct,
  favProduct,
} from "../../redux/actions/ProductActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { allProducts } from "../../redux/actions/ProductActions";
const DisplayProducts = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts.products);
  localStorage.setItem("products", JSON.stringify(products));
  const dispatch = useDispatch();
  const handleClick = (category) => {
    navigate(`productsCategory/${category}`);
  };
  const stackStyle = {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "20%",
  };
  const deleteProduct1 = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteProduct(id));
        console.log(products);
      })
      .catch((err) => console.log(err));
  };
  const editProduct1 = (product) => {
    console.log(product);
    dispatch(editProduct(product));
    navigate("/editProduct");
  };
  const handleFav = (singleProduct, products) => {
    const data = products.map((val) => {
      if (val.id === singleProduct.id) {
        return (singleProduct = { ...singleProduct, fav: !singleProduct.fav });
      } else return val;
    });
    console.log(singleProduct, data);
    dispatch(allProducts(data));
    dispatch(favProduct(data));
  };
  return (
    <div>
      <NavBar />
      <Home />
      <Stack spacing={2} direction="row" style={stackStyle}>
        <Button
          variant="outlined"
          color="secondary"
          value="jewelery"
          onClick={() => handleClick("jewelery")}
        >
          Jewelery
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("men's clothing")}
        >
          Men's Clothing
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("women's clothing")}
        >
          Women's Clothing
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("electronics")}
        >
          Electronic
        </Button>
      </Stack>
      <Grid style={{ margin: 20 }}>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {products.map((val) => (
            <Grid xs={3} sm={3} item key={val.id}>
              <Card
                sx={{
                  width: "90%",
                  height: "100%",
                }}
              >
                <Box display="flex" flexDirection="row-reverse">
                  <IconButton onClick={() => handleFav(val, products)}>
                    {val.fav ? (
                      <FavoriteIcon style={{ color: "#FF33C1" }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Box>
                <CardActionArea>
                  <Link
                    to={`productDetails/${val.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: "90%",
                        height: "50%",
                      }}
                      image={val.image}
                      alt={val.title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {val.title}
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        ${val.price}
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        rating:{val.rating.rate}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <CardActions>
                  <IconButton onClick={() => deleteProduct1(val.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => editProduct1(val)}>
                    <EditIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default DisplayProducts;
