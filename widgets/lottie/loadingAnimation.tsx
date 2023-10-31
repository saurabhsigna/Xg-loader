"use client";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "@/public/lottie/loading.json";
import { motion, useAnimationControls } from "framer-motion";

interface Props {}

const App: React.FC<Props> = () => {
  const loaderControl = useAnimationControls();
  const [hideLoadingScreen, setHideLoadingScreen] = useState(false);
  let loaderVariant = {
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };
  useEffect(() => {
    // loaderControl.start("show");
    setTimeout(() => {
      loaderControl.start("hide");
      setHideLoadingScreen(true);
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
      )}
    >
      <div className="">
        <Lottie animationData={LoadingAnimation} loop={true} />
      </div>
    </motion.div>
  );
};

export default App;
