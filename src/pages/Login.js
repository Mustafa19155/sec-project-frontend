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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";
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
    // color: "#27AB55",
    paddingBottom: "2vw",
    textAlign: "center",
  },
  form: {
    padding: "0 4vw",
    [theme.breakpoints.down("md")]: {
      padding: "0 0",
    },
  },
  FormGroup: {
    marginBottom: "1vw",
    // color: "#27AB55",
  },
  mainDiv: {
    marginTop: "20vh",
  },
}));

function Login() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const history = useHistory();

  const [showPass, setshowPass] = useState(false);
  const [submitError, setsubmitError] = useState("");
  const [submitClicked, setsubmitClicked] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().min(3).required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setsubmitClicked(true);
      axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/user/login`,
        data: {
          email: values.email,
          password: values.password,
        },
      })
        .then((res) => {
          setTimeout(() => {
            setsubmitClicked(false);
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
            setsubmitError("Invalid username or password");
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
          <Grid item xs={6} py={5}>
            <Typography variant="h3" className={classes.welcomBack}>
              Welcome Back!
            </Typography>
            {submitError && (
              <Typography
                variant="h6"
                sx={{ color: "red", textAlign: "center" }}
              >
                {submitError}
              </Typography>
            )}
            <FormikProvider value={formik}>
              <Form color="#27AB55" className={classes.form}>
                <FormGroup className={classes.FormGroup}>
                  <Typography variant="h5">Email</Typography>
                  <TextField
                    fullWidth
                    id="email"
                    autoComplete="email"
                    // autoFocus
                    // label="joe@gmail.com"
                    placeholder="joe@gmail.com"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </FormGroup>
                <FormGroup className={classes.FormGroup}>
                  <Typography variant="h5">Password</Typography>
                  <TextField
                    fullWidth
                    id="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    // label="Enter your password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
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
                <FormGroup>
                  <Button
                    type="submit"
                    fullWidth
                    // variant="contained"
                    sx={{
                      background:
                        "linear-gradient(90.87deg, #9A4DFF -41.78%, #5EEBFF 100%)",
                      boxShadow:
                        "0px 6.38462px 31.9231px rgba(98, 226, 255, 0.5)",
                      borderRadius: "25.5385px",
                      marginTop: "3vw",
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
                      <Typography variant="span">Login</Typography>
                    )}
                  </Button>
                </FormGroup>
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "2vw",
                    color: "black",
                    // color: "#27AB55",
                  }}
                >
                  Dont have an account?
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Sign up
                  </Link>
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

export default Login;
