import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'; // Import Header từ thư mục components
import './Home.css'; // Import file CSS
import giaovien from '../images/giaovien.png'; 
import baigiang from '../images/lesson.png'; 
import baitap from '../images/baitap.png'; 
import LopMenu from "../components/KhoaHoc";
import khoahocImage from "../images/khoahoc.png";
import LessonCard from '../components/BaiHoc';
import BaiTap from '../components/BaiTap';
import Footer from "../components/Footer"

function Home() {
    const [selectedLop, setSelectedLop] = useState("Tất cả");
    const [contact, setContact] = useState(""); // <-- thêm state cho email/sdt
    const [info, setInfo] = useState('');
    const navigate = useNavigate();             // <-- khởi tạo navigate
    const handleRegisterClick = () => {
    navigate('/register', { state: { contact } });
    };

    const danhSachKhoaHoc = [
      {
        ten: "Toán lớp 1: Học số và phép tính cơ bản",
        lop: "Lớp 1",
        baiHoc: 25,
        giaoVien: "Cô Nguyễn Thị Hồng",
        image: khoahocImage,
      },
      {
        ten: "Toán lớp 2: Học số và phép tính cơ bản",
        lop: "Lớp 2",
        baiHoc: 25,
        giaoVien: "Cô Nguyễn Thị Hồng",
        image: khoahocImage,
      },
      {
        ten: "Toán lớp 3: Học số và phép tính cơ bản",
        lop: "Lớp 3",
        baiHoc: 25,
        giaoVien: "Cô Nguyễn Thị Hồng",
        image: khoahocImage,
      },
      {
        ten: "Toán lớp 4: Học số và phép tính cơ bản",
        lop: "Lớp 4",
        baiHoc: 25,
        giaoVien: "Cô Nguyễn Thị Hồng",
        image: khoahocImage,
      },
      {
        ten: "Toán lớp 5: Học số và phép tính cơ bản",
        lop: "Lớp 5",
        baiHoc: 25,
        giaoVien: "Cô Nguyễn Thị Hồng",
        image: khoahocImage,
      },
    ];
  
    const khoaHocLoc = danhSachKhoaHoc.filter(
      (kh) => selectedLop === "Tất cả" || kh.lop === selectedLop
    );

    const lesson = {
        title: "Toán lớp 1: Phép cộng trong pham vi 10",
        videoUrl: "https://www.youtube.com/embed/ND8a3Zkq22w" 
    };

  return (
    <div>
      <Header /> 
      <main className="gioithieu">
        <p className="gt1">Học tập trực tuyến dành cho học sinh Tiểu học</p>
        <p className="gt2">Nền tảng học tập chất lượng cao với video bài giảng sinh động, bài tập thực hành và hệ thống đánh giá kết quả học tập cho học sinh . </p>
        <button className="btgt"> Bắt đầu học ngay! </button>
      </main>

      <div className="gioithieu2">
        <p className="gt3"> Chào mừng đến với HiStudy! </p>
        <p className="gt4"> Chúng tôi cung cấp giải pháp học tập toàn diện giúp học sinh tiểu học phát triển tư duy và kiến thức một cách hiệu quả nhất </p>
        <div className="flex bacot">
            <div className="flex-1 p-4 cot1">
                <img src={giaovien} alt="teacher" className="mx-auto"/>
                <p className="gv1"> Giáo viên chất lượng </p>
                <p className="gv2"> Đội ngũ giáo viên giàu kinh nghiệm, phương pháp giảng dạy sinh động, dễ hiểu phù hợp với lứa tuổi tiểu học.</p>
            </div>

            <div className="flex-1 p-4 cot2">
                <img src={baigiang} alt="lesson" className="mx-auto"/>
                <p className="bg1"> Video bài giảng </p>
                <p className="bg2"> Hàng nghìn video bài giảng chất lượng cao, hình ảnh minh họa trực quan giúp học sinh dễ dàng tiếp thu kiến thức. </p>
            </div>

            <div className="flex-1 p-4 cot3">
                <img src={baitap} alt="assignment" className="mx-auto"/>
                <p className="bt1"> Hệ thống bài tập </p>
                <p className="bt2"> Hệ thống bài tập đa dạng từ cơ bản đến nâng cao, có chấm điểm và đánh giá kết quả ngay sau khi làm bài. </p>
            </div>
        </div>
      </div>
      <div className="KhoaHocNoiBat">
      <div className=" maunen min-h-screen py-10 px-4">
        <h2 className="khoahocnb">Khóa học nổi bật</h2>
  
        <LopMenu selected={selectedLop} onSelect={setSelectedLop} />
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-52 gap-y-24 mt-7 max-w-5xl h-lg mx-auto">
          {khoaHocLoc.map((kh, index) => (
            <div key={index} className="rounded-xl min-h-[350px] bg-white p-4 text-center">
              <img
                src={kh.image}
                alt={kh.ten}
                className="mx-auto mb-1 h-42 object-contain "
              />
              <p className="font-bold text-[#2054B2] text-2xl px-6">{kh.ten}</p>
              <div className="text-sm text-left text-lg">
                <p >🕒 {kh.baiHoc} bài học</p>
                <p>{kh.giaoVien}</p>
              </div>
              <button className="bg-[#386DCC] text-white px-36 py-2 rounded-2xl mt-2 hover:bg-blue-400 transition">
                <p className="text-xl ">Đăng ký </p>
              </button>
            </div>
          ))}
      </div>
      </div>
      </div>
      
      <div className="HocThu">
        <p className="ht1"> Học thử miễn phí</p>
        <p className="ht2"> Cùng trải nghiệm phương pháp giảng dạy sinh động của <span>HiStudy</span> qua các bài học miễn phí nhé!</p>
        <div className="max-w-screen py-16">
            <LessonCard title={lesson.title} videoUrl={lesson.videoUrl} />
        </div>
      </div>

      {/*Bài tập mẫu*/}
      <BaiTap />

      {/*ô nhập email để đăng ký*/}
        <div className="bg-[#398CBF] py-8 px-4 text-center mt-16 text-white">
        <p className="text-4xl font-bold font-montserrat py-3"> Đăng ký ngay để nhận thông tin mới!! </p>
        <p className="text-2xl font-montserrat py-2"> Nhận thông báo về các khóa học, tài liệu miễn phí và các chương trình ưu đãi từ <span className="font-bold"> HiStudy</span>  !! </p>

        <div className="max-w-3xl mx-auto py-12">
          <div className="flex rounded-2xl overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Nhập email hoặc số điện thoại..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="flex-grow font-montserrat text-xl px-5 py-3 text-[#808080] focus:outline-none"
            />
            <button
              onClick={handleRegisterClick}
              className="bg-[#F5BF11] text-white font-bold font-montserrat text-xl px-10 py-3 hover:bg-yellow-400 transition"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
