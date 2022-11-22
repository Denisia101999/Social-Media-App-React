import { useState } from "react";
import classes from "./RightContent.module.scss";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profilePic from "../../../assets/images/users/2.jpg";
import { Users } from "../../../friendsData";
import OnlineFriend from "./onlineFriend/OnlineFriend";
import CloseIcon from "@mui/icons-material/Close";

function RightContent() {
  const [isClicked, setIsClicked] = useState(false);
  const showDropdownBirthday = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className={classes.rightContent}>
      <div className={classes.rightWrapper}>
        <div
          className={classes.birthdayContainer}
          onClick={showDropdownBirthday}
        >
          <h4 className={classes.birthdayTitle}>Birthdays</h4>
          <div className={classes.birthdayText}>
            <CardGiftcardIcon
              className={classes.birthdayIcon}
            ></CardGiftcardIcon>
            <p>
              <strong>Allison Reed</strong> and <strong>3 others</strong> have their birthday today.
            </p>
          </div>
          <hr className={classes.birthdayHr}></hr>
          {isClicked && (
            <div className={classes.dropdownBirthday}>
              <CloseIcon
                className={classes.dropdownBirthdayIcon}
                onClick={() => setIsClicked(isClicked)}
              ></CloseIcon>
              <h4>Friends' birthdays</h4>
              <hr></hr>
              <div className={classes.friendBirthday}>
                <img
                  src={profilePic}
                  alt=""
                  className={classes.friendProfilePic}
                ></img>
                <div className={classes.friend}>
                  <span className={classes.friendUsername}> Joe Stevens</span>
                  <input
                    type="text"
                    placeholder="Write on his timeline..."
                    className={classes.friendInput}
                  ></input>
                </div>
              </div>
              <hr></hr>
              <div className={classes.friendBirthday}>
                <img
                  src={profilePic}
                  alt=""
                  className={classes.friendProfilePic}
                ></img>
                <div className={classes.friend}>
                  <span className={classes.friendUsername}> Allison Reed</span>
                  <input
                    type="text"
                    placeholder="Write on her timeline..."
                    className={classes.friendInput}
                  ></input>
                </div>
              </div>
              <hr></hr>
              <div className={classes.friendBirthday}>
                <img
                  src={profilePic}
                  alt=""
                  className={classes.friendProfilePic}
                ></img>
                <div className={classes.friend}>
                  <span className={classes.friendUsername}> Samantha Leon</span>
                  <input
                    type="text"
                    placeholder="Write on her timeline..."
                    className={classes.friendInput}
                  ></input>
                </div>
              </div>
              <hr></hr>
            </div>
          )}
        </div>
        <div className={classes.contactsHeader}>
          <h4>Contacts</h4>
          <div className={classes.contactIcons}>
            <VideoCallIcon></VideoCallIcon>
            <SearchIcon></SearchIcon>
            <MoreHorizIcon></MoreHorizIcon>
          </div>
        </div>
        <ul className={classes.friendList}>
          {Users.map((u) => (
            <OnlineFriend key={u.id} user={u}></OnlineFriend>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default RightContent;
