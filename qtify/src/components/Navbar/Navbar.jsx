import React from "react"
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "../Navbar/Navbar.module.css"

const Navbar = ({searchData}) => {
    
  return (
    <nav className={styles.navbar}>
      <Link to="/">
         <Logo />
      </Link>
      <Search 
        searchData={searchData}
        placeholder="search a song of your choice"
      />
      <Button>
        Give Feedback
      </Button>
    </nav>
  )
}

export default Navbar;
