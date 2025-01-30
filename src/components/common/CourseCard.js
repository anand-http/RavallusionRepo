import { Like, Views } from "@/lib/svg_icons";
import Image from "next/image";
import Card from "./Card";
import VideoPlayer from "../dashboard/VideoPlayer";

const CourseCard = ({ course }) => {
  const { title, description, videoUrl,thumbnailUrl} = course.video;

  return (
    <Card className={"group cursor-pointer hover:scale-95 hover:rotate-1"}>
      <Image
        src={thumbnailUrl}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-40 2xl:!h-48 object-cover rounded-2xl"
      />
      
      {/* <VideoPlayer source={videoUrl} poster={thumbnailUrl} /> */}


      <div className="flex flex-col gap-3 2xl:gap-4">
        <div>
          <h3 className="text-lg 2xl:text-2xl font-bold">{title}</h3>
          <p className="text-gray-400 text-xs 2xl:text-base">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs ">
          <span className="flex items-center space-x-1 text-xs 2xl:text-sm">
            <Views />
            <span>{"270k"}</span>
          </span>
          {/* <span className="flex items-center space-x-1">
            <Like />
            <span>{likes}</span>
          </span> */}
        </div>
      </div>


    </Card>
  );
};

export default CourseCard;
