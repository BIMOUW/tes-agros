import React from "react";
import "./style.css";
import Truck_Blue from "../../assets/truck-blue.png";
import Right_Arrow from "../../assets/right-arrow.png";

const Data = () => {
  return (
    <div className="item-Riwayat">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          marginLeft: 12,
          marginRight: 12,
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              width: 60,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={Truck_Blue}
              alt=""
              style={{
                height: 60,
                width: 60,
                alignItems: "center",
              }}
            />
          </div>
          <div style={{ lineHeight: 0.02, marginLeft: 20 }}>
            <p className="delivery-text">No. Delivery Order</p>
            <h3 className="delivery-title">DO-ARGS-240521.1228</h3>
            <p className="delivery-text">Total 1 Ritase</p>
          </div>
        </div>
        <div
          style={{ lineHeight: 0.02, display: "flex", alignItems: "center" }}
        >
          <div
            style={{ height: 60, width: 2, backgroundColor: "#00000029" }}
          ></div>
          <div style={{ marginLeft: 20 }}>
            <p className="delivery-text">Nama Barang</p>
            <h3 className="delivery-title">Gipsum</h3>
            <p className="delivery-text">35 Ton</p>
          </div>
        </div>
        <div
          style={{ lineHeight: 0.02, display: "flex", alignItems: "center" }}
        >
          <div
            style={{ height: 60, width: 2, backgroundColor: "#00000029" }}
          ></div>
          <div style={{ marginLeft: 20 }}>
            <p className="delivery-text">Kota Bongkar</p>
            <h3 className="delivery-title">Tuban</h3>
            <p className="delivery-text">22/12/2020</p>
          </div>
        </div>
        <div
          style={{ lineHeight: 0.02, display: "flex", alignItems: "center" }}
        >
          <div
            style={{ height: 60, width: 2, backgroundColor: "#00000029" }}
          ></div>
          <div style={{ marginLeft: 20 }}>
            <p className="delivery-text">Status</p>
            <h3 className="delivery-title">Dikirim</h3>
            <p className="delivery-text">22/12/2020</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 60,
            height: 60,
            backgroundColor: "#ddd",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Right_Arrow}
            alt=""
            style={{
              height: 26,
              width: 26,
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const MuatanTabel = () => {
  return (
    <div>
      <div className="Riwayat-Wrapper">
        <div className="Riwayat">
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
        </div>
      </div>
    </div>
  );
};
