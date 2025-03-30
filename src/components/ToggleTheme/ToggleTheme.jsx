import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import { TOGGLE_THEME } from "../../store/index";

function ToggleTheme() {
    var dispatch = useDispatch();
  var darkMode = useSelector((state) => state.theme.isDark);
  return (
    <IconButton onClick={() => dispatch(TOGGLE_THEME())} color="inherit">
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}

export default ToggleTheme;
