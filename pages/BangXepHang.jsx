import Header from '../components/Header'; 
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const rankingData = [
    { name: "Nguyễn Văn A", score: 10, time: "00 : 30 : 00" },
    { name: "Nguyễn Văn B", score: 10, time: "00 : 35 : 00" },
    { name: "Nguyễn Văn C", score: 9, time: "00 : 30 : 00" },
  ];

  const breadcrumbItems = [
    { label: "Trang chủ", to: "/" },
    { label: "Khóa học", to: "/khoa-hoc" },
    { label: "Lớp 1", to: "/khoa-hoc/lop-1" },
    { label: "Toán lớp 1 nâng cao", to: "/khoa-hoc/lop-1/toan-nang-cao" },
    { label: "Bài tập cuối chương I" } // không có `to` là node cuối
  ];
  
  export default function RankingTable() {
    return (
        <div>
            <Header />
            <div className="bg-[#f5f9ff] min-h-screen px-6 py-40">
                {/* Breadcrumb */}
                <Breadcrumb items={breadcrumbItems} />
        
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-8 font-noto">Bảng xếp hạng điểm</h2>
        
                {/* Table */}
                <div className="max-w mx-16 rounded-3xl overflow-hidden font-noto">
                <table className="w-full text-center text-sm">
                    <thead className="bg-[#F5BF11] text-black font-semibold text-xl">
                    <tr>
                        <th className="py-3">STT</th>
                        <th className="py-3">Họ tên</th>
                        <th className="py-3">Điểm số</th>
                        <th className="py-3">Thời gian làm bài</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rankingData.map((item, index) => (
                        <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-[#E2E0C8]" : "bg-white"}
                        >
                        <td className="py-3 text-lg">{index + 1}</td>
                        <td className="py-3 text-lg">{item.name}</td>
                        <td className="py-3 text-lg">{item.score}</td>
                        <td className="py-3 text-lg">{item.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
  }
  