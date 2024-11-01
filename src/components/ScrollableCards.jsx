import HorizontalCards from "./HorizontalCards";
import VerticalCards from "./VerticalCards";
import { useEffect, useState } from "react";
import useMovieStore from "../stores/useMovieStore"; // Pastikan path ini benar

const ScrollableCards = () => {
  const {
    setTopRatingMovies,
    setTrendingMovies,
    setNewMovies,
    setContinueWatching,
    topRatingMovies, // Pastikan untuk mengambil state ini
    trendingMovies, // Pastikan untuk mengambil state ini
    newMovies, // Pastikan untuk mengambil state ini
    continueWatching, // Pastikan untuk mengambil state ini
  } = useMovieStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        // Melakukan fetch untuk keempat data sekaligus
        const [
          topRatingData,
          trendingData,
          newMoviesData,
          continueWatchingData,
        ] = await Promise.all([
          fetch(import.meta.env.VITE_apiTopRatingMovies).then((res) =>
            res.json()
          ),
          fetch(import.meta.env.VITE_apiTrendingMovies).then((res) =>
            res.json()
          ),
          fetch(import.meta.env.VITE_apiNewMovies).then((res) => res.json()),
          fetch(import.meta.env.VITE_apiContinueWatching).then((res) =>
            res.json()
          ),
        ]);

        // Menyimpan data hasil fetch ke dalam store zustand
        setTopRatingMovies(topRatingData);
        setTrendingMovies(trendingData);
        setNewMovies(newMoviesData);
        setContinueWatching(continueWatchingData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError("Terjadi kesalahan saat mengambil data film."); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [
    setTopRatingMovies,
    setTrendingMovies,
    setNewMovies,
    setContinueWatching,
  ]);

  if (loading) {
    return <p className="text-white">Loading movies...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>; // Tampilkan error jika ada
  }

  return (
    <div>
      <HorizontalCards
        title="Melanjutkan Tonton Film"
        cards={continueWatching}
      />
      <VerticalCards
        title="Top Rating Film dan Series Hari Ini"
        cards={topRatingMovies}
      />
      <VerticalCards title="Film Trending" cards={trendingMovies} />
      <VerticalCards title="Rilis Baru" cards={newMovies} />
    </div>
  );
};

export default ScrollableCards;
