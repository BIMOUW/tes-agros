import React from "react";
import "./style.css";
import Terkirim from "../../assets/Terkirim.png";
import Right_Arrow from "../../assets/right-arrow.png";
import ScrollContainer from "react-indiana-drag-scroll";
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
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              width: 60,
              height: 60,
              backgroundColor: "#4c9f70",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <img
              src={Terkirim}
              alt=""
              style={{
                height: 40,
                width: 40,
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
            <h3 className="delivery-title">Pasir Cuci Lumajang</h3>
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
            <p className="delivery-text">Kota Muat</p>
            <h3 className="delivery-title" style={{ color: "#4c9f70" }}>
              Gresik
            </h3>
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
            <p className="delivery-text">Kota Bongkar</p>
            <h3 className="delivery-title" style={{ color: "#FFBB00" }}>
              Lumajang
            </h3>
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
            borderRadius: 10,
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

export const Riwayat = () => {
  return (
    <div style={{ marginTop: 80 }}>
      <div>
        <h1 className="h1-text">Riwayat Purchase Agros</h1>
        <p className="regular-text">
          Purchase order otomatis akan tersimpan dan terkumpul dalam halaman
          riwayat
        </p>
      </div>
      <ScrollContainer className="Riwayat-Wrapper">
        <div className="Riwayat">
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
        </div>
        <div className="Riwayat">
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
        </div>
        <div className="Riwayat">
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
        </div>
      </ScrollContainer>
    </div>
  );
};
