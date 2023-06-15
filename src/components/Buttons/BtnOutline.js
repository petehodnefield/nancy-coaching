import React from "react";

const BtnOutline = ({ btnType, btnText }) => {
  return (
    <button type={btnType} className="btn btn--outline rounded">
      {btnText}
    </button>
  );
};

export default BtnOutline;
