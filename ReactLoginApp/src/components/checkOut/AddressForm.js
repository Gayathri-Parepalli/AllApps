import * as React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { shippingAddress } from "../../redux/actions/ProductActions";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
const schema = yup.object().shape({
  firstName: yup.string().required("FirstName is required"),
  lastName: yup.string().required("LastName is required"),
  address1: yup.string().required("address1 is required"),
  address2: yup.string().required("address2 is required"),
  state: yup.string().required("state is required"),
  city: yup.string().required("city is required"),
});
export default function AddressForm() {
  const marginTop = { marginTop: 5 };
  const dispatch = useDispatch();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    dispatch(shippingAddress(data));
    console.log(data);
    reset();
  };

  return (
    <>
      <Grid>
        <Grid align="center">
          <Typography variant="h6" gutterBottom>
            Shipping address
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(submitForm)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                {...register("firstName", {
                  required: true,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                {...register("lastName", {
                  required: true,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                {...register("address1", {
                  required: true,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="address1"
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                {...register("address2", {
                  required: true,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="address2"
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                {...register("city", {
                  required: true,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="city"
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
                {...register("state", {
                  required: true,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="state"
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={marginTop}
          >
            submit
          </Button>
        </form>
      </Grid>
    </>
  );
}
