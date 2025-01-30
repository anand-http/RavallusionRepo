import Link from "next/link";
import { CustomButton } from "../common/CustomButton";

const Navbar = () => {
  return (
    <div className="fixed  top-0 !w-full z-[1000] md:px-[8%] 2xl:px-[9%] backdrop-blur-lg ">
      <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[gray]/50 to-transparent"></div>
      <nav className="p-5 w-full flex justify-between items-center backdrop-blur-lg navbar  z-10">
        <Link href="/">
          <i className="text-2xl 2xl:text-3xl font-medium">Ravallusion</i>
        </Link>
        {/* <CustomButton className="mr-5 text-base 2xl:text-xl !m-0">
          <Link href={'/login'}>
            Login
          </Link>
        </CustomButton> */}
      </nav>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[gray]/50 to-transparent"></div>
    </div>
  );
};

export default Navbar;
