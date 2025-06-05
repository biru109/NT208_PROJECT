import React, { useState, useEffect } from "react";
import Header from '../components/Header'; 
import bongden from "../images/bongden.png";
import bongden1 from "../images/bongden1.png";
import thoigian from "../images/Time.jpg";
import nam from "../images/nam.png";
import taixuong from "../images/taixuong.png";
import jpg from "../images/jpg.png";

const tabs = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5"];

export default function DeThiTieuHoc() {
  const [selectedTab, setSelectedTab] = useState("Lớp 1");
  const [exams, setExams] = useState([]); // Dữ liệu đề thi từ backend

  useEffect(() => {
    // TODO: Thay đoạn fetch giả lập này bằng gọi API backend thật
    // Ví dụ: fetch(`/api/exams?grade=${selectedTab}`)
    const fetchExams = async () => {
      // Giả lập dữ liệu backend trả về theo lớp học (selectedTab)
      // Bạn thay phần này bằng API call thực tế
      const data = [
        {
          title: `Đề thi học kỳ 1 - Toán ${selectedTab}`,
          year: 2023,
          time: "40 phút",
          description: `Đề thi chính thức học kỳ 1 môn Toán ${selectedTab} năm học 2023 - 2024.`,
        },
        {
          title: `Đề kiểm tra giữa kỳ 2 - Toán ${selectedTab}`,
          year: 2023,
          time: "40 phút",
          description: `Đề kiểm tra chất lượng giữa học kỳ 2 môn Toán ${selectedTab}`,
        },
        {
          title: `Đề thi cuối năm - Toán ${selectedTab}`,
          year: 2023,
          time: "40 phút",
          description: `Đề thi tổng kết cuối năm học môn Toán ${selectedTab} năm học 2022-2023.`,
        },
      ];
      setExams(data);
    };

    fetchExams();
  }, [selectedTab]); // mỗi khi đổi tab thì gọi lại fetch

  return (
    <div>
      <Header />
      <div className="px-4 py-[4%] font-noto bg-[#f5f9ff] min-h-screen">
        <h1 className="text-center text-4xl font-bold mb-4">ĐỀ THI TIỂU HỌC</h1>
        <p className="text-center mb-6 text-xl">
          Tổng hợp các đề thi học kỳ, đề kiểm tra chất lượng dành cho học sinh từ lớp 1 đến lớp 5
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-8 mt-8 space-x-20">
          {tabs.map((tab) => {
            const isSelected = selectedTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`flex items-center gap-2 px-4 py-4 rounded-2xl border font-bold font-montserrat text-xl ${
                  isSelected ? "bg-[#3498DB] text-white shadow-lg" : "bg-white shadow-md"
                }`}
              >
                <img
                  src={isSelected ? bongden : bongden1}
                  alt="Bóng đèn"
                  className="w-5 h-6"
                />
                {tab}
              </button>
            );
          })}
        </div>

        {/* Exam List */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl py-10 px-20 shadow-lg">
          <h2 className="text-2xl font-bold font-noto mb-4">Đề thi Toán {selectedTab}</h2>
          <div className="inline-block px-4 py-1 bg-[#E9EFF8] rounded-full shadow-xl mb-6">
            <p className="text-lg text-[#2054B2] font-semibold ">{exams.length} đề thi</p>
          </div>

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

                <div className="pl-10 pr-20 py-4 rounded-tr-xl rounded-br-xl">
                  <h3 className="font-bold text-xl flex items-center gap-2 py-2">
                    <img src={jpg} alt="icon jpg" className="inline-block w-6 h-8" /> {exam.title}
                  </h3>
                  <p className="text-lg text-[#808080] mb-1 flex items-center gap-1">
                    <img src={nam} alt="icon năm" className="inline-block w-4 h-4" />
                    Năm: {exam.year}
                    <img src={thoigian} alt="icon thời gian" className="inline-block w-4 h-4 ml-2" />
                    Thời gian: {exam.time}
                  </p>
                  <p className="text-lg text-[#808080] pt-4">{exam.description}</p>
                  <div className="mt-3 flex justify-end">
                    <button className="gap-2 px-4 py-1 bg-[#D9D9D9] rounded-md text-lg hover:bg-gray-400 font-bold font-noto flex items-center">
                      <img src={taixuong} alt="icon taixuong" className="inline-block w-5 h-5 ml-2" />
                      Tải về
                    </button>
                  </div>
                </div>

                <style jsx>{`
                  div.relative:hover > div.absolute {
                    opacity: 1;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
