import React, { useEffect, useState } from "react";
import CategoryDetails from "../categoryDetails/CategoryDetails";
import classes from "./Booking.module.css";

const Booking = () => {
  const [showItem, setShowItem] = useState(false);
  const [closeItem, setCloseItem] = useState(false);

  const showItemHandler = () => {
    showItem ? setShowItem(false) : setShowItem(true);
  };
  const closeItemHandler = () => {
    
  };

  return (
    <div className={classes.booking}>
      <h2>Book</h2>
      <p>
        <span>Choose Menu</span>
        <span>Your info</span>
        <span>Confirmation</span>
      </p>
      <p>
        Returning? <span>Log in</span>
      </p>
      <p>
        *When you select date/time, please select your dinner start time. We
        will email you the arrival time of the chef.
      </p>
      <div>Redeem Coupon or Gift Certificate</div>
      <div>Choose a category...</div>
      <div className={classes.items}>
        <div onClick={showItemHandler}>Kosher</div>
        <div onClick={showItemHandler}>New American</div>
        <div>Gift Certificates</div>
        {showItem ? (
          <>
            <CategoryDetails />
            <CategoryDetails />
            <CategoryDetails />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Booking;
