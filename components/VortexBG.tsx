import React from "react";
import { Vortex } from "./ui/Vortex";

export function VortexDemo() {
  return (
    <div className="w-[100%] mx-auto rounded-md  h-screem overflow-hidden">
      <Vortex
        backgroundColor="#00000"
        rangeY={400}
        rangeSpeed={1}
        particleCount={1000}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
      </Vortex>
    </div>
  );
}
