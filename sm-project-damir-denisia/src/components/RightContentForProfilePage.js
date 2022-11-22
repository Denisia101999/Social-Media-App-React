import classes from "./RightContentForProfilePage.module.scss";
import profilePic from "../assets/images/users/2.jpg";

function RightContentForProfilePage() {
  return (
    <div className={classes.rightContentForProfilePage}>
      <h4 className={classes.introTitle}>Intro</h4>
      <div className={classes.intro}>
        <div className={classes.infoItem}>
          <span className={classes.infoKey}>City:</span>
          <span className={classes.infoValue}> Iasi</span>
        </div>
        <div className={classes.infoItem}>
          <span className={classes.infoKey}>Posts: </span>
          <span className={classes.infoValue}> 75</span>
        </div>
        <div className={classes.infoItem}>
          <span className={classes.infoKey}>Followed by </span>
          <span className={classes.infoValue}> 58 people</span>
        </div>
      </div>
      <h4 className={classes.introTitle}>Friends</h4>
      <div className={classes.friends}>
        <div className={classes.friend}>
          <img className={classes.friendProfilePicture} src={profilePic} alt=""></img>
          <span className={classes.friendUsername}> John Kim</span>
        </div>
        <div className={classes.friend}>
          <img className={classes.friendProfilePicture} src={profilePic} alt=""></img>
          <span className={classes.friendUsername}> Lisa Brown</span>
        </div>
        <div className={classes.friend}>
          <img className={classes.friendProfilePicture} src={profilePic} alt=""></img>
          <span className={classes.friendUsername}>Joe Doe</span>
        </div>
        <div className={classes.friend}>
          <img className={classes.friendProfilePicture} src={profilePic} alt=""></img>
          <span className={classes.friendUsername}>David Lane</span>
        </div>
        <div className={classes.friend}>
          <img className={classes.friendProfilePicture} src={profilePic} alt=""></img>
          <span className={classes.friendUsername}>Emily Sim</span>
        </div>
        <div className={classes.friend}>
          <img className={classes.friendProfilePicture} src={profilePic} alt=""></img>
          <span className={classes.friendUsername}>Keith Smith</span>
        </div>
      </div>
    </div>
  );
}
export default RightContentForProfilePage;
