import { useRef } from "react";

const HorizontalCards = ({ title, cards }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const distance = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <div
      className="text-white ml-[5vw] mr-[5vw]"
      style={{ fontFamily: "Lato" }}
    >
      <div className="relative mb-5 text-[20px] md:text-[32px] mt-14 w-full">
        <label>{title}</label>
        <div className="absolute z-30 flex justify-between -left-6 -right-6 -bottom-32">
          <span
            className="hidden bg-[#2F3334] outline outline-[#E7E3FC] outline-1 rounded-full cursor-pointer text-md md:inline-flex items-center justify-center w-12 h-12"
            onClick={() => scroll("left")}
          >
            &larr;
          </span>

          <span
            className="hidden bg-[#2F3334] outline outline-[#E7E3FC] outline-1 rounded-full cursor-pointer text-md md:inline-flex items-center justify-center w-12 h-12"
            onClick={() => scroll("right")}
          >
            &rarr;
          </span>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap w-full relative justify-between flex gap-[24px]"
      >
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-[309px] md:w-[302px] h-[151px] md:h-[162px] inline-block rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent rounded-lg z-10"></div>
            <div className="flex content-center justify-between w-[286px] absolute bottom-2 left-2 text-white z-20">
              <p>{card.filmTitle}</p>
              <p>&#9733; {card.filmRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
