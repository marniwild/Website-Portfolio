import React, { useState } from "react";
import LogoImg from "../../static/logo_img.png";

const Project = () => {
  const [element, setElement] = useState({
    arr: [
      { link: "https://spacepants.herokuapp.com/#/", img: LogoImg },
      { link: "https://spacepants.herokuapp.com/#/", img: LogoImg },
      { link: "https://spacepants.herokuapp.com/#/", img: LogoImg },
      { link: "https://spacepants.herokuapp.com/#/", img: LogoImg },
    ],
  });
  // console.log(element)
  return element.arr.map((e) => (
    <a href={e.link}>
      <view> {console.log(e)}</view>

      <img src={e.img} class="project-img" />
    </a>
  ));
};

export default Project;
