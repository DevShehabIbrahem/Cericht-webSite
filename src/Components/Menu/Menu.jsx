import "../../css/Menu/Menu.css";
import HeaderTitle from "../../shared/headerTitle/HeaderTitle";
import { words } from "../../words";
import LeftSide from "./LeftSide";
import Right from "./Right";
import MenuImage from "../../assets/menu.png";

const Menu = () => {
  const { TagTitle, MenuSub } = words.Titles;
  return (
    <div className="menu">
      <HeaderTitle hTitle={TagTitle} subTitle={MenuSub} />
      <div className="menu_content flex justify-around">
        <LeftSide />
        <img src={MenuImage} alt="" className=" py-5 md:p-0" />
        <Right />
      </div>
    </div>
  );
};

export default Menu;
