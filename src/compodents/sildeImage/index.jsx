import React, { useState } from "react";

import Image1 from "../../assets/image/images-1.jpg";
import Image2 from "../../assets/image/images-2.jpg";
import Image3 from "../../assets/image/images-3.jpg";
import Image4 from "../../assets/image/images-4.jpg";
import Image5 from "../../assets/image/images-5.jpg";

function SlideImages() {
  const ImgList = [Image1, Image2, Image3, Image4, Image5];
  console.log("array", ImgList);

  const [index, setIndex] = useState(0);
  const onNextImage = () => {
    if (index + 1 < ImgList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const onBackImage = () => {
    if (index - 1 > 0) {
      setIndex(index - 1);
    } else setIndex(ImgList.length - 1);
  };

  return (
    <div >
      <TabItem
        onNextImage={onNextImage}
        onBackImage={onBackImage}
        index={index}
        ImgList={ImgList}
      />
    </div>
  );
}

export default SlideImages;

const TabItem = ({ onNextImage, onBackImage, index, ImgList }) => {
  return (
    <div>
      <img style={{ width: "350px", height: "250px" }} src={ImgList[index]} />
      <div className="d-flex align-items-center justify-content-center">
        <button onClick={onBackImage} className="btn btn-secondary mt-3 w-auto">
          {" "}
          back
        </button>

        <button onClick={onNextImage} className="btn btn-secondary mt-3 w-auto">
          {" "}
          Next
        </button>
      </div>
    </div>
  );
};
