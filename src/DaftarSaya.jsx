import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VerticalCards from "./components/VerticalCards";
import { useEffect, useState } from "react";

const DaftarSaya = () => {
  const [daftarSaya, setDaftarSaya] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const daftarSayaCache = localStorage.getItem("daftarSaya");
    if (daftarSayaCache) {
      setDaftarSaya(JSON.parse(daftarSayaCache));
      setLoading(false);
    } else {
      fetch(import.meta.env.VITE_apiDaftarSaya)
        .then((res) => res.json())

        .then((daftarSayaData) => {
          setDaftarSaya(daftarSayaData);
          localStorage.setItem("daftarSaya", JSON.stringify(daftarSayaData));
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p className="text-white">Loading Movies...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="bg-[#181A1C]">
      <Navbar />
      <VerticalCards title="Daftar Saya" cards={daftarSaya} />
      <Footer />
    </div>
  );
};

export default DaftarSaya;
