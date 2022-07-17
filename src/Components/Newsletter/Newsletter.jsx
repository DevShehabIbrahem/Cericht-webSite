import React from "react";
import HeaderTitle from "../../shared/headerTitle/HeaderTitle";
import Button from "../../shared/Button/Button.js";
import "../../css/Newsletter/Newsletter.css";
const Newsletter = () => {
  return (
    <div className="Newsletter" id="Contcant">
      <HeaderTitle hTitle="Subscribe To Our Newsletter" subTitle="Newsletter" />
      <span>And Never Miss Latest Updates!</span>
      <div className="flex items-center gap-2">
        <input type="text" className="input-sub" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

export default Newsletter;
