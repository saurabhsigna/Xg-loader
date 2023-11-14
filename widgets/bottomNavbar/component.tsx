import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {}

let position = "fixed bottom-0";
const App: FC<Props> = () => {
  return (
    <div className="h-16 static mt-10 lg:hidden">
      <div
        className={cn(
          `h-16  w-screen bg-pink-200 grid grid-cols-4 gap-2`,
          position,
        )}
      >
        <div className="flex items-center justify-center">Cart</div>
        <div className="flex items-center justify-center">Categories</div>
        <div className="flex items-center justify-center">Account</div>
        <div className="flex items-center justify-center">Orders</div>
      </div>
    </div>
  );
};

export default App;
