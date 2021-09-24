import React from "react";
import "./style.css";
import BackGround from "../../assets/Background-blue.png";

export const DashboardMuatan = () => {
  return (
    <div
      style={{
        height: 310,
      }}
    >
      <img
        src={BackGround}
        alt=""
        style={{ height: 310, width: "100%", position: "absolute" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: 139,
          marginRight: 139,
          position: "relative",
        }}
      >
        <div>
          <h1 className="h1-text">Muatan Dikirim</h1>
        </div>
        <div
          style={{
            display: "flex",
            height: 40,
            width: 444,
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Ketik Nomor Purchase Order/Delivery Order"
            style={{ border: "none", height: 40, width: 444, borderRadius: 10 }}
          ></input>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 40,
          width: 800,
          marginLeft: 139,
          marginRight: 139,
          position: "relative",
        }}
      >
        <h1 className="text-navigation">NAVIGATION : </h1>
        <div
          style={{
            width: 126,
            height: 40,
            backgroundColor: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <h1 className="text-navigation">DASHBOARD</h1>
        </div>
        <div
          style={{
            width: 126,
            height: 40,
            backgroundColor: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <h1 className="text-navigation">PO AKTIF</h1>
        </div>
        <div
          style={{
            width: 126,
            height: 40,
            backgroundColor: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <h1 className="text-navigation">RINGKASAN</h1>
        </div>
        <div
          style={{
            width: 226,
            height: 40,
            backgroundColor: "#4c9f70",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <h1 className="text-navigation" style={{ color: "white" }}>
            DELIVERY ORDER AKTIF
          </h1>
        </div>
      </div>
    </div>
  );
};
