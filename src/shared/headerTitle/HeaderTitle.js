import sppon from "../../assets/spoon.svg";
import "./headerTitle.scss";

const HeaderTitle = ({ hTitle, subTitle }) => {
  return (
    <div className="header_left">
      <span className="text-[1.1rem]">{subTitle}</span>
      <img src={sppon} alt="sppon" className="w-[2.5rem]" />
      <h1>{hTitle}</h1>
    </div>
  );
};

export default HeaderTitle;
