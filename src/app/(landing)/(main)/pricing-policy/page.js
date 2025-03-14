"use client";
import LandingContainer from "@/components/common/LandingContainer";
import PageLoader from "@/components/common/PageLoader";
import StaticHeader from "@/components/landingPage/StaticHeader";
import { getStaticData } from "@/lib/fetchData";
import ParsedData from "../../../../components/common/ParsedData";
import { useGetPricingPolicyQuery } from "@/store/Api/home";

const list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Pricing Policy",
    link: "/pricing-policy",
  },
];

const PricingPolicyPage = () => {
  const { data, isLoading } = useGetPricingPolicyQuery();

  const heading = data?.data?.page?.title
  const description = data?.data?.page?.description

  const subHeading = (
    <>Everything you need to know about the Platform and billing.</>
  );
  return isLoading ? <PageLoader /> : (
    <LandingContainer className="flex flex-col items-center !h-fit" bg2={true}>
      <StaticHeader list={list} heading={heading} subHeading={subHeading} />
      <ParsedData data={description} />
    </LandingContainer>
  );
};

export default PricingPolicyPage;
