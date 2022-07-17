import { useState, useRef } from "react";
import "../../css/VideoSection/VideoSection.css";
import Vid from "../../assets/meal.mp4";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const VideoSection = () => {
  const [play, setPlay] = useState(false);
  const playvideo = useRef();
  const videoPlay = () => {
    setPlay(!play);
    if (!play) {
      playvideo.current.play();
    } else {
      playvideo.current.pause();
    }
  };
  return (
    <div className="videosrction">
      <span onClick={videoPlay}>
        {play ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
      </span>

      <video src={Vid} autoPlay={false} muted ref={playvideo}></video>
    </div>
  );
};

export default VideoSection;
