import React, { Suspense } from "react";
import Pages from "./pages";

const RoutePage: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="absolute z-10 w-full h-full rounded-lg flex flex-direction items-center justify-center">
          <span className="loading loading-infinity loading-lg text-blue-500"></span>
        </div>
      }
    >
      <Pages />
    </Suspense>
  );
};

export default RoutePage;
