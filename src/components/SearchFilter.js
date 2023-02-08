import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField } from "@mui/material";

export default function SearchFilter() {
  return (
    <div style={{marginTop: 15}}>
      <SearchIcon
        fontSize="large"
        style={{ color: "rgb(2, 151, 253)", marginRight: 25 }}
      />
      <TextField
        id="datetime-local"
        label="Start Time"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <ArrowForwardIcon
        fontSize="large"
        style={{ color: "rgb(2, 151, 253)", marginRight: 12, marginLeft: 12 }}
      />
      <TextField
        id="datetime-local"
        label="End Time"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
