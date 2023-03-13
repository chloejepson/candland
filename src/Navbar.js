/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";


import PoolIcon from '@mui/icons-material/Pool';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LiquorIcon from '@mui/icons-material/Liquor';

import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        {/* image here img import logo etc etc */}
        <a href="">
            <CakeTwoToneIcon className="navbar-cake-icon" style={{float:"left", fontSize: '55px', color: 'black'}} />
        </a>
        <p className="birthday-text" style={{float:"right"}}>Happy Birthday Ola!!</p>

      </div>

      <div className="navbar-links-container">
        {/* <a href="">Home</a> */}
        <a href="">
          <FavoriteIcon className="navbar-favorite-icon"/>
        </a>
        <a href="">
            <LiquorIcon className="navbar-favorite-icon"/>
        </a>
        <a href="">
            <PoolIcon className="navbar-favorite-icon"/>
        </a>
        <a href="">
            <CelebrationIcon className="navbar-favorite-icon"/>
        </a>
        <button className="primary-button">Contact RPI BGA</button>
      </div>
    </nav>
  );
};

export default Navbar;