import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  welcomeHeading: {},
  tableCell: {
    color: "white",
  },
  mainBtn: {
    background: "linear-gradient(90.87deg, #9A4DFF -41.78%, #5EEBFF 100%)",
    borderRadius: "25.5385px",
    width: "30%",
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

export default function ViewCampaigns() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const campaigns = useSelector((state) => state.campaigns);

  return (
    <Box sx={{ margin: "auto", textAlign: "center" }}>
      <TableContainer
        sx={{ width: "80vw", margin: "auto", marginBottom: "100px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              background:
                "linear-gradient(90.87deg, #9A4DFF -41.78%, #5EEBFF 100%)",
            }}
          >
            <TableRow>
              {/* <TableCell sx={{ border: 0, color: "white" }}>ID</TableCell> */}
              <TableCell sx={{ border: 0, color: "white" }} align="left">
                Name
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }} align="right">
                Character
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }} align="right">
                Map
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }} align="right">
                Progress
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {campaigns.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell
                  component="th"
                  scope="row"
                  sx={{ border: 0, color: "white" }}
                >
                  {row._id}
                </TableCell> */}
                <TableCell sx={{ border: 0, color: "white" }} align="left">
                  {row.name}
                </TableCell>
                <TableCell sx={{ border: 0, color: "white" }} align="right">
                  {row.character}
                </TableCell>
                <TableCell sx={{ border: 0, color: "white" }} align="right">
                  {row.map}
                </TableCell>
                <TableCell sx={{ border: 0, color: "white" }} x align="right">
                  {row.progress} %
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </Box>
  );
}
