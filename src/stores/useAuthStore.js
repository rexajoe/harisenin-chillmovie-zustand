// useAuthStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      users: [], // Array untuk menyimpan daftar pengguna
      username: "",
      password: "",
      confirmPassword: "",
      setUsername: (username) => set({ username }),
      setPassword: (password) => set({ password }),
      setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
      clearCredentials: () =>
        set({ username: "", password: "", confirmPassword: "" }),

      // Fungsi untuk menambahkan pengguna baru
      addUser: (newUser) => {
        const users = get().users;
        set({ users: [...users, newUser] });
      },

      // Fungsi untuk mengecek apakah username sudah ada
      userExists: (username) => {
        const users = get().users;
        return users.some((user) => user.username === username);
      },
    }),
    {
      name: "auth-storage", // key untuk localStorage
    }
  )
);

export default useAuthStore;
