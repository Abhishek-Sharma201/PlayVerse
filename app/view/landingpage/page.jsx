import LandingPageFooter from "@/app/self-components/LandingPageFooter";
import LandingPageNav from "@/app/self-components/LandingPageNav";
import ThreeDText from "@/app/self-components/ThreeDText";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-between">
      <LandingPageNav />
      <ThreeDText />
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
