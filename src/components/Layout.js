import { Box } from "@mui/system";
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import mainBG from "../assets/images/mainBG.png";

function Layout({ children }) {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${mainBG})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default Layout;
