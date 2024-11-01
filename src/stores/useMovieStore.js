// useMovieStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMovieStore = create(
  persist(
    (set) => ({
      topRatingMovies: [],
      trendingMovies: [],
      newMovies: [],
      continueWatching: [],
      daftarSaya: [],

      // Fungsi untuk mengupdate state dari hasil data API
      setTopRatingMovies: (data) => set({ topRatingMovies: data }),
      setTrendingMovies: (data) => set({ trendingMovies: data }),
      setNewMovies: (data) => set({ newMovies: data }),
      setContinueWatching: (data) => set({ continueWatching: data }),
      setDaftarSaya: (data) => set({ daftarSaya: data }),
    }),
    {
      name: "movie-storage", // Key untuk localStorage
    }
  )
);

export default useMovieStore;
