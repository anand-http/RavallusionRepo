import LandingContainer from "../common/LandingContainer";
import CoursesList from "../common/CoursesList";

const TutorialsSection = ({data}) => {
  return (
    <LandingContainer className="!h-fit flex flex-col gap-10 px-8 sm:mt-[-30px]">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <div className="text-3xl mb-2 md:text-5xl 2xl:text-6xl font-bold">
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
        <CoursesList data={data} />
    </LandingContainer>
  );
};

export default TutorialsSection;
