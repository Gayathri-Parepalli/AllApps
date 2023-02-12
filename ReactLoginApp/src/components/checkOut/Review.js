import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
export default function Review() {
  const cardDetails = useSelector((state) => state.cardDetails);
  const shippingAddress = useSelector((state) => state.shippingAddress);
  const products = useSelector((state) => state.cart);
  const price = products.map((product) => product.price * product.qty);
  const total = price.reduce((acc, num) => acc + num, 0);
  console.log(price);
  console.log(shippingAddress);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">
              {product.price}*{product.qty}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{shippingAddress.firstName}</Typography>
          <Typography gutterBottom>{shippingAddress.city}</Typography>
          <Typography gutterBottom>{shippingAddress.state}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment key={cardDetails.cardHolderName}>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {cardDetails.cardHolderName}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardDetails.cardNumber}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
