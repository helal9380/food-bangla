/** @format */

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <div >
      <AwesomeSlider
        media={[
          {
            source: "../../../src/assets/home/01.jpg",
          },
          {
            source: "../../../src/assets/home/02.jpg",
          },
          {
            source: "../../../src/assets/home/03.png",
          },
        ]}
      />
    </div>
  );
};

export default Slider;
