import classes from "./Chat.module.scss";
import RightContent from "../components/StartingPage/RightContent/RightContent";
import LeftContent from "../components/StartingPage/LeftContent/LeftContent";
import profilePic from "../assets/images/profileImg1.jpg";
import EmailIcon from "@mui/icons-material/Email";

function Chat() {
  return (
    <>
      <LeftContent></LeftContent>

      <div className={classes.chatPage}>
        <div className={classes.mainChat}>
          <h4>
            {" "}
            <EmailIcon className={classes.messageIcon}></EmailIcon> Messages
          </h4>

          <div className={classes.chatItems}>
            <div className={classes.chatItem}>
              <img
                alt=""
                className={classes.chatProfilePicture}
                src={profilePic}
              ></img>
              <div className={classes.chatDate}>
                <span className={classes.chatUsername}>Emily Smith </span>
                <p className={classes.chatInfo}> Liked a message * 19h</p>
              </div>
            </div>
            <div className={classes.chatItem}>
              <img
                alt=""
                className={classes.chatProfilePicture}
                src={profilePic}
              ></img>
              <div className={classes.chatDate}>
                <span className={classes.chatUsername}>Kelly Murray</span>
                <p className={classes.chatInfo}> You sent a message * 4w</p>
              </div>
            </div>
            <div className={classes.chatItem}>
              <img
                alt=""
                className={classes.chatProfilePicture}
                src={profilePic}
              ></img>
              <div className={classes.chatDate}>
                <span className={classes.chatUsername}>Sierra Leonard</span>
                <p className={classes.chatInfo}>Liked a message * 2h</p>
              </div>
            </div>
            <div className={classes.chatItem}>
              <img
                alt=""
                className={classes.chatProfilePicture}
                src={profilePic}
              ></img>
              <div className={classes.chatDate}>
                <span className={classes.chatUsername}>John Gordon</span>
                <p className={classes.chatInfo}> Sent you a message * 3h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightContent></RightContent>
    </>
  );
}
export default Chat;
