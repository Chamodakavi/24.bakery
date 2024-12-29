import {
  AppBar,
  Box,
  Button,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const StyledAppBar = styled(AppBar)`
  background-color: #f1970d !important;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const StyledLinkDrawer = styled(Link)`
  text-decoration: none;
  color: Black;
  margin-Left:30px;
  margin-Top:20px;
  font-Size:1.3rem;
`;

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List
            sx={{
             
              width: "50%",
            }}
          >
            <ListItem>
              <Typography fontSize={20}>Mylogo</Typography>
            </ListItem>
            <ListItem>
              <StyledLinkDrawer to="/">Home</StyledLinkDrawer>
            </ListItem>
            <ListItem>
              <StyledLinkDrawer to="/products">Products</StyledLinkDrawer>
            </ListItem>
            <ListItem>
              <StyledLinkDrawer>About</StyledLinkDrawer>
            </ListItem>
            <ListItem>
              <StyledLinkDrawer>Contact</StyledLinkDrawer>
            </ListItem>
          </List>
    </Box>
  );

  return (
    <StyledAppBar>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flex: { xs: 1, sm: 1, md: 0.2 },
            mt: { xs: "20px", sm: "20px", md: "0px" },
          }}
        >
          <IconButton
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              mr: "15px",
              mt: "-10px",
            }}
            onClick={toggleDrawer(true)}
          >
          <MenuIcon/>
          </IconButton>


            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>

          <Typography>Mylogo</Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <List
            sx={{
              display: "flex",
              width: "50%",
            }}
          >
            <ListItem>
              <StyledLink to="/">Home</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/products">Products</StyledLink>
            </ListItem>
            <ListItem>
              <ListItemButton>About</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Contact</ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box>
          <IconButton>
            <AddIcCallIcon />
            <Typography
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              +94 76 567 4353
            </Typography>
          </IconButton>
          <Button color="secondary" sx={{ mx: "10px" }}>
            Order Now
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
