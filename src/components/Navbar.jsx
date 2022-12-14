import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import List from "@mui/material/List";
import InputBase from "@mui/material/InputBase";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import { logOut } from "../auth/Firebase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const drawerWidth = 240;
const navItems = ["Home", "About", "Login", "Register"];

export default function DrawerAppBar(props: Props) {
  const { window, setSelectedMeal, getData, setQuery, query, selectedMeal } =
    props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(`/${item}`)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const APP_KEY = "3cde9e853ac30b4dfd6e6971fa023393";
  const APP_ID = "0bfed9b1";
  const SEARCH_API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(SEARCH_API);
  };

  console.log(selectedMeal);
  console.log(query);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
          >
            REC??PE APP
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search a meal..."
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Search>
            </Box>
          </form>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              {/* <InputLabel
                    id="demo-simple-select-label"
                    // sx={{ color: "white" }}
                  >
                    Meal Type
                  </InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedMeal}
                // label="Meal Type"
                onChange={(e) => setSelectedMeal(e.target.value)}
                sx={{ color: "white", marginLeft: ".5rem" }}
              >
                <MenuItem value={"lunch"}>Lunch</MenuItem>
                <MenuItem value={"breakfast"}>Breakfast</MenuItem>
                <MenuItem value={"brunch"}>Brunch</MenuItem>
                <MenuItem value={"snack"}>Snack</MenuItem>
                <MenuItem value={"teatime"}>Teatime</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {!currentUser && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate(`/${item.toLowerCase()}`)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {currentUser && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                sx={{
                  marginLeft: "1rem",
                  display: { sm: "none", md: "inline-block" },
                }}
                variant="Button"
              >
                {currentUser.displayName}
              </Typography>
              <Button sx={{ color: "#fff" }} onClick={() => navigate("/")}>
                HOME
              </Button>
              <Button sx={{ color: "#fff" }} onClick={() => navigate("/about")}>
                ABOUT
              </Button>
              <Button sx={{ color: "#fff" }} onClick={() => logOut()}>
                LOGOUT
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
