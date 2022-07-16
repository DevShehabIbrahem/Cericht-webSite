import React from "react";
import "../../css/About/About.css";
import G from "../../assets/G.png";
import knif from "../../assets/knife.png";
import { words } from "../../words";

const About = () => {
  const { about_dec_left, about_right, about_dec_right, about_left } = words;
  return (
    <div className="about_wrraper">
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
            <button className="custom__button">Know More</button>
          </div>
          <img src={knif} alt="knif" />
          <div>
            {/*about_knif_r*/}

            <div className="about_knif_r">
              <h1>{about_right}</h1>
              <p>{about_dec_right}</p>
              <button className="custom__button">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
