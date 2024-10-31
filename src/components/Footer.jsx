import LogoBrand from "./LogoBrand";
const Footer = () => {
  return (
    <footer className="bg-[#181A1C] text-white p-8 mt-20 border-t-2 border-[#E7E3FC]">
      <div className="grid" style={{ gridTemplateColumns: "1fr 2fr 1fr" }}>
        <div className="content-center">
          <LogoBrand className="flex !justify-start ml-[3vw] text-3xl" />
          <p className="text-[10px] absolute m-auto sm:text-[12px] md:text-[14px] xl:text-[16px] mt-3 ml-[3vw] text-[#C1C2C4]">
            @2023 Chill All Rights Reserved.
          </p>
        </div>
        <div className="grid grid-cols-4 content-center">
          <div>
            <h3 className="absolute right-10 font-bold -mt-3 xl:right-10 xl:relative xl:ml-10 xl:mb-2 xl:text-lg">
              Genre
            </h3>
            <ul className="hidden xl:block xl:text-[14px] xl:text-[#C1C2C4]">
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
          </div>
          <div>
            <ul className="hidden xl:block xl:text-[14px] xl:text-[#C1C2C4] mt-8">
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>KDrama</li>
            </ul>
          </div>
          <div>
            <ul className="hidden xl:block xl:text-[14px] xl:text-[#C1C2C4] mt-8">
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
              <li>Romantis</li>
            </ul>
          </div>

          <ul className="hidden xl:block xl:text-[14px] xl:text-[#C1C2C4] mt-8">
            <li>Sains & Alam</li>
            <li>Thriller</li>
          </ul>
        </div>
        <div className="ml-[14vw] content-center">
          <h3 className="absolute right-10 mt-5 font-bold xl:font-bold xl:ml-9 xl:relative xl:text-lg">
            Bantuan
          </h3>
          <ul className="hidden xl:block xl:text-[14px] xl:text-[#C1C2C4] mt-8">
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
