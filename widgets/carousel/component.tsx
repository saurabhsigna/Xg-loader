import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {}
const App: FC<Props> = () => {
  return (
    <div className={cn("flex items-center justify-center w-screen h-screen ")}>
      <div className={cn(`w-[60%] h-[50%] bg-pink-200`)}>
        <div className="relative">
          <div className=" w-[100px] h-[100px] bg-orange-200"></div>
          <div className="absolutebso w-[150px] h-[150px] bg-slate-200"></div>
          <div className="absolute w-[200px] h-[200px] bg-blue-300"></div>
        </div>
      </div>
    </div>
  );
};
export default App;
