import React from "react";
import Thumbnail from "./Thumbnail";

export default function Thumbnails() {
  return (
    <div>
      <font size={30} color="blue">
        24
      </font>{" "}
      <b>Clip Segments</b>
      <br />
      <div className="flex-container">
        <Thumbnail />
      </div>
    </div>
  );
}
