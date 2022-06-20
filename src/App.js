import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticatedUser } from "./redux/actions/userActions";
import Layout from "./components/Layout";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import Support from "./pages/Support";
import Map from "./pages/Map";
import Character from "./pages/Character";
import Training from "./pages/Training";
import Campaign from "./pages/Campaign";
import newCampaign from "./pages/newCampaign";
import ViewCampaigns from "./pages/ViewCampaigns";
import { addCampaign } from "./redux/actions/campaignActions";
import DeleteCampaign from "./pages/DeleteCampaign";

const useStyles = makeStyles((theme) => ({
  layout: {
    // marginLeft: "70px",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: "50px",
    },
    overflow: "hidden",
  },
}));

function App() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const user = useSelector((state) => state.user);

  let userData = JSON.parse(localStorage.getItem("validation"));

  useEffect(() => {
    if (userData) {
      dispatch(authenticatedUser(userData.name));
    }
  }, []);
  useEffect(() => {
    if (userData) {
      axios({
        headers: {
          "auth-token": userData.authToken,
        },
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/campaign/getCampaigns`,
        params: {
          startedBy: userData.name,
        },
      })
        .then((res) => {
          dispatch(addCampaign(res.data.data));
        })
        .catch((err) => {});
    }
  }, [user]);
  return (
    <Router>
      <Box sx={{ overflow: "hidden" }}>
        <Switch>
          <Route path="/" exact component={Login}>
            {userData && <Redirect to="/dashboard" />}
          </Route>
          <Route path="/register" component={Register}>
            {userData && <Redirect to="/dashboard" />}
          </Route>
          <Box className={classes.layout}>
            <Layout>
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <ProtectedRoute path="/campaign" component={Campaign} />
              <ProtectedRoute path="/training" component={Training} />
              <ProtectedRoute path="/character" component={Character} />
              <ProtectedRoute path="/map" component={Map} />
              <ProtectedRoute path="/support" component={Support} />
              <ProtectedRoute
                path="/startNewCampaign"
                component={newCampaign}
              />
              <ProtectedRoute path="/viewCampaigns" component={ViewCampaigns} />
              <ProtectedRoute
                path="/deleteCampaign"
                component={DeleteCampaign}
              />
            </Layout>
          </Box>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
