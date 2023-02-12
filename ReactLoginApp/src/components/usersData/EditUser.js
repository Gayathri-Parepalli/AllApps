import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editedData } from "../../redux/actions/ProductActions";
import "./style.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
const EditUser = () => {
  const btnstyle = { margin: "8px 0" };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const editUser = useSelector((state) => state.edituser);
  console.log(editUser);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: editUser.name.firstname,
      lastName: editUser.name.lastname,
      email: editUser.email,
      phoneNo: editUser.phone,
      userName: editUser.username,
      password: editUser.password,
      city: editUser.address.city,
      zipCode: editUser.address.zipcode,
    },
  });

  const paperStyle = {
    padding: 20,
    height: "50vh auto",
    width: 550,
    margin: "20px auto",
  };
  const submitForm = (data) => {
    console.log(data);
    axios
      .put(`https://fakestoreapi.com/users/${userId}`, {
        email: data.email,
        username: data.userName,
        password: data.password,
        name: {
          firstname: data.firstName,
          lastname: data.lastName,
        },
        address: {
          city: data.city,
          street: "",
          zipcode: data.zipCode,
          geolocation: {},
        },
        phone: data.phoneNo,
      })
      .then((res) => {
        console.log(res.data);
        res.data = {
          ...res.data,
          name: { firstname: data.firstName, lastname: data.lastName },
          address: { ...res.data.address, zipcode: data.zipCode },
        };
        console.log(res.data);
        dispatch(editedData(res.data));
        // alert("data updated successfully");
        navigate("/UsersPage");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Edit Product</h2>
        </Grid>
        <form onSubmit={handleSubmit(submitForm)}>
          <Grid container>
            <Grid item xs={6} className="inputFieldStyle">
              <TextField
                label="firstName"
                name="firstName"
                type="text"
                fullWidth
                {...register("firstName", {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="lastName"
                name="lastName"
                type="text"
                fullWidth
                {...register("lastName", {
                  required: true,
                })}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} className="inputFieldStyle">
              <TextField
                label="email"
                name="email"
                type="text"
                fullWidth
                {...register("email", {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="phoneNo"
                name="phoneNo"
                type="text"
                fullWidth
                {...register("phoneNo", {
                  required: true,
                })}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} className="inputFieldStyle">
              <TextField
                label="userName"
                name="userName"
                type="text"
                fullWidth
                {...register("userName", {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="password"
                name="password"
                type="password"
                fullWidth
                {...register("password", {
                  required: true,
                })}
              />
            </Grid>
          </Grid>
          <TextField
            label="city"
            name="city"
            type="type"
            fullWidth
            {...register("city", {
              required: true,
            })}
          />

          <TextField
            label="zipCode"
            name="zipCode"
            type="type"
            fullWidth
            {...register("zipCode", {
              required: true,
            })}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            update
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default EditUser;
