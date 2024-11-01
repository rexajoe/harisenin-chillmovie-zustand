import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VerticalCards from "./components/VerticalCards";
import { useEffect, useState } from "react";
import useMovieStore from "./stores/useMovieStore";

const DaftarSaya = () => {
  const { setDaftarSaya, daftarSaya } = useMovieStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_apiDaftarSaya);
        const daftarSayaData = await response.json(); // Ambil data JSON dari response
        setDaftarSaya(daftarSayaData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError("Terjadi kesalahan saat mengambil data film.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [setDaftarSaya]);

  if (loading) {
    return <p className="text-white">Loading Movies...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>; // Tambahkan warna merah untuk error
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
