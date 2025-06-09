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
    { label: "Khóa học", to: "/courses" },
    { label: "Lớp 1", to: "/courses/lop-1" },
    { label: "Toán lớp 1 nâng cao", to: "/courses/lop-1/toan-nang-cao" },
    { label: "Bài tập cuối chương I" } // không có `to` là node cuối
  ];
  
  export default function RankingTable() {
    // Người dùng hiện tại
    //Xử lý BackEnd ở đây để lấy tên và thứ hạng hiện tạitại
    const currentUserName = "Nguyễn Văn A";
    const currentUserIndex = rankingData.findIndex(user => user.name === currentUserName);
    const currentUserRank = currentUserIndex >= 0 ? currentUserIndex + 1 : null;
    return (
        <div>
            <Header />
            <div className="bg-[#f5f9ff] min-h-screen px-6 py-[4%]">
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

            {/* Footer hiển thị tên và thứ hạng */}
<div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] text-white font-noto z-50 shadow-xl rounded-t-2xl">
  {currentUserRank ? (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 py-3 px-6 text-lg sm:text-xl font-semibold tracking-wide">
      <div className="flex items-center gap-2">
        <span className="text-white/80">👤</span>
        <span className="text-white">Bạn: <strong>{currentUserName}</strong></span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-yellow-300 text-xl">🏆</span>
        <span className="text-white">Thứ hạng: <strong className="text-yellow-300">#{currentUserRank}</strong></span>
      </div>
    </div>
  ) : (
    <div className="text-center py-4 text-lg sm:text-xl">
      Bạn chưa có trong bảng xếp hạng.
    </div>
  )}
</div>


        </div>
    );
  }
  