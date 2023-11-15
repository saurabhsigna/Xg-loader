import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {}
const App: FC<Props> = () => {
  return (
    <div className={cn("flex items-center justify-center w-screen h-screen ")}>
      <div className={cn(`w-[60%] h-[50%] bg-green-200`)}>
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full bg-orange-200"></div>
          <div className="absolute w-full h-full bg-slate-200"></div>
          <div className="absolute w-full h-full bg-blue-300"></div>
          <div className="relative w-full h-full">
            <div className="absolute top-[30%] left-[-10%] w-20 h-20 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
