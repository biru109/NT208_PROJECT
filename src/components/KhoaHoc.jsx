import React from "react";

const LopMenu = ({ selected, onSelect }) => {
  const lopOptions = ["Tất cả", "Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5"];

  return (
    <div className="flex gap-12 px-2 py-5 rounded-lg justify-center flex-wrap">
      {lopOptions.map((lop) => (
        <button
          key={lop}
          onClick={() => onSelect(lop)}
          className={`px-8 py-2 rounded-full text-2xl font-medium transition ${
            selected === lop ? "bg-[#386DCC] text-white" : "bg-white text-black"
          }`}
        >
          {lop}
        </button>
      ))}
    </div>
  );
};

export default LopMenu;
