// import React, { useState } from "react";
import { NavStyle } from "./Nav.style";

export default function Nav({setType}) {
  return (
    <NavStyle className="navBar">
      <div className="Users" onClick={() => setType("Users")}>
        Users
      </div>
      <div className="Anime" onClick={() => setType("Anime")}>
        Anime
      </div>
      <div className="Music" onClick={() => setType("Music")}>
        Music
      </div>
    </NavStyle>
  );
}
