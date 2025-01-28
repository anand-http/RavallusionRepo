"use client";

import Image from "next/image";
import LandingContainer from "../common/LandingContainer";
import CustomCarousel from "../common/CustomCarousel";
import { CarouselItem } from "../ui/carousel";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import EmblaCarousel from "../ui/EmblaCarousel";

const list = [
  {
    id: 1,
    image: "/carousel-1.png",
    title: "Craft Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    key_points: [
      {
        id: 1,
        title: "Intuitive Interface",
        detail: "Effortlessly navigate through editing tools and features.",
      },
      {
        id: 2,
        title: "Customizable Effects",
        detail:
          "Add unique touches to your videos with advanced filters and transitions.",
      },
      {
        id: 3,
        title: "High-Quality Exports",
        detail:
          "Export your projects in various formats without losing resolution.",
      },
    ],
  },
  {
    id: 2,
    image: "/carousel-1.png",
    title: "zcbhsdcb Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    details: [
      {
        id: 1,
        title: "Intuitive Interface",
        detail: "Effortlessly navigate through editing tools and features.",
      },
      {
        id: 2,
        title: "Customizable Effects",
        detail:
          "Add unique touches to your videos with advanced filters and transitions.",
      },
      {
        id: 3,
        title: "High-Quality Exports",
        detail:
          "Export your projects in various formats without losing resolution.",
      },
    ],
  },
  {
    id: 3,
    image: "/carousel-1.png",
    title: "lllll Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    details: [
      {
        id: 1,
        title: "Intuitive Interface",
        detail: "Effortlessly navigate through editing tools and features.",
      },
      {
        id: 2,
        title: "Customizable Effects",
        detail:
          "Add unique touches to your videos with advanced filters and transitions.",
      },
      {
        id: 3,
        title: "High-Quality Exports",
        detail:
          "Export your projects in various formats without losing resolution.",
      },
    ],
  },
  {
    id: 4,
    image: "/carousel-1.png",
    title: "Crappppppft Stories, Frame by Frame!",
    para: "Bring your ideas to life with powerful, easy-to-use editing tools. Transform raw moments into compelling stories, one frame at a time.",
    details: [
      {
        id: 1,
        title: "Intuitive Interface",
        detail: "Effortlessly navigate through editing tools and features.",
      },
      {
        id: 2,
        title: "Customizable Effects",
        detail:
          "Add unique touches to your videos with advanced filters and transitions.",
      },
      {
        id: 3,
        title: "High-Quality Exports",
        detail:
          "Export your projects in various formats without losing resolution.",
      },
    ],
  },
];

const OPTIONS = { loop: true };

const CarouselCard = ({ item }) => {
  return (
    <div className="flex items-center justify-center  ">
      <div className=" relative ">
        {/* <div className="p-[0.4rem] carousel-bg !rounded-md"> */}
          {/* <Image
            src="/carousel-1.png"
            width={1000}
            height={1000}
            alt={item._id}
            className="w-[70vw] h-[65vw] md:w-[50vw] md:h-full rounded-sm  "
          /> */}
          <video src="https://videos.pexels.com/video-files/2098989/2098989-uhd_2560_1440_30fps.mp4"  playsInline autoPlay loop muted className="w-[70vw] h-[65vw] md:w-[50vw] md:h-full rounded-sm"></video>
        {/* </div> */}
        {/* <div className="absolute top-7 left-3 w-[50%] ">
          <div className="text-[0.9rem] font-bold">{item.capyion}</div>
          <div className="text-[0.38rem]   mt-2 w-[5.7rem]">
            {item.description}
          </div>
          <ul className="px-2 list-disc text-[0.38rem]  mt-2 w-[6.8rem]">
            {item.key_points.map((d) => (
              <li key={d._id}>
                <span className="font-bold">{d.title}:</span> {d.explanation}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

const MainCarousel = ({ data }) => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // console.log(screenWidth);
  return (
    <>
      <LandingContainer className="!px-0 flex items-center justify-center !h-fit py-12 sm:py-40 mt-1  overflow-y-visible-visible">
        {screenWidth < 640 ? (
          <CustomCarousel>
            {data.map((item) => (
              <CarouselItem key={item._id} className="basis-[70%]">
                <CarouselCard item={item} />
              </CarouselItem>
            ))}
          </CustomCarousel>
        ) : (
          <>
            <div className="hidden md:flex carousel-left absolute h-full w-[100px] 2xl:w-[200px] z-[100] left-0 " />
            <EmblaCarousel options={OPTIONS} slides={data} />
            <div className="hidden md:flex carousel-right absolute h-full w-[100px] 2xl:w-[200px] z-[100] right-0" />
          </>
        )}
      </LandingContainer>
    </>
  );
};

export default MainCarousel;
