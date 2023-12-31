import * as React from "react";
import { useContext } from "react";
import { OrderContext } from "../../containers/Container.js";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function ConditionalLink({ to, condition, children }) {
  if (condition) {
    return (
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={to}
      >
        {children}
      </Link>
    );
  }
  return <>{children}</>;
}

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor:"#A9B47A"
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Sidebar({ open, handleDrawerClose, handleDrawerOpen }) {
  const theme = useTheme();
  const { currentOrder } = useContext(OrderContext);

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 50);
  };

  return (
    <Box display= "flex" justifyContent="space-between" sx={{
      p: 2,
      flexGrow: 1,
      marginLeft: 8,
    }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Avatar alt = "logo" src ="./rainforestLogo.png"/>
            <Typography variant="h6" noWrap component="div" sx={{marginLeft: 1}}>
              | Warehouse Management System 
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'flex', gap: 2 } }}>
            <IconButton color = "inherit">
              <EmailOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsOutlinedIcon />
            </IconButton >
            <IconButton color ="inherit">
              <Avatar alt= "Sandra" />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to="/"
            >
              Homepage
            </Link>,
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to="/OrderListPage"
            >
              Orders
            </Link>,
            <ConditionalLink
              to={`/OrderPage/${currentOrder?.id}`}
              condition={!!currentOrder}
            >
              Current Order
            </ConditionalLink>,
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to="/"
              onClick={scrollToBottom}
            >
              Trucks
            </Link>,
          ].map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                disableUnderline: true,
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  disableUnderline: true,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                      to="/"
                    >
                      <HomeOutlinedIcon />
                    </Link>
                  ) : index === 1 ? (
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                      to="/OrderListPage"
                    >
                      <ReceiptLongOutlinedIcon />
                    </Link>
                  ) : index === 2 ? (
                    <ConditionalLink
                      to={`/OrderPage/${currentOrder?.id}`}
                      condition={!!currentOrder}
                    >
                      <TakeoutDiningOutlinedIcon />
                    </ConditionalLink>
                  ) : (
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                      to="/"
                      onClick={scrollToBottom}
                    >
                      <LocalShippingOutlinedIcon />
                    </Link>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Tutorial", "Help & FAQ"].map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    <AccessibilityNewOutlinedIcon />
                  ) : (
                    <HelpOutlineOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
