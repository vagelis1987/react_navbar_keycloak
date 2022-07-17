//HOOKS
import React,  { useContext } from "react";
//STYLES
import styles from "./RightNavbar.module.scss";
//CONTEXT
import NavContext from "../../Context/NavContext";
//ICONS , IMAGES
import { MdOutlineMenu } from "react-icons/md";

//Components
import MyProfile from "./Submenus/MyProfile";


const RightNavbar = () => {
  const { nav, setNav } = useContext(NavContext);

  
  return (
    <div className={styles.container}>
      {/* BURGER */}
      <div
        className={styles.burger_container}
        onClick={() => {
          setNav(!nav);
        }}
      >
   
        <MdOutlineMenu />
      </div>

      {/* ACTIONS */}
      <div className={styles.actions}>
       
      </div>


       {/* My Profile */}
       <MyProfile />
   
    </div>
  );
};

export default RightNavbar;