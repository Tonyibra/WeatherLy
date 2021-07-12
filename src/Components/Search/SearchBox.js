import React, { useEffect } from "react";
import styles from "./SearchBox.module.scss";
import searchIcon from "../base/SearchBoxIcons/search.svg";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import { search } from "../../Redux/slices/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
const Search = makeStyles({
  root: {
    border: "1px solid #0e0e0e",
    borderRadius: "16px",
    width: "380px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
  },
});

const SearchBox = ({ placebolder }) => {
  //router
  const router = useRouter();
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.SearchedCountry);
  const cityId = useSelector((state) => state.search.SearchedCountry.name);

  const [searchString, setSearchString] = React.useState("");

  //FUNCTIONS
  const getSearchString = (value) => {
    setSearchString(value);
  };

  const getCountryDataHandler = async () => {
    await dispatch(search(searchString));
  };
  const goToCityHandler = async () => {
    await dispatch(search(searchString));
    if (Object.keys(searchData).length > 0) {
      router.push(`/City/${cityId}`);
    }
  };
  const classes = Search();
  return (
    <div className={styles.searchContainer}>
      <Box className={classes.root}>
        <img
          src={searchIcon}
          onClick={searchString !== "" ? goToCityHandler : null}
        />
        <InputBase
          placeholder={placebolder}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </Box>
    </div>
  );
};

SearchBox.defaultProps = {
  placebolder: "Search Location",
};
export default SearchBox;
