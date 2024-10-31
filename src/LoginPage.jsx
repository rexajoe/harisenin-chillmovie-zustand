import { useState } from "react";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import LogoBrand from "./components/LogoBrand";
import { Link, useNavigate } from "react-router-dom";
import bgImageLogin from "./assets/background-login.jpeg";
import eyeClose from "./assets/eye.png";
import eyeOpen from "./assets/eye-open.png"

import googleLogo from "./assets/google-logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      navigate('/beranda');
    } else {
      setError('Username / Password tidak sesuai')
    }
  }


  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageLogin})` }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg w-[529px] h-auto">
        <div className="text-center mb-6">
          {/*section logo & brand*/}
          <LogoBrand />
          {/*section subtitle*/}
          <div style={{ fontFamily: "Lato" }}>
            <h2 className="text-white mt-2 text-3xl">Masuk</h2>
            <p className="text-white mt-1 text-sm">Selamat datang kembali!</p>
          </div>
        </div>
        {/*Font Lato*/}
        {/*Username Section*/}
        <div style={{ fontFamily: "Lato" }}>
          <label className="text-white text-lg">Username</label>
          <CustomInput
            type="text"
            className="mb-5"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/*Kata Sandi Section*/}
          <label className="text-white text-lg">Kata Sandi</label>
          <div className="relative mb-4">
            <CustomInput type={showPassword ? 'text' : 'password'} placeholder="Masukkan kata sandi" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <span className="absolute right-5 top-6 transform -translate-y-1/2 cursor-pointer w-5 h-4" onClick={togglePasswordVisibility}>
              <img src={showPassword ? eyeOpen : eyeClose} alt={showPassword ? 'Hide Password' : 'Show Password'} />
            </span>
          </div>
            {error && <p className="text-red-500 text-center mb-4 text-lg">{error}</p>}
          <div className="flex justify-between text-sm mb-4">
            <div href="#register" className="text-[#9D9EA1]">
              Belum punya akun?{" "}
              <Link to="/register" className="font-bold text-white">
                Daftar
              </Link>
            </div>

            <a className="text-white" href="#forgot-password">
              Lupa kata sandi?
            </a>
          </div>
          <CustomButton
            className="bg-opacity-70, text-center, mb-3"
            label="Masuk"
            onClick={handleLogin}
          />
          <p className="text-center text-[#9D9EA1] mb-2">Atau</p>
          <CustomButton
            className="bg-opacity-70, text-center"
            icon={googleLogo}
            label="Masuk dengan Google"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
