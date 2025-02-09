import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingComponent = () => {
  return (
    <Box
      className="dark:opacity-60"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#38bdf8"
    >
      <CircularProgress size={80} sx={{ color: "#fdba74" }} />
      <h1 className="text-orange-300 text-4xl font-bold ml-4">
        {" "}
        Loading Data...
      </h1>
    </Box>
  );
};

export default LoadingComponent;
