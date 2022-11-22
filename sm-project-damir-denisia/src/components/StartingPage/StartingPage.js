// import Newsfeed from "./Newsfeed/Newsfeed";
import LeftContent from "./LeftContent/LeftContent";
import classes from "./StartingPage.module.scss";
import Share from "../share/Share";
import Newsfeed from "./Newsfeed/Newsfeed";
import RightContent from "./RightContent/RightContent";
import Stories from "../stories/Stories";
import { Posts } from "../../friendsData";

const StartingPage = () => {
  return (
    <div className={classes.mainContainer}>
      <LeftContent></LeftContent>
      <div className={classes.newsfeed}>
        <Stories></Stories>
        <Share></Share>
        {Posts.map((post) => {
          return <Newsfeed key={post.id} post={post}></Newsfeed>;
        })}
      </div>
      <RightContent></RightContent>
    </div>
  );
};

export default StartingPage;
