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
  backBtn: {
    background: "linear-gradient(90.87deg, #9A4DFF -41.78%, #5EEBFF 100%)",
    borderRadius: "25.5385px",
    width: "35%",
    height: "60px",
  },
  btnText: {
    color: "white",
  },
}));

function Character() {
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
        <Box>
          <Typography
            className={classes.welcomeHeading}
            variant="h1"
            sx={{ textAlign: "center" }}
          >
            Character Editor
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              margin: "auto",
              marginTop: "70px",
              textAlign: "center",
            }}
          >
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Button variant="primary" className={classes.backBtn}>
                <Typography className={classes.btnText} variant="span">
                  Design New Character
                </Typography>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              margin: "auto",
              marginTop: "70px",
              textAlign: "center",
            }}
          >
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Button variant="primary" className={classes.backBtn}>
                <Typography className={classes.btnText} variant="span">
                  Modify Character
                </Typography>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              margin: "auto",
              marginTop: "70px",
              textAlign: "center",
            }}
          >
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Button variant="primary" className={classes.backBtn}>
                <Typography className={classes.btnText} variant="span">
                  Delete Character
                </Typography>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              margin: "auto",
              marginTop: "70px",
              textAlign: "center",
            }}
          >
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Button variant="primary" className={classes.backBtn}>
                <Typography className={classes.btnText} variant="span">
                  Back
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Character;
