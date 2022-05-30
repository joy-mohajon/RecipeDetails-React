import React from "react";
import classes from "./CommentSection.module.css";

export default function CommentSection() {
  return (
    <div className={classes.comment}>
      <div>
        <h5>No comments yet, be the first to leave one!</h5>
        <h5>Leave a Reply </h5>
      </div>
      <div className={classes.cmmentDetail}>
        <p>
          <strong>Note: </strong>Comments on the web site reflect the views of
          their respective authors, and not necessarily the views of this web
          portal. Members are requested to refrain from insults, swearing and
          vulgar expression. We reserve the right to delete any comment without
          notice or explanations.
        </p>
        <p>
          Your email address will not be published. Required fields are signed
          with <span className={classes.imprtantIcon}>*</span>
        </p>
        <form action="">
          <textarea></textarea>
          <div className={classes.userDetails}>
            <div className={classes.diff_input}>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <span className={classes.imprtantIcon}>*</span>
            </div>
            <div className={classes.diff_input}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email.."
              />
              <span className={classes.imprtantIcon}>*</span>
            </div>
            <div className={classes.diff_input}>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="Your website.."
              />
            </div>
          </div>

          <p className={classes.saveDetail}>
            <input type="checkbox" name="sameadr" />
            &nbsp; Save my name, email, and website in this browser for the next
            time I comment.
          </p>
          <div className={classes.cmmntbutton}>
            <input
              type="submit"
              value="POST COMMENT"
              className={classes.submitCmmnt}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
