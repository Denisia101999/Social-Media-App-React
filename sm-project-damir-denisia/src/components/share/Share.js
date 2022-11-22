import classes from "./Share.module.scss";
import profilePic from "../../assets/images/profileImg1.jpg";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

function Share() {
  return (
    <div className={classes.shareContainer}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img src={profilePic} className={classes.shareProfileImg} alt=""></img>
          <input
            type="text"
            className={classes.shareInput}
            placeholder="What's on your mind, Denisia?"
          ></input>
          <button className={classes.shareButton}> Share</button>
        </div>
        <hr className={classes.shareHr}></hr>
        <div className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <button className={classes.shareOption}>
              <span className={classes.shareOptionText}>
                <VideocamIcon htmlColor="tomato"className={classes.shareIcon}></VideocamIcon>Live
                video
              </span>
            </button>
            <button className={classes.shareOption}>
              <span className={classes.shareOptionText}>
                <ImageIcon htmlColor="green"className={classes.shareIcon}></ImageIcon>Photo/Video
              </span>
            </button>
            <button className={classes.shareOption}>
              <span className={classes.shareOptionText}>
                <SentimentVerySatisfiedIcon htmlColor="orange"
                  className={classes.shareIcon}
                ></SentimentVerySatisfiedIcon>
                Feeling/activity
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Share;
