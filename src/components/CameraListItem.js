import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import online from "./badge.png";
import offline from "./badge-off.png";
import img from "./WINDOWS.jpg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid({ selected, id, name, location, conn }) {
  return (
    <Paper
      sx={{
        p: 2,
        maxWidth: 300,
        maxHeight: 100,
        backgroundColor: (theme) => "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase
            sx={
              selected.toString() === id.toString()
                ? { width: 150, height: 80, border: "3px solid rgb(2, 151, 253)" }
                : { width: 150, height: 80 }
            }
          >
            <div className="container">
              <Img
                id={id}
                alt="complex"
                sx={{ width: 150, height: 80 }}
                src={img}
              />
              {selected.toString() === id.toString() ? (
                <div className="tag" style={{ marginTop: "37.5%" }}>
                  {" "}
                  ✓ Selected
                </div>
              ) : (
                <></>
              )}
            </div>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <b>{name}</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <font size={3} color="#33cc33">
                  {location}
                </font>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>
                  <img
                    alt="alt"
                    prop="prop"
                    src={conn === true ? online : offline}
                    width={10}
                    height={10}
                  ></img>{" "}
                  {conn === true ? (
                    <font color="#33cc33">Online</font>
                  ) : (
                    <font color="grey">Offline</font>
                  )}
                </b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
