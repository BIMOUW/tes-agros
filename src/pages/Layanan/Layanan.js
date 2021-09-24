import React from "react";
import "./style.css";
import Image from "../../assets/Capture.JPG";
import Image2 from "../../assets/Capture2.JPG";
import Image3 from "../../assets/Capture3.JPG";
import Image4 from "../../assets/Capture4.JPG";
import ScrollContainer from "react-indiana-drag-scroll";

const LayananImage = ({ image }) => {
  return (
    <div className="item-Layanan">
      <img src={image} alt="" style={{ height: 260, alignItems: "center" }} />
    </div>
  );
};

export const Layanan = () => {
  return (
    <div>
      <div>
        <h1 className="h1-text">Layanan Agros</h1>
        <p className="regular-text">
          Your Truly Logistics Solutions, Agros selalu memberi kemudahan dan
          kenyamanan untuk Anda.
        </p>
        <p className="description-text-small">Homepage Kami</p>
      </div>
      <ScrollContainer className="Layanan" id="Layanan">
        <LayananImage image={Image} />
        <LayananImage image={Image2} />
        <LayananImage image={Image3} />
        <LayananImage image={Image4} />
      </ScrollContainer>
    </div>
  );
};

// const slider = document.getElementById("Layanan");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3;
//   slider.scrollLeft = scrollLeft - walk;
// });
