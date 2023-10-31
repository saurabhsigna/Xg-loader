import Image from "next/image";
import styles from "./page.module.css";
import LoadingAnimation from "@/widgets/lottie/loadingAnimation";
export default function Home() {
  return (
    <div>
      <LoadingAnimation />
      <div>hello users </div>
    </div>
  );
}
