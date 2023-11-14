import Image from "next/image";
import styles from "./page.module.css";
import BottomNavbar from "@/widgets/bottomNavbar/component";
import LoadingAnimation from "@/widgets/lottie/loadingAnimation";
export default function Home() {
  return (
    <div>
      <LoadingAnimation />

      <div>
        <div className="h-[300px] w-[300px] bg-orange-300"></div>
        <div className="h-[300px] w-[300px] bg-pink-300"></div>
        <div className="h-[300px] w-[300px] bg-blue-300"></div>
      </div>
      <BottomNavbar />
    </div>
  );
}
