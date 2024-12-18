"use client";

import React, { useEffect } from "react";
import LandingPage from "./view/landingpage/page";
import Home from "./view/Home/page";
import { useRouter } from "next/navigation";

const page = () => {
  const isLoggegIn = true;
  const router = useRouter();

  useEffect(() => {
    if (isLoggegIn) return router.push("/view/Home");
    return router.push("/view/landingpage");
  }, []);
  return;
};

export default page;
