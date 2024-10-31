import { VolumeOffIcon } from "@heroicons/react/outline";
import dutyAfterSchool from "../assets/dutyafterschool.png";

const MuteButton = () => {
  return (
    <button className="bg-transparent text-[#C1C2C4] outline outline-1 rounded-full px-3 py-1">
      <VolumeOffIcon className="w-6 h-6" />
    </button>
  );
};

const PreviewImage = () => {
  return (
    <div className="relative">
      <img src={dutyAfterSchool} alt="Preview" className="w-full" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-transparent to-transparent z-10"
        style={{ fontFamily: "Lato" }}
      >
        <div className="bottom-5 absolute md:h-1/2 left-[5vw] right-[5vw] sm:bottom-[10vw]">
          <h1 className="text-white -mb-5 md:mb-auto text-[24px] p-4 md:text-[48px]">
            Duty After School
          </h1>
          <p className="text-[12px] text-white sm:text-[14px] p-4 leading-relaxed lg:text-[18px] xl:text-[24px] lg:leading-loose">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            <br />
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa
            <br /> sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
          <div className="absolute flex w-full justify-between lg:bottom-0">
            <div className="flex justify-around gap-[2vw]">
              <button className="bg-[#0f1e93] text-white px-3 py-1 lg:px-7 lg:py-3 rounded-full">
                Mulai
              </button>
              <button className="bg-[#22282A] text-white rounded-full px-4 py-2">
                ⓘ Selengkapnya
              </button>
              <button className="bg-transparent text-[#C1C2C4] outline outline-1 rounded-full px-3 py-1">
                18+
              </button>
            </div>
            <MuteButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewImage;
