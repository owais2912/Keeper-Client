import React, { useState } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import Avatar from "@mui/material/Avatar";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  let authenticated = localStorage.getItem("user-data");
  authenticated = JSON.parse(authenticated);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    handleClose();
  };
  const openProfile = () => {
    navigate("/profile");
    handleClose();
  };
  return (
    <div className="header">
      <h1>
        {" "}
        <HighlightIcon />
        Keeper
      </h1>
      <div>
        <p className="welcome-text">{`Welcome, ${
          authenticated && authenticated.fname
        }`}</p>
        <IconButton onClick={handleClick}>
          <Avatar alt="User Avatar" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={openProfile}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
