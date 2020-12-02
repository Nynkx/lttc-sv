import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const TheHeader = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => console.log(1)}
        >
          <MenuIcon />
        </IconButton>
        <Typography>Ly Tu Trong College</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TheHeader;
