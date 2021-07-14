import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userService, alertService } from "../services";
import { Box, Typography, Select, MenuItem, Button } from "@material-ui/core";

function AddEdit({ history, match }) {
  const { id } = match.params;
  const isAddMode = !id;

  // form validation rules
  const validationSchema = Yup.object().shape({
    // title: Yup.string().required("Title is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .transform((x) => (x === "" ? undefined : x))
      .concat(isAddMode ? Yup.string().required("Password is required") : null)
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .transform((x) => (x === "" ? undefined : x))
      .when("password", (password, schema) => {
        if (password || isAddMode)
          return schema.required("Confirm Password is required");
      })
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    errors,
    formState,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    return isAddMode ? createUser(data) : updateUser(id, data);
  }

  function createUser(data) {
    return userService
      .create(data)
      .then(() => {
        alertService.success("Router added to blacklist", {
          keepAfterRouteChange: true,
        });
        history.push(".");
      })
      .catch(alertService.error);
  }

  function updateUser(id, data) {
    return userService
      .update(id, data)
      .then(() => {
        alertService.success("Blacklist updated", {
          keepAfterRouteChange: true,
        });
        history.push("..");
      })
      .catch(alertService.error);
  }

  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      userService.getById(id).then((user) => {
        const fields = ["label", "firstName", "lastName", "email", "role"];
        fields.forEach((field) => setValue(field, user[field]));
        setUser(user);
      });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <Typography variant="h2">
        {isAddMode ? "Add router to blacklist" : "Edit blacklist"}
      </Typography>
      <Box className="form-row">
        <Box className="form-group col">
          <label>Label</label>
          <Select
            name="title"
            ref={register}
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Mr">Huawei</MenuItem>
            <MenuItem value="Mrs">Xiomi</MenuItem>
          </Select>
          <Box className="invalid-feedback">{errors.title?.message}</Box>
        </Box>
        <Box className="form-group col-5">
          <label>Owner Name</label>
          <input
            name="firstName"
            type="text"
            ref={register}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          />
          <Box className="invalid-feedback">{errors.firstName?.message}</Box>
        </Box>
        <Box className="form-group col-5">
          <label>Owner Sername</label>
          <input
            name="lastName"
            type="text"
            ref={register}
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          />
          <Box className="invalid-feedback">{errors.lastName?.message}</Box>
        </Box>
      </Box>
      <Box className="form-row">
        <Box className="form-group col-7">
          <label>Owner Email</label>
          <input
            name="email"
            type="text"
            ref={register}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <Box className="invalid-feedback">{errors.email?.message}</Box>
        </Box>
        <Box className="form-group col">
          <label>Serial Number</label>
          <input
            name="role"
            type="text"
            ref={register}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {/* <Select
            name="role"
            ref={register}
            className={`form-control ${errors.role ? "is-invalid" : ""}`}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select> */}
          <Box className="invalid-feedback">{errors.role?.message}</Box>
        </Box>
      </Box>
      {!isAddMode && (
        <Box>
          <h3 className="pt-3">Change Password</h3>
          <p>Leave blank to keep the same password</p>
        </Box>
      )}
      <Box className="form-row">
        <Box className="form-group col">
          <label>
            Password
            {!isAddMode &&
              (!showPassword ? (
                <span>
                  {" "}
                  -{" "}
                  <a
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-primary"
                  >
                    Show
                  </a>
                </span>
              ) : (
                <em> - {user.password}</em>
              ))}
          </label>
          <input
            name="password"
            type="password"
            ref={register}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <Box className="invalid-feedback">{errors.password?.message}</Box>
        </Box>
        <Box className="form-group col">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            ref={register}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <Box className="invalid-feedback">
            {errors.confirmPassword?.message}
          </Box>
        </Box>
      </Box>
      <Box className="form-group">
        <Button
          type="submit"
          disabled={formState.isSubmitting}
          variant="contained"
          color="primary"
        >
          {formState.isSubmitting && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
          Save
        </Button>
        <Link to={isAddMode ? "." : ".."} className="btn btn-link">
          Cancel
        </Link>
      </Box>
    </form>
  );
}

export { AddEdit };
