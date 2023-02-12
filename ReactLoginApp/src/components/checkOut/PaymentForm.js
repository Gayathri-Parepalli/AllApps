import * as React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { cardDetails } from "../../redux/actions/ProductActions";
import MaskedInput from "react-text-mask";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
// const schema = yup.object().shape({
//   cardHolderName: yup.string().required("cardHolderName is required"),
//   cardNumber: yup.number().required("cardNumber is required"),
//    expDate: yup.number().required("expDate is required"),
//   cvv: yup.number().required("cvv is required"),
// });
export default function PaymentForm() {
  const dispatch = useDispatch();
  const marginTop = { marginTop: 5 };
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submitForm = (data) => {
    dispatch(cardDetails(data));
    console.log(data);
    reset();
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <form onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              {...register("cardHolderName", {
                required: true,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="cardHolderName"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              {...register("cardNumber", {
                required: true,
                pattern: /^([0-9]{13,16})$/,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="cardNumber"
              render={({ message }) => (
                <p style={{ color: "red" }}>Enter valid card number</p>
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="MM/YY Expire date"
              id="expDate"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              {...register("expDate", {
                required: true,
                pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="expDate"
              render={({ message }) => (
                <p style={{ color: "red" }}>Enter valid expiry date</p>
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              {...register("cvv", {
                required: true,
                pattern: /^([0-9]{3,4})$/,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="cvv"
              render={({ message }) => (
                <p style={{ color: "red" }}>
                  cvv is required and must be 3 digit number
                </p>
              )}
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={marginTop}
          >
            submit
          </Button>
        </Grid>
      </form>
    </>
  );
}
