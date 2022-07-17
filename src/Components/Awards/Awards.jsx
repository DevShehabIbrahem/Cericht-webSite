import laurels from "../../assets/laurels.png";
import HeaderTitle from "../../shared/headerTitle/HeaderTitle";
import "../../css/Awards/Awards.css";
import { words } from "../../words";
import { AwardData } from "../../Data/AwardsData";

const Awards = () => {
  const { awardsdec, awardsTitle } = words;
  return (
    <>
      <div className="Awards_content" id="Awards">
        {/*right Side*/}
        <div className="Awards_left">
          <div>
            <HeaderTitle hTitle={awardsdec} subTitle={awardsTitle} />
          </div>
          {AwardData.map(({ imgUrl, dec, title }) => (
            <div className="Awards_info">
              <img src={imgUrl} alt="imgUrl" />
              <div>
                <span>{title}</span>
                <p>{dec}</p>
              </div>
            </div>
          ))}
        </div>

        {/*left Side*/}
        <div className="Awards_right">
          <img src={laurels} alt="laurels" />
        </div>
      </div>
    </>
  );
};

export default Awards;
