import React from "react";
const BtnPrimary = ({ btnText, btnType }) => {
  return (
    <button type={btnType} className="btn btn--primary rounded">
      {btnText}
    </button>
  );
};

export default BtnPrimary;
