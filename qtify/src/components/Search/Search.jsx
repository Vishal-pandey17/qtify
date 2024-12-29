import React from "react";
import styles from "./Search.module.css"
import useAutocomplete from '@mui/material/useAutocomplete';
import { styled } from '@mui/system';
import SearchIcon from "../SearchIcon/SearchIcon";


const Listbox = styled('ul')(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: 'absolute',
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  listStyle: 'none',
  zIndex: 10,
  backgroundColor: 'var(--color-black)',
  overflow: 'scroll',
  left:0,
  bottom: 0,
  right: 0,
  maxHeight: "500px",
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  
  },
}));

const Search = ({searchData, placeholder}) => {
    const {
      getRootProps,
      getInputLabelProps,
      value,
      getInputProps,
      getListboxProps,
      getOptionProps,
      groupedOptions,
    } = useAutocomplete({
      id: 'use-autocomplete-demo',
      options: searchData || [],
      getOptionLabel: ( option) => option.title,
    });
    return (
      <div style={{position: "relative"}}>
          <form 
           className={styles.wrapper}
          //  onSubmit={(e) => {
          //     onSubmit(e, value);
          //  }}
          >
            <div {...getInputProps()} style={{border: "1px solid black", borderRadius: "8px"}}>
                <input
                 name="album"
                 className={styles.search}
                 placeholder={placeholder}
                 required
                 {...getInputProps()}
                />

            </div>
            <div>
              <button className={styles.searchButton} type="submit" style={{border: "1px solid black"}}>
                <SearchIcon />
              </button>
            </div>
          </form>
          {/* {groupedOptions.length > 0 ? (
             
          ) : ()} */}
      </div>
    )
}


export default Search;