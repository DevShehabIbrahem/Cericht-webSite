import "../../css/About/About.css";
import G from "../../assets/G.png";
import knif from "../../assets/knife.png";
import { words } from "../../words";
import Button from "../../shared/Button/Button";

const About = () => {
  const { about_dec_left, about_right, about_dec_right, about_left } = words;
  return (
    <div className="about_wrraper" id="About">
      {/*about_content*/}
      <div className="about_content">
        {/*about_image_g*/}
        <div className="about_G">
          <img src={G} alt="" />
        </div>

        <div className="about_knif">
          {/*about_knif_l*/}

          <div className="about_knif_l">
            <h1>{about_left}</h1>
            <p>{about_dec_left}</p>
            <Button className="custom__button">Know More</Button>
          </div>
          <img src={knif} alt="knif" />
          <div>
            {/*about_knif_r*/}

            <div className="about_knif_r">
              <h1>{about_right}</h1>
              <p>{about_dec_right}</p>
              <Button className="custom__button">Know More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
