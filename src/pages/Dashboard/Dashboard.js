import React from "react";
import "./style.css";
import { ItemBig, ItemLong, ItemMedium, ItemSmall } from "../../card/Item";
import User_Logo from "../../assets/user-logo.png";
import Plus_Logo from "../../assets/plus-logo.png";
import BackGroundImage from "../../assets/Background-Image.png";
import Settings from "../../assets/Pengaturan.png";
import Path from "../../assets/Path.png";
import Document_Check from "../../assets/document_check.png";
import Document_Yellow from "../../assets/document_yellow.png";
import Agros_Pay from "../../assets/Agros_Pay.png";
import Agros_Vector from "../../assets/Agros_Vector.png";

export const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="h1-text">Dashboard Kerabat</h1>
      </div>
      <div className="Navigation">
        <div className="item-Navigation">
          <h1 className="text-navigation"> NAVIGATION : </h1>
        </div>
        <div className="item-Dashboard">
          <h1 className="text-navigation">DASHBOARD</h1>
        </div>
      </div>
      <div className="Dashboard-Item-1">
        <ItemBig
          logo={User_Logo}
          backgroundColor={"white"}
          displayBackground={"none"}
          title={"PT ANTAR GLOBAL PROSPERO"}
          description={"+62 (31) 3974550 antarglobalprospero@gmail.com"}
          titleColor={"black"}
          descriptionColor={"black"}
          image={Settings}
        />
        <ItemBig
          logo={Plus_Logo}
          backgroundImage={BackGroundImage}
          title={"TAMBAH PURCHASE ORDER"}
          description={"Purchase order dapat dilakukan dalam Agros Shipper"}
          titleColor={"white"}
          descriptionColor={"white"}
          image={Path}
        />
        <ItemSmall
          logo={Document_Check}
          title={
            <React.Fragment>
              PO <span style={{ fontWeight: "normal" }}>Aktif</span>
            </React.Fragment>
          }
          titledescription={
            <React.Fragment>
              Purchase order yang{" "}
              <span style={{ fontWeight: "bold" }}>sedang berjalan</span>
            </React.Fragment>
          }
          number={"10"}
          footer={"Lihat lebih lanjut"}
          backgroundColor={"#EFF8F1"}
          textColor={"#4C9F70"}
        />
        <ItemSmall
          logo={Document_Yellow}
          title={
            <React.Fragment>
              PO <span style={{ fontWeight: "normal" }}>Sisa</span>
            </React.Fragment>
          }
          titledescription={"Purhcase order yang belum berjalan"}
          number={"2"}
          footer={"Lihat lebih lanjut"}
          backgroundColor={"#FFF3D9"}
          textColor={"#FFBB00"}
        />
      </div>
      <div className="Dashboard-Item-2">
        <ItemMedium
          logo={Agros_Pay}
          title={
            <React.Fragment>
              Agros <span style={{ fontWeight: "lighter" }}>Messenger</span>
            </React.Fragment>
          }
          description={
            "Halaman pembayaran eksklusif yang menawarkan kemudahan untuk muatan Kerabat."
          }
          footer={
            <React.Fragment>
              <span style={{ fontWeight: "bold", marginRight: 5 }}>
                MON - FRI
              </span>
              <span style={{ fontWeight: "lighter" }}>09.00 - 17.00</span>
            </React.Fragment>
          }
        />
        <ItemMedium
          logo={Agros_Pay}
          title={
            <React.Fragment>
              Agros <span style={{ fontWeight: "lighter" }}>Pay</span>
            </React.Fragment>
          }
          description={
            "Halaman pembayaran eksklusif yang menawarkan kemudahan untuk muatan Kerabat."
          }
          footer={"Lihat Tagihan Anda"}
        />
        <ItemLong
          logo={Agros_Pay}
          title={"Kritik atau Saran?"}
          description={
            "Halaman pembayaran eksklusif yang menawarkan kemudahan untuk muatan Kerabat."
          }
          footer={"Lihat Lebih Lanjut"}
          image={Agros_Vector}
        />
      </div>
    </div>
  );
};
