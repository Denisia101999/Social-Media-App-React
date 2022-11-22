import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import classes from "./Navigation.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import LoginIcon from "@mui/icons-material/Login";
import profilePic from "../assets/images/profileImg1.jpg";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerData = [
    {
      title: "Settings & privacy",
      icon: <AiIcons.AiFillSetting></AiIcons.AiFillSetting>,
      className: "hamburgerItem",
    },
    {
      title: "Report a problem",
      icon: <AiIcons.AiFillExclamationCircle></AiIcons.AiFillExclamationCircle>,
      className: "hamburgerItem",
    },
    {
      title: "Switch accounts",
      icon: (
        <HiIcons.HiOutlineSwitchHorizontal></HiIcons.HiOutlineSwitchHorizontal>
      ),
      className: "hamburgerItem",
    },
    {
      title: "Help & support",
      icon: <BiIcons.BiHelpCircle></BiIcons.BiHelpCircle>,
      className: "hamburgerItem",
    },
    {
      title: "Display & accessibility",
      icon: <BsIcons.BsFillMoonFill></BsIcons.BsFillMoonFill>,
      className: "hamburgerItem",
    },
  ];
  return (
    <div>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>
            <InstagramIcon
              fontSize="inherit"
              className={classes.instagramIcon}
            ></InstagramIcon>{" "}
            Social Media App
          </div>
        </Link>
        <div className={classes.search}>
          <div className={classes.searchbar}>
            <SearchIcon className={classes.searchIcon}></SearchIcon>
            <input
              type="text"
              className={classes.searchInput}
              placeholder="Search"
            ></input>
          </div>
        </div>
        <nav>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>
              <Link to="/profile">
                <img
                  src={profilePic}
                  alt="imageGirl"
                  className={classes.headerImg}
                ></img>
              </Link>
            </li>

            <li className={classes.menuItem}>
              <Link to="/friends">
                {" "}
                <PeopleIcon className={classes.navIcon}></PeopleIcon>
                <span className={classes.iconBadge}>2</span>
              </Link>
            </li>
            <li className={classes.menuItem}>
              <Link to="/chat">
                {" "}
                <ChatIcon className={classes.navIcon}></ChatIcon>
                <span className={classes.iconBadge}>4</span>
              </Link>
            </li>
            <li className={classes.menuItem}>
              <Link to="/auth">
                {" "}
                <LoginIcon className={classes.navIcon}></LoginIcon>
              </Link>
            </li>

            {/* <li className={classes.menuItem}>
              <button onClick={toggleAuth}>
                {isLoggedIn ? "LogIn" : "LogOut"}
              </button>
            </li> */}
            <li className={classes.menuItem}>
              <Hamburger
                className={classes.hamburgerIcon}
                toggled={open}
                toggle={setOpen}
                onClick={() =>
                  setOpen((prevState) => {
                    return !prevState;
                  })
                }
                size="20"
                color="white"
              ></Hamburger>
            </li>
          </ul>
        </nav>
      </header>
      {open && (
        <div className={classes.hamburgerMenu}>
          <Link to="/profile">
            <div className={classes.hamburgerMenuHeader}>
              <img
                alt=""
                src={profilePic}
                className={classes.hamburgerMenuProfileImg}
              ></img>
              <h4 className={classes.hamburgerMenuUsername}>Denisia Damir</h4>
            </div>
          </Link>

          <div className={classes.hamburgerMenuItem}>
            {hamburgerData.map((item, index) => {
              return (
                <li key={index} className={classes.hamburgerItem}>
                  <span className={classes.icon}>{item.icon}</span>
                  <span className={classes.text}>{item.title}</span>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
