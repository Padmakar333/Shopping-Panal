import React, { useState } from "react";

import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import ChecklistIcon from '@mui/icons-material/Checklist';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
export function Sidebar({drawerWidth,handleDrawerTransitionEnd,handleDrawerClose,mobileOpen}){
    const navigate =useNavigate();
    const [ Menumapping,setmenumapping] =useState({
        Categories:true
    })
        const Menus =[
            {
                name:"Dashboard",
                Icon:<InboxIcon/>,
                route:'dashboard'
            },
            {
                name:"Categories",
                Icon:<CategoryIcon />,
                route:'categories',
                children:[
                  {
                    name:"Main Categories",
                    Icon:<CategoryIcon />,
                    route:'main categories'
                  },
                  {
                    name:"SubCategories",
                    Icon:<CategoryIcon />,
                    route:'subcategories'
                  }
                ]

                
            },
            {
                name:"Product",
                Icon:<InventoryIcon/>,
                route:'product'
            },
            {
                name:"Orders",
                Icon:<ChecklistIcon/>,
                route:'orders'
            },
            {
                name:"Users",
                Icon:<GroupIcon />,
                route:'users'
            }]
    const drawer = (
        <div>
          <Toolbar />
          <Divider />
          <List>
            
            {Menus.map((Menus, index) => (
              <>
              <ListItem key={Menus.name} disablePadding onClick={()=>{navigate(Menus.route)}}>
                <ListItemButton onClick={()=> {
                    Menumapping[Menus.name]=!Menumapping[Menus.name];
                    setmenumapping({...Menumapping})
                }}>
                  <ListItemIcon>
                    {Menus.Icon}
                  </ListItemIcon>
                  <ListItemText primary={Menus.name} />
                  {Menus.children  && <>{Menumapping[Menus.name] ? <KeyboardArrowDownIcon></KeyboardArrowDownIcon> : <KeyboardArrowUpOutlinedIcon />}</>}
                </ListItemButton>
              </ListItem>
              {Menus.children && Menumapping[Menus.name] && Menus.children.map((child)=>{
                return (
                  <ListItem key={child.name} disablePadding onClick={()=>{navigate(child.route)}}>
                <ListItemButton>
                  <ListItemIcon>
                    {child.Icon}
                  </ListItemIcon>
                  <ListItemText primary={child.name} />
                </ListItemButton>
              </ListItem>
                )
              })}
            </>
            ))}
          </List>
          
        </div>
      );
    return(
        <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
              >
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
              >
                {drawer}
              </Drawer>
            </Box>
    )
}