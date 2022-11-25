import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const navItems = ["Home", "About", "Contact"];

class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar component="nav" position="static">
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
