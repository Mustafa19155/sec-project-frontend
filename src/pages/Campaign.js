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
  mainBtn: {
    background: "linear-gradient(90.87deg, #9A4DFF -41.78%, #5EEBFF 100%)",
    borderRadius: "25.5385px",
    width: "70%",
    height: "60px",
  },
  btnText: {
    color: "white",
  },
}));

function Campaign() {
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
            Campaign Mode
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            columnSpacing={10}
            sx={{ margin: "auto", marginTop: "70px" }}
          >
            <Grid item xs={12} sm={6}>
              <Link to="/startNewCampaign" style={{ textDecoration: "none" }}>
                <Button
                  variant="primary"
                  className={classes.mainBtn}
                  // fullWidth
                  // variant="contained"
                >
                  <Typography className={classes.btnText} variant="span">
                    Start New Campaign
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
                    Continue Campaign
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={10}
            sx={{ margin: "auto", marginTop: "70px" }}
          >
            <Grid item xs={12} sm={6}>
              <Link to="/viewCampaigns" style={{ textDecoration: "none" }}>
                <Button
                  variant="primary"
                  className={classes.mainBtn}
                  // fullWidth
                  // variant="contained"
                >
                  <Typography className={classes.btnText} variant="span">
                    View All Campaigns
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
                    Delete Campaign
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
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
          <Grid
            container
            columnSpacing={10}
            sx={{ margin: "auto", marginTop: "70px" }}
          >
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Campaign;
