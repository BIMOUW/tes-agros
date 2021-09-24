import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Truck from "../../assets/truck.png";
import Terkirim from "../../assets/Terkirim.png";
import Dikirim from "../../assets/Dikirim.png";
import Tertunda from "../../assets/Tertunda.png";
import Location from "../../assets/location.png";
import Right_Arrow from "../../assets/right-arrow.png";
import Progress_Bar from "../../assets/Progress-bar.png";

const NomorPurchase = () => {
  return (
    <div className="Order">
      <div style={{ lineHeight: 0.7 }}>
        <div>
          <p className="text-regular">Nomor Purchase Order</p>
        </div>
        <div>
          <h1 className="text-order">AGR001/02/2020#096</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={Progress_Bar} alt="" style={{ width: 687, height: 20 }} />
        </div>
        <div>
          <p className="description-text">Presentase Muatan Kerabat</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 600,
          marginTop: 20,
        }}
      >
        <div style={{ lineHeight: 0.4 }}>
          <h2 className="title-order">Batubara</h2>
          <p className="title-desc">Nama Barang</p>
        </div>
        <div style={{ lineHeight: 0.4 }}>
          <h2 className="title-order">20.000 TON</h2>
          <p className="title-desc">Tonase / Kubikasi</p>
        </div>
      </div>
    </div>
  );
};

const ItemPurchase = ({
  logo,
  title,
  titledescription,
  number,
  footer,
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      className="item-small"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
          lineHeight: 0.9,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              height: 44,
              width: 44,
              backgroundColor: "#4c9f70",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              style={{
                height: 26,
                width: 36,
                alignItems: "center",
              }}
            />
          </div>
        </div>
        <div>
          <h3
            style={{ fontSize: 16, color: `${textColor}` }}
            className="title-text-small"
          >
            {title}
          </h3>
        </div>
        <div>
          <p style={{ fontSize: 12 }} className="description-text">
            {titledescription}
          </p>
        </div>
        <div>
          <h2 className="description-text-number" style={{ fontSize: 24 }}>
            {number}
          </h2>
        </div>
        <div style={{ lineHeight: 0.5 }}>
          <p
            className="description-text-small"
            style={{ color: `${textColor}` }}
          >
            {footer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Data = () => {
  return (
    <div className="item-Status" style={{ backgroundColor: "#EFF8F1" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 50,
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        <div
          style={{
            height: 36,
            width: 36,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            display: "flex",
          }}
        >
          <img
            src={Location}
            alt=""
            style={{
              height: 22,
              width: 22,
              alignItems: "center",
            }}
          />
        </div>
        <div
          style={{
            marginRight: 64,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <p className="text-regular">DO-AGRS-040221.71</p>
        </div>
        <div
          style={{
            height: 36,
            width: 36,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            display: "flex",
          }}
        >
          <img
            src={Right_Arrow}
            alt=""
            style={{
              height: 18,
              width: 18,
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const Purchase = () => {
  return (
    <div style={{ marginTop: 80, marginBottom: 80 }}>
      <div>
        <h1 className="h1-text">Purchase order Anda</h1>
      </div>
      <div className="Purchase">
        <NomorPurchase />
        <div className="Purchase-Item">
          <ItemPurchase
            logo={Truck}
            title={"PO Sisa"}
            titledescription={"Purhcase order yang belum berjalan"}
            number={"400"}
            footer={"Lihat lebih lanjut"}
            backgroundColor={"#EFF8F1"}
            textColor={"#4C9F70"}
          />
          <ItemPurchase
            logo={Truck}
            title={"PO Sisa"}
            titledescription={"Purhcase order yang belum berjalan"}
            number={"200"}
            footer={"Lihat lebih lanjut"}
            backgroundColor={"#FFF3D9"}
            textColor={"#FFBB00"}
          />
        </div>
      </div>

      <div className="Muatan">
        <div className="Status-Muatan">
          <h2 className="h1-text-sub">Status Muatan</h2>
          <p className="text-regular">
            Pilih salah satu menu untuk mendapatkan informasi yang Anda inginkan
            terkait dengan muatan Anda.
          </p>
          <div>
            <div className="Status-Image">
              <p
                style={{
                  marginRight: 20,
                  height: 40,
                  width: 40,
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
              </p>
              <h4 className="text-regular">Terkirim</h4>
            </div>
            <Link to="/muatan">
              <div className="Status-Image">
                <div
                  style={{
                    marginRight: 20,
                    height: 40,
                    width: 40,
                  }}
                >
                  <img
                    src={Dikirim}
                    alt=""
                    style={{
                      height: 40,
                      width: 40,
                      alignItems: "center",
                    }}
                  />
                </div>
                <h4 className="text-regular">Dikirim</h4>
              </div>
            </Link>

            <div className="Status-Image">
              <p
                style={{
                  marginRight: 20,
                  height: 40,
                  width: 40,
                }}
              >
                <img
                  src={Tertunda}
                  alt=""
                  style={{
                    height: 40,
                    width: 40,
                    alignItems: "center",
                  }}
                />
              </p>
              <h4 className="text-regular">Tertunda</h4>
            </div>
          </div>
        </div>
        <div className="Status-Box">
          <div className="Status-Flex">
            <div className="Status">
              <Data />
              <Data />
              <Data />
              <Data />
              <Data />
            </div>
            <div className="Status">
              <Data />
              <Data />
              <Data />
              <Data />
              <Data />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
