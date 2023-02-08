import React from "react";
import img from "./WINDOWS.jpg";

export default function Thumbnail() {
  return (
    <img
      alt="alt"
      prop="prop"
      style={{ border: "4px solid rgb(2, 151, 253)" }}
      src={img}
    />
  );
}
