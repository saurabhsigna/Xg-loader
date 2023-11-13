"use client";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "@/public/lottie/loading.json";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {}

const App: React.FC<Props> = () => {
  const loaderControl = useAnimationControls();
  const [hideLoadingScreen, setHideLoadingScreen] = useState(false);
  let loaderVariant = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    hide: {
      opacity: 0,
      y: -200,
      transition: {
        duration: 0.4,
      },
    },
  };
  useEffect(() => {
    // loaderControl.start("show");
    setTimeout(() => {
      loaderControl.start("hide");
      setTimeout(() => {
        setHideLoadingScreen(true);
      }, 1000);
      console.log("heeriye");
    }, 3000);
    // loaderControl.stop();
  }, []);
  return (
    <motion.div
      variants={loaderVariant}
      animate={loaderControl}
      initial={"show"}
      className={cn(
        `flex cursor-wait absolute  overflow-hidden items-center justify-center h-screen w-screen bg-black`,
        hideLoadingScreen == true ? "hidden" : "",
      )}
    >
      <div className="">
        <Lottie animationData={LoadingAnimation} loop={true} />
      </div>
    </motion.div>
  );
};

export default App;
