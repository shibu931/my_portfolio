import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackground() {
  return (
    <div className="fixed top-0 -z-10 flex h-[100vh] w-full items-center justify-center ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#d9d9d9_1px,transparent_1px),linear-gradient(to_bottom,#d9d9d9_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
       <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-[#0e081e] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] "></div>
    </div>
  );
}
