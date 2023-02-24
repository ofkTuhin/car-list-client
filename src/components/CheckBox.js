import React from "react";

const CheckBox = ({ text, handleChecked, className, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
