// ScrollToTopButton.jsx (hoặc trong cùng file AppContent cũng được)
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Nếu dùng lucide-react hoặc thay bằng icon bạn có

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 👈 hiệu ứng mượt
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#2054B2] text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
