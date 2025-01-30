import Image from "next/image";
import LandingContainer from "../common/LandingContainer";
import { GlowButton } from "../common/CustomButton";
import { createMarkup } from "@/lib/functions";

const HeroSection = ({ data }) => {
  return (
    <LandingContainer
      showBg={true}
      className=" flex items-center flex-wrap-reverse md:flex-nowrap pt-20 md:pt-0 md:px-[7rem] 2xl:px-[10rem] !h-fit md:!h-screen"
    >
      <div className="md:w-[600px]  2xl:w-[800px] flex flex-col gap-8 2xl:gap-9 mt-4  mb-10 md:m-0 z-10">

        <div className=" text-[37px] md:text-5xl 2xl:text-6xl font-bold lg:pt-28">
          {/* Unleash Your Inner Storyteller with{" "}
          <span className="text-[var(--neon-purple)]">Pro-Level</span> Editing
          Skills! */}
          {/* {data.caption} */}
          <div className="leading-[46px] lg:leading-[55px]" dangerouslySetInnerHTML={createMarkup(data.caption)} />
        </div>

        <div className="text-base md:text-lg 2xl:text-xl md:w-[90%] 2xl:w-[75%]">
          {/* Join thousands of creators enhancing their storytelling with our
          expert-led courses. Whether you’re a beginner or a pro, we have
          something for everyone! */}
          {data.description}
        </div>

        <GlowButton className="text-xl 2xl:text-2xl self-start mt-2 md:mt-0 px-14 2xl:px-16 py-7 2xl:py-8 w-40">
          Enroll Now
        </GlowButton>
      </div>
      <div className="md:absolute overflow-hidden md:right-[10rem] md:top-[9rem] w-full md:w-fit flex items-center justify-center z-[1000] ">
        <div className="relative">
          <Image
            src="/hero-image.png"
            width={1000}
            height={1000}
            alt="hero-image"
            className=" w-[350px]  md:w-[500px] 2xl:w-[42rem] 2xl:h-[35rem]"
          />
          <div className="hero-image absolute inset-0 z-[1001] "></div>
        </div>
      </div>
    </LandingContainer>
  );
};

export default HeroSection;
