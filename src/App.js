import { Grid, Input, NativeSelect, Paper } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import CameraListItem from "./components/CameraListItem";
import SearchFilter from "./components/SearchFilter";
import Thumbnails from "./components/Thumbnails";

import { getCameras } from "./actions/action";

function App() {
  const dispatch = useDispatch();
  const [id, setID] = useState("-1");
  const cameras = useSelector((state) => state.camera.cameras);
  useState(() => {
    dispatch(getCameras());
  }, []);
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div style={{ marginLeft: "10%" }}>
            <Paper
              sx={{
                paddingLeft: 2,
                paddingTop: 2,
                maxWidth: 300,
                maxHeight: 100,
                backgroundColor: (theme) => "#fff",
              }}
            >
              <Input placeholder="Search" />{" "}
              <NativeSelect>
                <option>Califonia</option>
              </NativeSelect>
            </Paper>
            {cameras.map((item) => {
              return (
                <div key={item.id} onClick={(e) => setID(e.target.id)}>
                  <CameraListItem
                    selected={id}
                    id={item.id}
                    name={item.name}
                    location={item.location}
                    conn={item.conn}
                  />
                </div>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={9}>
          <SearchFilter />
          <Thumbnails />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
