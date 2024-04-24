import React from "react";

interface IPkmnType {
  name: string;
}

const colorData = [
  {
    name: "normal",
    color: "bg-slate-400",
  },
  {
    name: "ground",
    color: "bg-amber-900",
  },
];

const PkmnType: React.FC<IPkmnType> = ({ name }) => {
  const currentColor = colorData.find(
    (color) => color.name === name.toLowerCase()
  )?.color;
  return (
    <div>
      <button className={`${currentColor} w-auto px-2 py-1 rounded-md`}>
        <p className="text-sm font-semibold text-white drop-shadow-md">
          {name}
        </p>
      </button>
    </div>
  );
};

export default PkmnType;
