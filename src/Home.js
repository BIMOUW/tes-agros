import { Container } from "react-bootstrap";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Footer } from "./pages/Footer/Footer";
import { Layanan } from "./pages/Layanan/Layanan";
import { Navbar } from "./pages/Navbar/Navbar";
import { Purchase } from "./pages/Purchase/Purchase";
import { Riwayat } from "./pages/Riwayat/Riwayat";

function Home() {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Navbar />
      <div style={{ marginBottom: 40, marginLeft: 139, marginRight: 139 }}>
        <Container>
          <Dashboard />
          <Purchase />
          <Layanan />
          <Riwayat />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
