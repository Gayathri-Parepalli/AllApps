import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MyAppBar from "../MyAppBar";
const WishList = () => {
  const wishlist = useSelector((state) => state.favProduct);
  return (
    <div>
      <MyAppBar />
      <Grid style={{ margin: 20 }}>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {wishlist.length > 0 ? (
            wishlist.map((val) => (
              <Grid xs={3} sm={3} item key={val.id}>
                <Card
                  sx={{
                    width: "90%",
                    height: "100%",
                  }}
                >
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
                </Card>
              </Grid>
            ))
          ) : (
            <h1 style={{ margin: 100 }}>your wishlist is empty</h1>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default WishList;
