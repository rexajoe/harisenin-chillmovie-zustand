import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import LogoBrand from "./components/LogoBrand";
import { Link, useNavigate } from "react-router-dom";
import bgImageDaftar from "../src/assets/background-daftar.jpeg";
import googleLogoDaftar from "./assets/google-logo.png";
import eyeClose from "./assets/eye.png";
import eyeOpen from "./assets/eye-open.png";
import useAuthStore from "./stores/useAuthStore";

const RegisterPage = () => {
  // State untuk username, password, confirm password, dan error
  const { setUsername, setPassword, setConfirmPassword, userExists, addUser } =
    useAuthStore();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Fungsi untuk menangani proses pendaftaran
  const handleRegister = () => {
    setUsername(inputUsername);
    setPassword(inputPassword);
    setConfirmPassword(inputConfirmPassword);
    if (!inputUsername) {
      setError("Username tidak boleh kosong");
      return;
    }
    if (!inputPassword) {
      setError("Kata Sandi tidak boleh kosong");
      return;
    }
    if (inputPassword !== inputConfirmPassword) {
      setError("Kata Sandi tidak sama");
      return;
    }

    if (userExists(inputUsername)) {
      setError("Username sudah terdaftar");
      return;
    }
    addUser({ username: inputUsername, password: inputPassword });
    navigate("/beranda");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageDaftar})` }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg w-[529px] h-auto">
        <LogoBrand />
        {/*Font Lato*/}
        <div style={{ fontFamily: "Lato" }}>
          <div className="text-center mb-6">
            <h2 className="text-white mt-2 text-3xl">Daftar</h2>
            <p className="text-white text-sm mt-1">Selamat Datang!</p>
          </div>

          {/* Input untuk Username */}
          <label className="text-white text-lg">Username</label>
          <CustomInput
            className="mb-5"
            placeholder="Masukkan username"
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />

          {/* Input untuk Kata Sandi */}
          <label className="text-white text-lg">Kata Sandi</label>
          <div className="relative mb-4">
            <CustomInput
              className="mb-2"
              placeholder="Masukkan kata sandi"
              type={showPassword ? "text" : "password"}
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <span
              className="absolute right-5 top-6 transform -translate-y-1/2 cursor-pointer w-5 h-4"
              onClick={togglePasswordVisibility}
            >
              <img
                src={showPassword ? eyeOpen : eyeClose}
                alt={showPassword ? "Hide Password" : "Show Password"}
              />
            </span>
          </div>

          {/* Input untuk Konfirmasi Kata Sandi */}
          <label className="text-white text-lg">Konfirmasi Kata Sandi</label>
          <div className="relative mb-4">
            <CustomInput
              placeholder="Masukkan kata sandi"
              type={showPassword ? "text" : "password"}
              value={inputConfirmPassword}
              onChange={(e) => setInputConfirmPassword(e.target.value)}
            />
            <span
              className="absolute right-5 top-6 transform -translate-y-1/2 cursor-pointer w-5 h-4"
              onClick={togglePasswordVisibility}
            >
              <img
                src={showPassword ? eyeOpen : eyeClose}
                alt={showPassword ? "Hide Password" : "Show Password"}
              />
            </span>
          </div>
          {/* Menampilkan pesan error jika ada */}
          {error && <p className="text-red-500 text-center text-lg">{error}</p>}
          <div className="text-sm mb-4 mt-4">
            <a href="#login" className="text-[#9D9EA1]">
              Sudah punya akun?{" "}
            </a>
            <Link to="/" className="font-bold text-white ml-1">
              Masuk
            </Link>
          </div>

          {/* Tombol untuk Register */}
          <CustomButton
            className="bg-opacity-70 text-center mb-3"
            label="Masuk"
            onClick={handleRegister}
          />

          <p className="text-center text-[#9D9EA1] mb-2">Atau</p>

          {/* Tombol Daftar dengan Google */}
          <CustomButton
            className="bg-opacity-70 text-center"
            icon={googleLogoDaftar}
            label="Daftar dengan Google"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
