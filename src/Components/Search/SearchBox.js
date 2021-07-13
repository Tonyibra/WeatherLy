import React, { useEffect, useRef } from "react";
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
    width: "340px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    ["@media (max-width:340px)"]: {
      width: "310px",
    },
  },
});

const SearchBox = ({ placebolder }) => {
  //router
  const router = useRouter();
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.SearchedCountry);
  const cityId = useSelector((state) => state.search.SearchedCountry.name);

  const [searchString, setSearchString] = React.useState("");
  const inputRef = useRef();
  const goToCityHandler = async (e) => {
    e.preventDefault();
    if (searchString !== "") {
      router.push(`/City/${searchString}`);
    }
  };
  const classes = Search();
  return (
    <div className={styles.searchContainer}>
      <form onSubmit={goToCityHandler}>
        <Box className={classes.root}>
          <button
            type="submit"
            className={styles.searchBtn}
            onClick={(e) => goToCityHandler(e)}
          >
            <img src={searchIcon} />
          </button>
          <InputBase
            ref={inputRef}
            placeholder={placebolder}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </Box>
      </form>
    </div>
  );
};

SearchBox.defaultProps = {
  placebolder: "Search a city",
};
export default SearchBox;
