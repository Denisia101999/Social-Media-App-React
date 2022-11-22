import classes from "./Stories.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Stories(props) {
  return (
    <div className={classes.storiesContainer}>
      <button className={classes.btnScroll}>
        <ArrowBackIosIcon className={classes.btnIcon}></ArrowBackIosIcon>
      </button>
      <div className={classes.storyWrapper}>
        <div className={classes.storyCircle}>
          <img
            className={classes.storyProfileImg}
            src={require("../../assets/images/users/2.jpg")}
            alt=""
          ></img>
        </div>
        <span className={classes.storyUsername}>Stefanie Carter</span>
      </div>
      <div className={classes.storyWrapper}>
        <div className={classes.storyCircle}>
          <img
            className={classes.storyProfileImg}
            src={require("../../assets/images/users/1.jpg")}
            alt=""
          ></img>
        </div>
        <span className={classes.storyUsername}>Renata Maglio</span>
      </div>
      <div className={classes.storyWrapper}>
        <div className={classes.storyCircle}>
          <img
            className={classes.storyProfileImg}
            src={require("../../assets/images/users/3.jpg")}
            alt=""
          ></img>
        </div>
        <span className={classes.storyUsername}>Barbara Moore</span>
      </div>
      <div className={classes.storyWrapper}>
        <div className={classes.storyCircle}>
          <img
            className={classes.storyProfileImg}
            src={require("../../assets/images/users/5.jpg")}
            alt=""
          ></img>
        </div>
        <span className={classes.storyUsername}>Jeffrey Ward</span>
      </div>
      <div className={classes.storyWrapper}>
        <div className={classes.storyCircle}>
          <img
            className={classes.storyProfileImg}
            src={require("../../assets/images/users/9.jpg")}
            alt=""
          ></img>
        </div>
        <span className={classes.storyUsername}>Debra Torres</span>
      </div>
      <div className={classes.storyWrapper}>
        <div className={classes.storyCircle}>
          <img
            className={classes.storyProfileImg}
            src={require("../../assets/images/users/11.jpg")}
            alt=""
          ></img>
        </div>
        <span className={classes.storyUsername}>Vincent Jacquot</span>
      </div>
      <div className={classes.storyWrapper}>
        <div className={classes.storyCircle}>
          <img
            className={classes.storyProfileImg}
            src={require("../../assets/images/users/8.jpg")}
            alt=""
          ></img>
        </div>
        <span className={classes.storyUsername}>Susan Ruiz</span>
      </div>
      <div className={classes.storyWrapper}>
        <div className={classes.storyCircle}>
          <img
            className={classes.storyProfileImg}
            src={require("../../assets/images/users/7.jpg")}
            alt=""
          ></img>
        </div>
        <span className={classes.storyUsername}>Samantha Leon</span>
      </div>

      <button className={classes.btnScroll}>
        <ArrowForwardIosIcon className={classes.btnIcon}></ArrowForwardIosIcon>
      </button>
    </div>
  );
}
export default Stories;
