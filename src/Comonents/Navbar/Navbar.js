//HOOKS
import React,  { useContext } from "react";
import NavContext from "../../Context/NavContext";
//STYLES
import styles from "./Navbar.module.scss";
//REACT ROUTER
import { NavLink } from "react-router-dom";
//ICONS
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinedFlag,
  MdPeopleOutline,
  MdOutlineMessage,
  MdOutlineLogout,
} from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaReact, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";

const NavUrl = ({ url, icon, description }) => {
  const { nav, setNav } = useContext(NavContext);
  const checkWindowSize = () => {
    if (window.innerWidth < 1024) setNav(!nav);
  };
  
  return (
  
    <li className={styles.li_navlink}>
      <NavLink
        to={`${url}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        onClick={() => checkWindowSize()}
      >
        {icon}
        <span className={styles.description}>{description}</span>
      </NavLink>
    </li>
  );
};




const Navbar = () => {
  const { nav, setNav } = useContext(NavContext);
  console.log(nav)

  return (
    <div 
      className={`${styles.navbar_container} ${
        !nav ? styles.navbar_mobile_active : undefined
      }`}
    >
      <nav className={!nav ? undefined : styles.nav_small}>
        {/* LOGO 
        <div className={styles.logo}>
          <VscDashboard className={styles.logo_icon} />
          <FaTimes
            className={styles.mobile_cancel_icon}
            onClick={() => {
              setNav(!nav);
            }}
          />
        </div>
        */}

        {/* MENU */}
        <ul className={styles.menu_container}>
          {/* FIRST CATEGORY */}
          <span className={styles.categories}>
            {!nav ? "Pages" : <BsThreeDots />}
          </span>

          <NavUrl
            url="/"
            icon={<MdOutlineDashboard />}
            description="Dashboard"
          />
          <NavUrl
            url="analytics"
            icon={<MdOutlineAnalytics />}
            description="Data Usage"
          />
       
         

          {/* SECOND CATEGORY */}
          <span className={`${styles.categories} ${styles.second_category}`}>
            {!nav ? "More" : <BsThreeDots />}
          </span>

          <NavUrl
            url="other1"
            icon={<IoMdLogIn />}
            description="Authentication"
          />
          <NavUrl url="other2" icon={<FaReact />} description="ReactJs" />
        </ul>

        {/* LOGOUT BUTTON */}
        <div
          className={`${styles.btn_logout}`}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <MdOutlineLogout />
        </div>
      </nav>

      <div
        className={!nav ? styles.mobile_nav_background_active : undefined}
        onClick={() => {
          setNav(!nav);
        }}
      ></div>
    </div>
  );
};

export default Navbar;