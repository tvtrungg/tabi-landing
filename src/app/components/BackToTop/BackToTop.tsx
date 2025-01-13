"use client";
import { useEffect, useState } from "react";
import "./BackToTop.css";
import { IoIosArrowUp } from "react-icons/io";
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra xem người dùng đã cuộn đủ xa để hiển thị nút BackToTop hay không
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Xóa event listener khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="back-to-top cursor-pointer fixed right-10 bottom-[20%] font-bold"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {isVisible && (
        <span className="rounded-full w-9 h-9 bg-[#00000088] hover:bg-[#000000d8] flex items-center justify-center">
          <IoIosArrowUp className="text-2xl text-white" />
        </span>
      )}
    </div>
  );
}

export default BackToTop;
