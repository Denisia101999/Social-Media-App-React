import classes from "./CommentSection.module.scss";
import profilePic from "../../../../assets/images/profileImg1.jpg";

const CommentSection = (props) => {
  return (
    <>
      <section className={classes.commentSection}>
            <div className={classes.enterCommentInput}>
              <img
                src={profilePic}
                alt="girl"
                className={classes.profilePicture}
              />
              <input type="text" className={classes.commentInput} placeholder="Write a comment..." />
            </div>
            <div className={classes.commentsSection}>
              <img
                src={profilePic}
                alt="girl"
                className={classes.profilePicture}
              />
              <div className={classes.comment}>
                <span>Denisia Damir </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, suscipit!
                </p>
              </div>
            </div>
          </section>
          </>
  );
};

export default CommentSection;
