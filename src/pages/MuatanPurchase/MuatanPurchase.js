import React from "react";
import "./style.css";
import Truck_Green from "../../assets/truck-green.png";
import Terkirim from "../../assets/Terkirim.png";
import Dikirim from "../../assets/Dikirim.png";
import Tertunda from "../../assets/Tertunda.png";
import Agros_Pay from "../../assets/Agros_Pay.png";
import { ItemMedium } from "../../card/Item";
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
          <img src={Progress_Bar} alt="" style={{ width: 500, height: 20 }} />
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
          width: 500,
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
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              style={{
                height: 36,
                width: 36,
                alignItems: "center",
              }}
            />
          </div>
        </div>
        <div>
          <h3
            style={{ fontSize: 20, color: `${textColor}` }}
            className="title-text-medium"
          >
            {title}
          </h3>
        </div>
        <div>
          <p style={{ fontSize: 12 }} className="description-text-medium">
            {titledescription}
          </p>
        </div>
        <div>
          <h2 className="description-text-number" style={{ fontSize: 20 }}>
            {number}
          </h2>
        </div>
        <div style={{ lineHeight: 1 }}>
          <p className="description-text-small">{footer}</p>
        </div>
      </div>
    </div>
  );
};

export const MuatanPurchase = () => {
  return (
    <div style={{ marginBottom: 80, marginTop: -120, position: "relative" }}>
      <div className="Purchase">
        <NomorPurchase />
        <div className="Purchase-Item">
          <ItemPurchase
            logo={Terkirim}
            title={"Terkirim"}
            titledescription={"Muatan Anda telah terbongkar di tujuan."}
            number={"396"}
            footer={"Lihat lebih lanjut"}
            backgroundColor={"#F8F8F8"}
            textColor={"#4C9F70"}
          />
          <ItemPurchase
            logo={Dikirim}
            title={"Dikirim"}
            titledescription={"Muatan Anda sedang dalam perjalanan."}
            number={"200"}
            footer={"Anda Berada Disini"}
            backgroundColor={"#E5F8FC"}
            textColor={"#517CA7"}
          />
          <ItemPurchase
            logo={Tertunda}
            title={"Tertunda"}
            titledescription={"Muatan Anda mengalami keterlambatan"}
            number={"4"}
            footer={"Lihat lebih lanjut"}
            backgroundColor={"#F8F8F8"}
            textColor={"#826fce"}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ItemMedium
          logo={Truck_Green}
          imageBackgroundColor={""}
          title={"DO Sisa"}
          description={
            "Delivery order yang sedang kami proses dalam pengiriman."
          }
          number={"200"}
          footer={"Lihat Tagihan Anda"}
        />
        <ItemMedium
          logo={Truck_Green}
          title={"DO Aktif"}
          description={
            "Delivery order yang sedang kami proses dalam pengiriman."
          }
          number={"400"}
          footer={"Lihat Tagihan Anda"}
        />
        <ItemMedium
          logo={Agros_Pay}
          title={"Agros Messenger"}
          description={
            "Interaksi eksklusif 1-ON-1 bersama Agros Sales / Admin sesuai dengan Office Hours."
          }
          footer={"Lihat Tagihan Anda"}
        />
        <ItemMedium
          logo={Agros_Pay}
          title={"Agros Pay"}
          description={
            "Halaman pembayaran eksklusif yang menawarkan kemudahan untuk muatan Anda."
          }
          footer={"Lihat Tagihan Anda"}
        />
      </div>
    </div>
  );
};
