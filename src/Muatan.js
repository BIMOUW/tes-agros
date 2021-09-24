import React from "react";
import { DashboardMuatan } from "./pages/Dashboard_Muatan/Dashboard_Muatan";
import { Footer } from "./pages/Footer/Footer";
import { Layanan } from "./pages/Layanan/Layanan";
import { MuatanTabel } from "./pages/MuatanTabel/MuatanTabel";
import { MuatanPurchase } from "./pages/MuatanPurchase/MuatanPurchase";
import { Navbar } from "./pages/Navbar/Navbar";

export default function Muatan() {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Navbar />
      <DashboardMuatan />
      <div style={{ marginBottom: 40, marginLeft: 139, marginRight: 139 }}>
        <MuatanPurchase />
        <MuatanTabel />
        <Layanan />
      </div>
      <Footer />
    </div>
  );
}
