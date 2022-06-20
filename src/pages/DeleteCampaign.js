import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  addSingleCampaign,
  deleteSingleCampaign,
} from "../redux/actions/campaignActions";

const useStyles = makeStyles((theme) => ({
  itemImg: {
    height: "50px",
  },
  dropdown: {
    width: "50%",
  },
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
  textField: {},
}));

function DeleteCampaign() {
  const dispatch = useDispatch();

  const [campaignName, setcampaignName] = useState("");
  const [submitClicked, setsubmitClicked] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  let userData = JSON.parse(localStorage.getItem("validation"));

  const history = useHistory();

  const deleteCampaign = () => {
    if (campaignName != "") {
      seterror(false);
      setsubmitClicked(true);

      axios({
        headers: {
          "auth-token": userData.authToken,
        },
        method: "delete",
        url: `${process.env.REACT_APP_BASE_URL}/campaign//deleteCampaign`,
        data: {
          campaignName: campaignName,
        },
      })
        .then((res) => {
          console.log(res);
          dispatch(deleteSingleCampaign(campaignName));
          // history.push("/campaign");
          seterror(false);
          setsuccess(true);
        })
        .catch((err) => {
          seterror(true);
          setsuccess(false);
        });
      setsubmitClicked(false);
    }
  };

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
            Delete Campaign
          </Typography>
        </Box>
        {error && (
          <Typography variant="h4" sx={{ color: "red", textAlign: "center" }}>
            Campaign Not Found
          </Typography>
        )}
        {success && (
          <Typography variant="h4" sx={{ color: "green", textAlign: "center" }}>
            Campaign Successfully Deleted
          </Typography>
        )}
        <Box>
          <form>
            <Grid
              container
              columnSpacing={10}
              sx={{ margin: "auto", marginTop: "70px" }}
            >
              <Grid item xs={12} sm={6}>
                <Typography className={classes.btnText} variant="h4">
                  Campaign Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  id="filled-hidden-label-normal"
                  placeholder="campaign name"
                  inputProps={{
                    style: { color: "white" },
                  }}
                  onChange={(e) => {
                    setcampaignName(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnSpacing={10}
              sx={{ margin: "auto", marginTop: "70px" }}
            >
              <Grid item xs={12} sm={6}>
                {/* <Link to="/campaign" style={{ textDecoration: "none" }}> */}
                <Button
                  variant="primary"
                  className={classes.mainBtn}
                  onClick={deleteCampaign}
                  // fullWidth
                  // variant="contained"
                >
                  {submitClicked ? (
                    <CircularProgress
                      sx={{
                        color: "white",
                      }}
                    />
                  ) : (
                    <Typography className={classes.btnText} variant="span">
                      Delete Campaign
                    </Typography>
                  )}
                </Button>
                {/* </Link> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to="/campaign" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    className={classes.mainBtn}
                    // fullWidth
                    // variant="contained"
                  >
                    <Typography className={classes.btnText} variant="span">
                      Back
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default DeleteCampaign;
