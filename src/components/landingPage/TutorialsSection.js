import { ArrowRight } from "lucide-react";
import { CustomButton } from "../common/CustomButton";
import LandingContainer from "../common/LandingContainer";
import CoursesList from "../common/CoursesList";
import CarouselWrapper from "../common/CarouselWrapper";
import CustomCarousel from "../common/CustomCarousel";

const TutorialsSection = () => {
  return (
    <LandingContainer className="!h-fit py-12 pb-14 flex flex-col gap-10 px-8 ">
      <div className="flex justify-between items-center flex-wrap gap-4 ">
        <div>
          <div className="text-3xl md:text-5xl 2xl:text-6xl font-bold">
            Our Latest Tutorials
          </div>
          <div className="text-base 2xl:text-lg text-[var(--light-gray)]">
            Explore the latest videos in our library
          </div>
        </div>
        {/* <CustomButton className="!p-5 !py-6 !text-base 2xl:!text-lg !rounded-lg">
          Get more videos <ArrowRight />
        </CustomButton> */}
      </div>
        <CoursesList />
    </LandingContainer>
  );
};

export default TutorialsSection;
