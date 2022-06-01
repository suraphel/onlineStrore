import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Add from "@material-ui/icons/Add";
import AddProductForm from "../Components/AddProductForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

const Nav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Add Item" icon={<Add />} />

      {/* <BottomNavigationAction
        component={Link}
        to="/AddProductForm"
        label="AddProductForm"
        value="AddProductForm"
        icon={<Add />}
        className={classes.content}
      /> */}
    </BottomNavigation>
  );
};

export default Nav;
