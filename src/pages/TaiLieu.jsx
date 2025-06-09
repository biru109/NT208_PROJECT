import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import bongden from "../images/bongden.png";
import bongden1 from "../images/bongden1.png";
import thoigian from "../images/Time.jpg";
import nam from "../images/nam.png";
import taixuong from "../images/taixuong.png";
import jpg from "../images/jpg.png";

const tabs = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5"];

// 🧠 Danh sách tài liệu mẫu theo lớp
const allExamData = {
  "Lớp 1": [
    {
      title: "Đề thi học kỳ 1 - Toán Lớp 1",
      year: 2024,
      time: "40 phút",
      description: "Đề chính thức môn Toán học kỳ 1 lớp 1.",
      fileUrl: "/downloads/toan_lop1_hk1.pdf"
    },
    {
      title: "Đề kiểm tra giữa kỳ 2 - Toán Lớp 1",
      year: 2024,
      time: "40 phút",
      description: "Đề kiểm tra giữa kỳ 2 lớp 1.",
      fileUrl: "/downloads/toan_lop1_hk1.pdf"
    }
  ],
  "Lớp 2": [
    {
      title: "Đề thi cuối năm - Toán Lớp 2",
      year: 2024,
      time: "45 phút",
      description: "Đề thi tổng kết cuối năm môn Toán lớp 2.",
      fileUrl: "/downloads/toan_lop1_hk1.pdf"
    }
  ],
  // Thêm lớp khác nếu có...
};

export default function DeThiTieuHoc() {
  const [selectedTab, setSelectedTab] = useState("Lớp 1");
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // Giả lập lấy dữ liệu theo lớp
    setExams(allExamData[selectedTab] || []);
  }, [selectedTab]);

  return (
    <div>
      <Header />
      <div className="px-4 py-[4%] font-noto bg-[#f5f9ff] min-h-screen">
        <h1 className="text-center text-4xl font-bold mb-4">ĐỀ THI TIỂU HỌC</h1>
        <p className="text-center mb-6 text-xl">
          Tổng hợp đề thi & kiểm tra từ lớp 1 đến lớp 5
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-8 mt-8 space-x-6 sm:space-x-12 md:space-x-20 flex-wrap">
          {tabs.map((tab) => {
            const isSelected = selectedTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl border font-bold text-base sm:text-lg ${
                  isSelected ? "bg-[#3498DB] text-white shadow-lg" : "bg-white shadow-md"
                }`}
              >
                <img
                  src={isSelected ? bongden : bongden1}
                  alt="icon"
                  className="w-5 h-6"
                />
                {tab}
              </button>
            );
          })}
        </div>

        {/* Exam List */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl py-10 px-6 sm:px-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Tài liệu Toán {selectedTab}</h2>
          <div className="inline-block px-4 py-1 bg-[#E9EFF8] rounded-full shadow mb-6">
            <p className="text-lg text-[#2054B2] font-semibold">{exams.length} tài liệu</p>
          </div>

          {exams.length === 0 && (
            <p className="text-center text-gray-500">Hiện chưa có tài liệu cho {selectedTab}</p>
          )}

         <div className="space-y-4">
            {exams.map((exam, index) => (
              <div
                key={index}
                className="px-6 relative cursor-pointer rounded-xl transition-colors duration-300 bg-white hover:bg-[#E9EFF8]"
              >
                {/* Thanh màu xanh bên trái chỉ hiển thị khi hover */}
                <div
                  className="absolute top-0 left-0 h-full w-6 rounded-tl-xl rounded-bl-xl bg-[#2054B2] opacity-0 transition-opacity duration-300 pointer-events-none"
                ></div>

                <div className="pl-6 pr-4 py-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <img src={jpg} alt="icon jpg" className="w-6 h-6" />
                    {exam.title}
                  </h3>
                  <p className="text-sm text-[#808080] mt-1 flex items-center gap-2">
                    <img src={nam} alt="icon năm" className="w-4 h-4" />
                    Năm: {exam.year}
                    <img src={thoigian} alt="icon thời gian" className="w-4 h-4 ml-4" />
                    Thời gian: {exam.time}
                  </p>
                  
                  <p className="text-sm text-gray-600 mt-2">{exam.description}</p>
                  <div className="mt-3 flex justify-end">
                    <a
                      href={exam.fileUrl}
                      download
                      onClick={() => console.log("Đang tải:", exam.fileUrl)} 
                      className="gap-2 px-4 py-2 bg-[#D9D9D9] rounded-md text-sm hover:bg-gray-400 font-bold font-noto flex items-center"
                    >
                      <img src={taixuong} alt="icon" className="w-5 h-5" />
                      Tải về
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
