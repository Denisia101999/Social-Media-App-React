import classes from "./Profile.module.scss";
import LeftContent from "./StartingPage/LeftContent/LeftContent";
import Share from "./share/Share";
import Newsfeed from "./StartingPage/Newsfeed/Newsfeed";
import { Posts } from "../friendsData";
import coverPic from "../../src/assets/images/coverImage.jpg";
import profilePic from "../assets/images/profileImg1.jpg";
import RightContentForProfilePage from "./RightContentForProfilePage";

function Profile() {
  return (
    <>
    <LeftContent></LeftContent>
      <div className={classes.profile}>
        
        <div className={classes.profileContent}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img src={coverPic} className={classes.coverImage} alt=""></img>
              <img
                src={profilePic}
                className={classes.profileUserImage}
                alt=""
              ></img>
            </div>
            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoUsername}>Damir Denisia</h4>
              <span className={classes.profileInfoDesc}>
                Welcome to my page!
              </span>
            </div>
          </div>
          <div className={classes.profileNewsfeed}>
            <Share></Share>
            {Posts.map((post) => {
              return <Newsfeed key={post.id} post={post}></Newsfeed>;
            })}
          </div>
        </div>
      </div>
      <RightContentForProfilePage></RightContentForProfilePage>
    </>
  );
}
export default Profile;
