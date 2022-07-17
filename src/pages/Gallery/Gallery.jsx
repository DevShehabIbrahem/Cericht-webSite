import { useState } from "react";
import "../../css/Gallery/Gallery.css";
import { testimonialsData } from "../../Data/testimonialsData.js";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { words } from "../../words";
import { motion } from "framer-motion";
import HeaderTitle from "../../shared/headerTitle/HeaderTitle";
import Button from "../../shared/Button/Button";
const Gallery = () => {
  const transition = { type: "spring", duration: 3 };

  const { Instagram, instaTitle, instaPara } = words;
  const [state, setState] = useState(0);

  const GalleryNumb = (num) => {
    console.log(num);
    setState(state + 1);
    if (num === 2) setState(0);
  };
  return (
    <>
      <div className="Gallery_content">
        {/*left Side*/}
        <div className="Gallery_left">
          <div>
            <HeaderTitle hTitle={instaTitle} subTitle={Instagram} />
          </div>
          <p>{instaPara}</p>
          <Button>View More</Button>
        </div>

        {/*left Side*/}
        <div className="Gallery_right">
          <motion.img
            key={state}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 8 }}
            src={testimonialsData[state].image}
            alt="slide"
            className="gallery_slide"
          />

          {/*testImonials_arrows*/}
          <div className="gallery_arrows">
            <img
              src={leftArrow}
              alt="leftArrow"
              onClick={() => GalleryNumb(state)}
            />

            <img
              src={rightArrow}
              alt="rightArrow"
              onClick={() => GalleryNumb(state)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
