import React, { useState } from "react";

const BaiTap = () => {
  const [tab, setTab] = useState("baitap");

  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);

  const correctIndex1 = 1; // "4 + 5 = 9"
  const correctIndex2 = 0; // "13"

  const renderOption = (item, idx, selected, setSelected, correctIndex, groupName) => {
    const isSelected = selected !== null;
    const isThisCorrect = idx === correctIndex;
    const isThisSelected = selected === idx;
    const showCorrect = isSelected && isThisCorrect;
    const showWrong = isSelected && isThisSelected && !isThisCorrect;

    return (
      <label
        key={idx}
        className="flex items-center gap-4 mb-4 text-2xl cursor-pointer"
      >
        {/* Ẩn radio mặc định */}
        <input
          type="radio"
          name={groupName}
          className="hidden"
          disabled={isSelected}
          onChange={() => setSelected(idx)}
        />
        {/* Custom radio */}
        <span
          className={`w-7 h-7 rounded-full border-2 border-black  flex items-center justify-center transition
            ${showCorrect ? "bg-[#008000]" : ""}
            ${showWrong ? "bg-[#FF0000]" : ""}
          `}
        ></span>
        {item}
      </label>
    );
  };

  return (
    <div className="mt-6 bg-white rounded-xl px-24 py-4 w-full max-w">
      <div className="flex border-b-2 border-black mb-12 text-3xl py-2 font-montserrat">
        <button
          className={`mr-28 pb-2 font-bold ${tab === "mota" ? "text-[#2054B2] border-b-4 border-[#2054B2]" : "text-black"}`}
          onClick={() => setTab("mota")}
        >
          Mô tả
        </button>
        <button
          className={`pb-2 font-bold ${tab === "baitap" ? "text-[#2054B2] border-b-4 border-[#2054B2]" : "text-black"}`}
          onClick={() => setTab("baitap")}
        >
          Bài tập
        </button>
      </div>

      {tab === "mota" && (
        <p className="text-black text-xl font-montserrat">
          Đây là phần mô tả bài học, có thể giới thiệu khái quát hoặc dẫn dắt nội dung cần học.
        </p>
      )}

      {tab === "baitap" && (
        <div className="space-y-8 font-montserrat">
          <div className="bg-[#E1E4DF] p-4 rounded-2xl">
            <h3 className="text-[#2054B2] font-semibold mb-2 text-3xl py-3">
              Bài tập 1: Chọn phép tính đúng nhất:
            </h3>
            {["3 + 5 = 9", "4 + 5 = 9", "1 + 5 = 8", "5 + 5 = 14"].map((item, idx) =>
              renderOption(item, idx, selected1, setSelected1, correctIndex1, "bt1")
            )}
          </div>

          <div className="bg-[#E1E4DF] p-4 rounded-2xl">
            <h3 className="text-[#2054B2] font-semibold mb-2 text-2xl py-3">
              Bài tập 2: Chọn kết quả đúng cho phép tính 5 + 7:
            </h3>
            {["12", "13", "11", "10"].map((item, idx) =>
              renderOption(item, idx, selected2, setSelected2, correctIndex2, "bt2")
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BaiTap;
