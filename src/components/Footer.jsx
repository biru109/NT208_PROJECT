import Facebook from "../images/Facebook.png";
import Youtube from "../images/YouTube.png";
import TikTok from "../images/TikTok.png";

export default function Footer() {
  return (
    <footer className="bg-[#313133] text-center py-16 font-montserrat pb-24">
      <h3 className="text-[#F5BF11] font-semibold text-2xl mb-2">
        Kết nối với HiStudy
      </h3>
      <p className="text-white text-xl mb-7">
        Theo dõi chúng tôi để cập nhật<br />
        những thông tin mới nhất
      </p>
      <div className="flex justify-center gap-6">
        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#808080] w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
        >
          <img src={Facebook} alt="Facebook" className="w-6 h-6" />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#808080] w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
        >
          <img src={TikTok} alt="TikTok" className="w-6 h-6" />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#808080] w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
        >
          <img src={Youtube} alt="YouTube" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
