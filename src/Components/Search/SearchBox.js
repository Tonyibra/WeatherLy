import React from "react";
import styles from "./SearchBox.module.scss";
import searchIcon from "../base/SearchBoxIcons/search.svg";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const Search = makeStyles({
  root: {
    border: "1px solid #0e0e0e",
    borderRadius: "16px",
    width: "240px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
  },
});

const SearchBox = ({ placebolder }) => {
  const classes = Search();
  return (
    <div className={styles.searchContainer}>
      <Box className={classes.root}>
        <img src={searchIcon} />
        <InputBase placeholder={placebolder} />
      </Box>
    </div>
  );
};

SearchBox.defaultProps = {
  placebolder: "Search Location",
};
export default SearchBox;
