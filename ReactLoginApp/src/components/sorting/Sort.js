import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import MyAppBar from "../MyAppBar"
const Sort = () => {
  const sortedProducts = useSelector((state) => state.sortedProducts);
  return (
    <div>
      <MyAppBar />
      <Grid style={{ margin: 20 }}>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {sortedProducts[0] ? (
            sortedProducts[0].map((val) => (
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
                          rating:{val.rating.rate}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                          ${val.price}
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <div>loading...</div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Sort;
