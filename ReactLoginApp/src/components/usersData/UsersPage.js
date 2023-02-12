import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserData,
  allUsersData,
  deleteUserData,
} from "../../redux/actions/ProductActions";
const UsersPage = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (allUsers.length === 0) {
      axios
        .get("https://fakestoreapi.com/users")
        .then((res) => {
          dispatch(allUsersData(res.data));
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  const deleteUser = (id) => {
    axios
      .delete(`https://fakestoreapi.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteUserData(id));
      })

      .catch((err) => console.log(err));
  };
  const edituser = (data) => {
    navigate(`/editUser/${data.id}`);
    dispatch(editUserData(data));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>phone No</th>
          <th>UserName</th>
          <th>Password</th>
          <th>City</th>
          <th>Zipcode</th>
          <th>delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map((list, index) => (
          <tr key={list.id}>
            <td>{index + 1}</td>
            <td>{list.name.firstname}</td>
            <td>{list.name.lastname}</td>
            <td>{list.email}</td>
            <td>{list.phone}</td>
            <td>{list.username}</td>
            <td>{list.password}</td>
            <td>{list.address.city}</td>
            <td>{list.address.zipcode}</td>
            <td>
              <button
                className="fa fa-trash"
                onClick={() => deleteUser(list.id)}
              ></button>
            </td>
            <td>
              <button
                className="fa fa-edit"
                onClick={() => edituser(list)}
              ></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersPage;
