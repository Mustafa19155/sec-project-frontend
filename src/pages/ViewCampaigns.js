import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

function ViewCampaigns() {
  const campaigns = useSelector((state) => state.campaigns);

  return <Box>viewCampaigns</Box>;
}

export default ViewCampaigns;
