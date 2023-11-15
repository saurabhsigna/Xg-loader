import Image from "next/image";
import pardaStyles from "@/styles/parda.module.css";
import BottomNavbar from "@/widgets/bottomNavbar/component";
import LoadingAnimation from "@/widgets/lottie/loadingAnimation";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <div>
      <LoadingAnimation />

      <div className={cn(pardaStyles.parda, "")}>
        <div className="h-[300px] w-[300px]  z-[-1] bg-orange-300"></div>
        <div className="h-[300px] w-[300px] z-[2] bg-pink-300"></div>
        <div className="h-[300px] w-[300px] bg-blue-300"></div>
        <div className={cn("w-full h-auto bg-transparent", pardaStyles.parda)}>
          <img
            src="https://pbs.twimg.com/media/FwA4OFaacAABD2E?format=jpg&name=large"
            className="z-[-1] relative"
          />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
}

// https://pbs.twimg.com/media/FwA4OFaacAABD2E?format=jpg&name=large
