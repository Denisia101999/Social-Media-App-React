import classes from "./OnlineFriend.module.scss";
import { useState } from "react";

function OnlineFriend({ user }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

  const handleMouseOver = (event) => {
    setDelayHandler(
      setTimeout(() => {
        setIsMouseOver((prevState) => {
          return !prevState;
        });
      }, 1000)
    );
  };
  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
  };

  return (
    <li
      className={classes.onlineFriend}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseLeave}
    >
      {isMouseOver && (
        <div className={classes.onlineFriendInfo}>
          <div className={classes.onlineFriendInfoHeader}>
            <img
              src={user.profilePicture}
              className={classes.onlineFriendProfilePic}
              alt=""
            ></img>
            <span className={classes.onlineFriendUsername}>
              {user.username}
            </span>
          </div>

          <div className={classes.onlineFriendData}>
            <hr></hr>
            <p>Lives in: {user.town}</p>
            <span> {user.mutualFriends} mutual friends</span>
          </div>
        </div>
      )}
      <div className={classes.profileImgContainer}>
        <img
          src={user.profilePicture}
          className={classes.onlineFriendPic}
          alt=""
        ></img>
        <span className={classes.onlineSimbol}></span>
      </div>
      <span className={classes.onlineFriendUsername}>{user.username}</span>
    </li>
  );
}
export default OnlineFriend;
