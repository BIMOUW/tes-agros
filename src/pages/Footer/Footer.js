import React from "react";
import "./style.css";
import BackGround from "../../assets/Background-green.png";
import Agros_Logo from "../../assets/logo-agros.png";

export const Footer = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <div className="Footer">
        <img
          src={BackGround}
          alt=""
          style={{ height: 121, width: "100%", position: "absolute" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <img
            src={Agros_Logo}
            alt="Agros_Logo"
            style={{
              width: 168,
              height: 33,
              position: "relative",
            }}
          />
          <p
            style={{ position: "relative", color: "white" }}
            className="footer-text"
          >
            PT ANTAR GLOBAL PROSPERO © 2020. ALL RIGHTS RESERVED.
          </p>
          <p
            style={{ position: "relative", color: "white" }}
            className="footer-text"
          >
            SYARAT & KETENTUAN
          </p>
          <p
            style={{ position: "relative", color: "white" }}
            className="footer-text"
          >
            KEBIJAKAN PRIVASI
          </p>
        </div>
      </div>
    </div>
  );
};
