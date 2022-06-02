import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import {
  Button,
  Container,
  FormGroup,
  Grid,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authenticatedUser } from "../redux/actions/userActions";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "92vw",
    background: "#FFFFFF",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
  },
  welcomBack: {
    paddingBottom: "2vw",
    textAlign: "center",
    // color: "#27AB55",
  },
  form: {
    padding: "0 4vw",
    [theme.breakpoints.down("md")]: {
      padding: "0 0",
    },
  },
  FormGroup: {
    marginBottom: "1vw",
  },
}));

function Register() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const [showPass, setshowPass] = useState(false);
  const [showConfirmPass, setshowConfirmPass] = useState(false);
  const [submitError, setsubmitError] = useState("");
  const [submitClicked, setsubmitClicked] = useState(false);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(3).required("Name is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().min(3).required("Password is required"),
    confirmPass: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords don't match!")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPass: "",
      remember: true,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      setsubmitClicked(true);
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/user/register`,
        data: {
          name: values.name,
          password: values.password,
          email: values.email,
        },
      })
        .then((res) => {
          setTimeout(() => {
            setsubmitClicked(false);
            values.name = "";
            values.confirmPass = "";
            values.email = "";
            values.password = "";

            localStorage.setItem(
              "validation",
              JSON.stringify({
                name: res.data.name,
                authToken: res.data.authToken,
              })
            );
          }, 500);
          localStorage.setItem(
            "validation",
            JSON.stringify({
              name: res.data.name,
              authToken: res.data.authToken,
            })
          );
          dispatch(authenticatedUser(res.data.name));
          history.replace("/dashboard");
        })
        .catch((err) => {
          setTimeout(() => {
            setsubmitClicked(false);
            setsubmitError("Email already exists try logging in");
            setTimeout(() => {
              setsubmitError("");
            }, 3000);
          }, 500);
        });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth={false} className={classes.container}>
        <Grid container columnSpacing={3}>
          <Grid
            item
            xs={6}
            sx={{
              background:
                "linear-gradient(90.87deg, #9A4DFF -41.78%, #5EEBFF 100%)",
            }}
          ></Grid>
          <Grid item xs={6} py={2}>
            <Typography variant="h3" className={classes.welcomBack}>
              Get Started Now
            </Typography>
            <FormikProvider value={formik}>
              <Form color="#27AB55" className={classes.form}>
                <FormGroup className={classes.FormGroup}>
                  <Typography variant="h5">Name</Typography>
                  <TextField
                    fullWidth
                    id="name"
                    autoComplete="email"
                    // autoFocus
                    // label="joe@gmail.com"
                    placeholder="Your name"
                    {...getFieldProps("name")}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </FormGroup>
                <FormGroup className={classes.FormGroup}>
                  <Typography variant="h5">Email</Typography>
                  <TextField
                    fullWidth
                    id="email"
                    autoComplete="email"
                    // label="joe@gmail.com"
                    placeholder="joe@gmail.com"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  {submitError && (
                    <Typography variant="h6" sx={{ color: "red" }}>
                      {submitError}
                    </Typography>
                  )}
                </FormGroup>
                <FormGroup className={classes.FormGroup}>
                  <Typography variant="h5">Password</Typography>
                  <TextField
                    fullWidth
                    id="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    type={showPass ? "text" : "password"}
                    type={showPass ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setshowPass(!showPass)}
                            edge="end"
                          >
                            {showPass ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormGroup>
                <FormGroup className={classes.FormGroup}>
                  <Typography variant="h5">Confirm Password</Typography>
                  <TextField
                    fullWidth
                    type="password"
                    id="confirmPass"
                    autoComplete="current-password"
                    placeholder="Re-enter your password"
                    {...getFieldProps("confirmPass")}
                    error={Boolean(touched.confirmPass && errors.confirmPass)}
                    helperText={touched.confirmPass && errors.confirmPass}
                    type={showConfirmPass ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setshowConfirmPass(!showConfirmPass)}
                            edge="end"
                          >
                            {showConfirmPass ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(90.87deg, #9A4DFF -41.78%, #5EEBFF 100%)",
                      boxShadow:
                        "0px 6.38462px 31.9231px rgba(98, 226, 255, 0.5)",
                      borderRadius: "25.5385px",
                      marginTop: "1.5vw",
                      color: "white",
                    }}
                  >
                    {submitClicked ? (
                      <CircularProgress
                        sx={{
                          color: "white",
                        }}
                      />
                    ) : (
                      <Typography variant="span">Signup</Typography>
                    )}
                  </Button>
                </FormGroup>
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "1vw",
                    // color: "#27AB55",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#27AB55" }}
                  >
                    Sign in
                  </Link>{" "}
                  here
                </Typography>
              </Form>
            </FormikProvider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Register;
