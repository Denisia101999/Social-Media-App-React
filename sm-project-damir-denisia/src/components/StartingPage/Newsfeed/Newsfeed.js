import classes from "./Newsfeed.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { Users, Posts} from "../../../friendsData";
import { useState } from "react";
import CommentsSection from "./Comments/CommentSection";

const Post = (props) => {
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [profileOptionsVisible, setProfileOptionsVisible] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const toggleProfileOptions = () => {
    setProfileOptionsVisible((prevState) => {
      return !prevState;
    });
  };

  const deletePost = () => {
    
  };
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postHeader}>
            <div>
              <img
               src={require("../../../assets/images/users/3.jpg")}
                className={classes.postProfileImg}
                alt="User profile"
              />
             
            </div>
            <div className={classes.profileUserInfo}>
              <span>
                {Users.filter((u) => u.id === props.post.userId)[0].username}
              </span>
              <p className={classes.postInfoDate}>{props.post.date} </p>
            </div>
          </div>
          <div className={classes.profileOptions}>
              <MoreHorizIcon  onClick={toggleProfileOptions}></MoreHorizIcon>
                {profileOptionsVisible && (
              <div className={classes.profileOptionsMenu}>
                <button onClick={deletePost} className={classes.profileOptionsButton}>Delete this post</button>
              </div>
            )}
            
          </div>
        </div>
        <div className={classes.postContent}>
          <div className={classes.imgWrapper}>
            <img src={Posts.filter( p => p.id ===props.post.userId)[0].photo} className={classes.imgContent} alt=""></img>
          </div>
          <strong className={classes.postTitle}>Title</strong>
          <p className={classes.postDescription}>{props.post.desc}</p>
        </div>
        <div className={classes.postBottom}>
          <div className={classes.reacts}>
            <div className={classes.likesNumber}>
              <FavoriteBorderIcon htmlColor="tomato"></FavoriteBorderIcon>
              <span className={classes.reactsCount}> {like} </span>
            </div>
            <div className={classes.commentNumber}>
              <span className={classes.reactsCount}>
                {" "}
                {props.post.comment} comments
              </span>
            </div>
          </div>
          <hr />
          <div className={classes.reactsAction}>
            <ul className={classes.action}>
              <li
                onClick={handleLike}
                className={`${classes.reactions} ${isLiked && classes.red}`}
              >
                <FavoriteIcon></FavoriteIcon>
                <span>Like</span>
              </li>
              <li className={classes.reactions}>
                <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                <span>Comment</span>
              </li>
              <li className={classes.reactions}>
                <ShareIcon></ShareIcon> <span>Share</span>
              </li>
            </ul>
          </div>
          <div className={classes.commentBoxContainer}>
            <CommentsSection></CommentsSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
