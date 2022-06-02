import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useHistory } from "react-router-dom";
import mainBG from "../assets/images/mainBG.png";

const useStyles = makeStyles((theme) => ({
  welcomeHeading: {},
  mainBtn: {
    background: "linear-gradient(90.87deg, #9A4DFF -41.78%, #5EEBFF 100%)",
    borderRadius: "25.5385px",
    width: "100%",
    height: "60px",
  },
  btnText: {
    color: "white",
  },
  btnDiv: {
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
}));

function Dashboard() {
  const dispatch = useDispatch();

  let userData = JSON.parse(localStorage.getItem("validation"));

  useEffect(() => {
    if (userData) {
    }
  }, []);

  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ margin: "auto", textAlign: "center" }}
          >
            <Typography className={classes.welcomeHeading} variant="h1">
              Welcome!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container columnSpacing={10} className={classes.btnDiv}>
              <Grid item xs={12} sm={6}>
                <Link to="/campaign" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    className={classes.mainBtn}
                    // fullWidth
                    // variant="contained"
                  >
                    <Typography className={classes.btnText} variant="span">
                      Campaign Mode
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to="/training" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    className={classes.mainBtn}
                    // fullWidth
                    // variant="contained"
                  >
                    <Typography className={classes.btnText} variant="span">
                      Training Mode
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid container columnSpacing={10} className={classes.btnDiv}>
              <Grid item xs={12} sm={6}>
                <Link to="/character" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    className={classes.mainBtn}
                    // fullWidth
                    // variant="contained"
                  >
                    <Typography className={classes.btnText} variant="span">
                      Character Editor
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to="/map" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    className={classes.mainBtn}
                    // fullWidth
                    // variant="contained"
                  >
                    <Typography className={classes.btnText} variant="span">
                      Map Maker
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid container columnSpacing={10} className={classes.btnDiv}>
              <Grid item xs={12} sm={6}>
                <Link to="/support" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    className={classes.mainBtn}
                    // fullWidth
                    // variant="contained"
                  >
                    <Typography className={classes.btnText} variant="span">
                      Support and Feedback
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="primary"
                  className={classes.mainBtn}
                  // fullWidth
                  // variant="contained"
                >
                  <Typography className={classes.btnText} variant="span">
                    Logout
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
