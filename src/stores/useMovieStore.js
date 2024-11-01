// useMovieStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMovieStore = create(
  persist(
    (set, get) => ({
      topRatingMovies: [],
      trendingMovies: [],
      newMovies: [],
      continueWatching: [],
      daftarSaya: [],

      // Fungsi untuk mengupdate state dari hasil data API

      setTopRatingMovies: (data) => {
        if (get().topRatingMovies.length === 0) {
          set({ topRatingMovies: data });
        }
      },
      setTrendingMovies: (data) => {
        if (get().trendingMovies.length === 0) {
          set({ trendingMovies: data });
        }
      },
      setNewMovies: (data) => {
        if (get().newMovies.length === 0) {
          set({ newMovies: data });
        }
      },
      setContinueWatching: (data) => {
        if (get().continueWatching.length === 0) {
          set({ continueWatching: data });
        }
      },
      setDaftarSaya: (data) => {
        if (get().daftarSaya.length === 0) {
          set({ daftarSaya: data });
        }
      },
    }),
    {
      name: "movie-storage", // Key untuk localStorage
    }
  )
);

export default useMovieStore;
