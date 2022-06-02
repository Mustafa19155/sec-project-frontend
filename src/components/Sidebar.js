import React, { useEffect, useState } from "react";
import {
  styled,
  Box,
  List,
  CssBaseline,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import {
  Inbox,
  Menu,
  Mail,
  Home,
  Logout,
  Close,
  CheckCircleOutline,
  CheckCircle,
  Pending,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link, useHistory } from "react-router-dom";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

// const DrawerHeader = styled("div")(({ theme }) => ({}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const useStyles = makeStyles((theme) => ({
  activeLink: {
    backgroundColor: "white",
    borderRadius: "35px 0px 0px 35px",
    color: "#27AB55",
  },
  activeSidebarIcon: {
    color: "#27AB55",
  },
  sidebarIcon: {
    color: "white",
  },
  sidebarTitleShow: {
    opacity: 1,
    // transform: "translateY(-30px)",
    transform: "translate(-80px,-30px)",
    paddingBottom: "30px",
    color: "white",
  },
  sidebarTitleHide: {
    paddingBottom: "30px",
    opacity: 0,
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [activeLink, setactiveLink] = useState("/");

  const history = useHistory();

  useEffect(() => {
    history.listen((location, action) => {
      setactiveLink(location.pathname);
    });
  }, [history.location.pathname]);
  return (
    <Box>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            bgcolor: "#27AB55",
            textAlign: "center",
            paddingLeft: "20px",
            paddingTop: "20px",
          }}
        >
          {!open ? (
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                color: "white",
              }}
            >
              <Menu />
            </IconButton>
          ) : (
            <IconButton
              sx={{ marginLeft: "240px" }}
              onClick={handleDrawerClose}
            >
              <Close
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          )}
          <Typography
            variant="h6"
            className={
              open ? classes.sidebarTitleShow : classes.sidebarTitleHide
            }
          >
            Dashboard
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100vh",
            bgcolor: "#27AB55",
            paddingLeft: "10px",
          }}
        >
          <List
            sx={{
              bgcolor: "#27AB55",
              color: "white",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <ListItem
                button={activeLink == "/" && false}
                className={activeLink == "/" && classes.activeLink}
              >
                <ListItemIcon>
                  <Home
                    className={
                      activeLink == "/"
                        ? classes.activeSidebarIcon
                        : classes.sidebarIcon
                    }
                  />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
            <Link
              to="/productListing"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ListItem
                button={activeLink == "/productListing" && false}
                className={
                  activeLink == "/productListing" && classes.activeLink
                }
              >
                <ListItemIcon>
                  <Inbox
                    className={
                      activeLink == "/productListing"
                        ? classes.activeSidebarIcon
                        : classes.sidebarIcon
                    }
                  />
                </ListItemIcon>
                <ListItemText>Products Listing</ListItemText>
              </ListItem>
            </Link>
            <Link
              to="/pendingShipments"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ListItem
                button={activeLink == "/pendingShipments" && false}
                className={
                  activeLink == "/pendingShipments" && classes.activeLink
                }
              >
                <ListItemIcon>
                  <Pending
                    className={
                      activeLink == "/pendingShipments"
                        ? classes.activeSidebarIcon
                        : classes.sidebarIcon
                    }
                  />
                </ListItemIcon>
                <ListItemText>Pending Shipments</ListItemText>
              </ListItem>
            </Link>
            <Link
              to="/completedShipments"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ListItem
                button={activeLink == "/completedShipments" && false}
                className={
                  activeLink == "/completedShipments" && classes.activeLink
                }
              >
                <ListItemIcon>
                  <CheckCircle
                    className={
                      activeLink == "/completedShipments"
                        ? classes.activeSidebarIcon
                        : classes.sidebarIcon
                    }
                  />
                </ListItemIcon>
                <ListItemText>Completed Shipments</ListItemText>
              </ListItem>
            </Link>
          </List>

          <List
            sx={{
              bgcolor: "#27AB55",
              color: "white",
              // height: "100vh",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "space-evenly",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <Logout className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
