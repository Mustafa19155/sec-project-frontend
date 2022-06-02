import * as React from "react";
import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  navbarIcon: {
    color: "#27AB55",
  },
  navbarRight: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          color: "#27AB55",
          height: "60px",
          boxShadow: "none",
          borderBottom: "1px solid #27AB55",
          paddingTop: "10px",
        }}
      >
        <Toolbar variant="dense">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h4" component="div">
              Dashboard
            </Typography>

            <Box className={classes.navbarRight}>
              <IconButton>
                <Mail className={classes.navbarIcon} />
              </IconButton>

              <IconButton>
                <Notifications className={classes.navbarIcon} />
              </IconButton>

              <IconButton>
                <AccountCircle className={classes.navbarIcon} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
