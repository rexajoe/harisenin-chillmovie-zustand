import Navbar from "./components/Navbar";
import PreviewImage from "./components/PreviewImage";
import ScrollableCards from "./components/ScrollableCards";
import Footer from "./components/Footer";

const Beranda = () => {
  return (
    <div className="bg-[#181A1C]">
      <Navbar />
      <PreviewImage />
      <ScrollableCards />
      <Footer />
    </div>
  );
};

export default Beranda;
