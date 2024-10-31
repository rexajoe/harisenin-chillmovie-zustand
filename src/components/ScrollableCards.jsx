import HorizontalCards from "./HorizontalCards";
import VerticalCards from "./VerticalCards";
import { useEffect, useState } from "react";

const ScrollableCards = () => {
  const [topRatingMovies, setTopRatingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const topRatingMoviesCache = localStorage.getItem("topRatingMovies");
    const trendingMoviesCache = localStorage.getItem("trendingMovies");
    const newMoviesCache = localStorage.getItem("newMovies");
    const continueWatchingCache = localStorage.getItem("continueWatching");

    if (
      topRatingMoviesCache &&
      trendingMoviesCache &&
      newMoviesCache &&
      continueWatchingCache
    ) {
      setTopRatingMovies(JSON.parse(topRatingMoviesCache));
      setTrendingMovies(JSON.parse(trendingMoviesCache));
      setNewMovies(JSON.parse(newMoviesCache));
      setContinueWatching(JSON.parse(continueWatchingCache));
      setLoading(false);
    } else {
      Promise.all([
        fetch(import.meta.env.VITE_apiTopRatingMovies).then((res) =>
          res.json()
        ),
        fetch(import.meta.env.VITE_apiTrendingMovies).then((res) => res.json()),
        fetch(import.meta.env.VITE_apiNewMovies).then((res) => res.json()),
        fetch(import.meta.env.VITE_apiContinueWatching).then((res) =>
          res.json()
        ),
      ])
        .then(
          ([
            topRatingData,
            trendingData,
            newMoviesData,
            continueWatchingData,
          ]) => {
            setTopRatingMovies(topRatingData);
            setTrendingMovies(trendingData);
            setNewMovies(newMoviesData);
            setContinueWatching(continueWatchingData);

            // Simpan ke localStorage
            localStorage.setItem(
              "topRatingMovies",
              JSON.stringify(topRatingData)
            );
            localStorage.setItem(
              "trendingMovies",
              JSON.stringify(trendingData)
            );
            localStorage.setItem("newMovies", JSON.stringify(newMoviesData));
            localStorage.setItem(
              "continueWatching",
              JSON.stringify(continueWatchingData)
            );

            setLoading(false);
          }
        )
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p className="text-white">Loading movies...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
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
