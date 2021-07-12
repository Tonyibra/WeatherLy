import React from "react";
import styles from "./SearchBox.module.scss";
import searchIcon from "../base/SearchBoxIcons/search.svg";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import { search } from "../../Redux/slices/SearchSlice";
import { useDispatch } from "react-redux";
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
  const mainCity = "Beirut";
  const dispatch = useDispatch();
  //HOOKS
  const [searchString, setSearchString] = React.useState(mainCity);
  //FUNCTIONS
  const getSearchString = (value) => {
    setSearchString(value);
  };

  React.useEffect(async () => {
    const firstSearch = await dispatch(search(searchString));
  }, []);
  const getCountryDataHandler = async () => {
    const searchAction = await dispatch(search(searchString));
  };
  const classes = Search();
  return (
    <div className={styles.searchContainer}>
      <Box className={classes.root}>
        <img src={searchIcon} onClick={getCountryDataHandler} />
        <InputBase
          placeholder={placebolder}
          onChange={(e) => getSearchString(e.target.value)}
        />
      </Box>
    </div>
  );
};

SearchBox.defaultProps = {
  placebolder: "Search Location",
};
export default SearchBox;
