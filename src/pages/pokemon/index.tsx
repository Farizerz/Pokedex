import React from "react";
import PkmnType from "@atoms/pkmn-type";

const Pokemon: React.FC = () => {
  return (
    <>
      {/* Mobile Version */}
      <div className="flex flex-col gap-4 mx-4">
        <section className="flex flex-row justify-between p-4 items-center shadow-md rounded-lg">
          <div className="text-end">
            <p className="text-sm">#0001</p>
            <span className="flex flex-row items-center gap-1">
              <p>←</p>
              <div className="bg-red-100 w-[40px] h-[40px]"></div>
            </span>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-4xl font-semibold">Clefairy</h1>
            <p>#0001</p>
          </div>
          <div className="text-start">
            <p className="text-sm">#0001</p>
            <span className="flex flex-row items-center gap-1">
              <div className="bg-red-100 w-[40px] h-[40px]"></div>
              <p>→</p>
            </span>
          </div>
        </section>

        <section className="flex flex-col items-center gap-2">
          <div className="w-[360px] h-[360px] bg-red-100 rounded-lg"></div>
          <div className="rounded-lg border border-gray-200 w-full text-center p-2">
            <h1 className="font-semibold mb-2">Evolution Chart</h1>
            <div className="flex flex-row justify-around items-center">
              <div>
                <div className="bg-red-100 w-[40px] h-[40px]"></div>
                <p className="text-sm">#0001</p>
              </div>
              <div className="flex flex-col">
                <p>→</p>
                <p className="text-xs">Lv. 16</p>
              </div>

              <div>
                <div className="bg-red-100 w-[40px] h-[40px]"></div>
                <p className="text-sm">#0001</p>
              </div>
              <div className="flex flex-col">
                <p>→</p>
                <p className="text-xs">Lv. 36</p>
              </div>
              <div>
                <div className="bg-red-100 w-[40px] h-[40px]"></div>
                <p className="text-sm">#0001</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pokemon;
