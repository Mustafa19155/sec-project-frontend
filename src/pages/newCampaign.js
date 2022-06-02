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

function Campaign() {
  const dispatch = useDispatch();

  const [campaignName, setcampaignName] = useState("");
  const [mapName, setmapName] = useState("");
  const [characterName, setcharacterName] = useState("");
  const [submitClicked, setsubmitClicked] = useState(false);
  const [error, seterror] = useState(false);

  const maps = useSelector((state) => state.maps);
  const characters = useSelector((state) => state.characters);
  const user = useSelector((state) => state.user);

  let userData = JSON.parse(localStorage.getItem("validation"));

  const history = useHistory();

  const startCampaign = () => {
    if (campaignName != "" && mapName != "" && characterName != "") {
      setsubmitClicked(true);
      axios({
        headers: {
          "auth-token": userData.authToken,
        },
        method: "post",
        url: "http://localhost:8080/campaign/addCampaign",
        data: {
          name: campaignName,
          character: characterName,
          map: mapName,
          startedBy: user.name,
          progress: 0,
        },
      })
        .then((res) => {
          history.push("/campaign");
        })
        .catch((err) => {
          seterror(true);
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
            Start New Campaign
          </Typography>
        </Box>
        {error && (
          <Typography variant="h6" sx={{ color: "red", textAlign: "center" }}>
            Invalid Auth Token
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
                <Typography className={classes.btnText} variant="h4">
                  Select Map
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.dropdown}>
                  <InputLabel id="map-select-label" sx={{ color: "white" }}>
                    Map
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="map-select-input"
                    label="Map"
                    sx={{ color: "white" }}
                    onChange={(e) => {
                      setmapName(e.target.value);
                      // setmapName(value);
                    }}
                  >
                    {maps.map((map) => (
                      <MenuItem value={map._id} key={map._id}>
                        {map.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              columnSpacing={10}
              sx={{ margin: "auto", marginTop: "70px" }}
            >
              <Grid item xs={12} sm={6}>
                <Typography className={classes.btnText} variant="h4">
                  Select Character
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.dropdown}>
                  <InputLabel
                    id="character-select-label"
                    sx={{ color: "white" }}
                  >
                    Character
                  </InputLabel>
                  <Select
                    id="charcter-select-input"
                    label="Map"
                    sx={{ color: "white" }}
                    onChange={(e) => {
                      setcharacterName(e.target.value);
                    }}
                  >
                    {characters.map((character) => (
                      <MenuItem value={character._id} key={character._id}>
                        {character.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                  onClick={startCampaign}
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
                      Create Campaign
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

export default Campaign;
