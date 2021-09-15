import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_remove_coupon } from "../store/ducks/cart";

const DisplayCoupon = () => {
  const dispatch = useDispatch();
  const coupon = useSelector((state) => state.cart.coupon);

  return coupon.label ? (
    <h4 className="discount-coupon">
      {coupon.label} - {coupon.discount}%
      <button
        className="discount-coupon-button"
        type="button"
        onClick={(e) => dispatch(ACTION_remove_coupon())}
      >
        X
      </button>
    </h4>
  ) : null;
};

export default DisplayCoupon;
