import React, { useState } from "react";
import "./Chitietkhoahoc.css";
import LessonIcon from "./images/Lesson.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Chitietkhoahoc = ({ setActivePage, selectedCourse }) => {
  const navigate = useNavigate();
  const [openChapters, setOpenChapters] = useState({});
  const [selectedLessonVideo, setSelectedLessonVideo] = useState(null);
  const [selectedLessonTitle, setSelectedLessonTitle] = useState("");

  function convertYouTubeUrlToEmbed(url) {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");
      if (!videoId) return null;
      return `https://www.youtube.com/embed/${videoId}`;
    } catch {
      return null;
    }
  }

  const openVideo = (lesson) => {
    const embedUrl = convertYouTubeUrlToEmbed(lesson.videoUrl);
    if (embedUrl) {
      setSelectedLessonVideo(embedUrl);
      setSelectedLessonTitle(lesson.title);
    }
  };

  const closeVideo = () => {
    setSelectedLessonVideo(null);
    setSelectedLessonTitle("");
  };

  const chapters = [
    {
      title: "Chương 1: Làm quen với số",
      videoCount: 5,
      lessons: [
        {
          title: "Số đếm từ 1 đến 5",
          duration: "5 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Ghép số với lượng",
          duration: "4 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "So sánh số lượng",
          duration: "6 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Số đếm từ 6 đến 10",
          duration: "5 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Ôn tập tổng hợp",
          duration: "5 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
      ],
    },
    {
      title: "Chương 2: Phép cộng trong phạm vi 10",
      videoCount: 6,
      lessons: [
        {
          title: "Khái niệm phép cộng",
          duration: "4 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Cộng không nhớ",
          duration: "5 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Cộng có nhớ",
          duration: "5 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Thực hành phép cộng",
          duration: "6 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Giải bài toán bằng phép cộng",
          duration: "5 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Ôn tập",
          duration: "5 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
      ],
    },
    {
      title: "Chương 3: Hình học cơ bản",
      videoCount: 3,
      lessons: [
        {
          title: "Nhận diện hình tròn, vuông",
          duration: "5 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Vẽ hình cơ bản",
          duration: "6 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
        {
          title: "Ứng dụng hình học",
          duration: "7 phút",
          videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ",
        },
      ],
    },
  ];

  const toggleChapter = (index) => {
    setOpenChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <div className="course-header">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Trang chủ
          </Link>
          {" >> "}
          <Link to="/courses" className="breadcrumb-link">
            Khóa học
          </Link>
          {" >> "}
          <span className="breadcrumb-current">{selectedCourse.title}</span>
        </div>

        <h1 className="course-title-chitietkhoahoc">{selectedCourse.title}</h1>
        <p className="teacher-name-chitietkhoahoc">{selectedCourse.teacher}</p>
      </div>

      <div className="course-detail-container">
        <div className="chapter-section">
          <h2 className="section-title">Nội dung khóa học</h2>

          {chapters.map((chapter, index) => (
            <div key={index} className="chapter-card">
              <div
                className="chapter-header"
                onClick={() => toggleChapter(index)}
              >
                <div>
                  <div className="chapter-title">{chapter.title}</div>
                  <div className="chapter-info">
                    {chapter.videoCount} bài học
                  </div>
                </div>
                <div className="toggle-icon">
                  {openChapters[index] ? "▲" : "▼"}
                </div>
              </div>

              {openChapters[index] && (
                <div className="lesson-list">
                  {chapter.lessons.map((lesson, idx) => (
                    <div
                      key={idx}
                      className="lesson-item"
                      onClick={() => openVideo(lesson)}
                    >
                      <div className="lesson-title-wrapper">
                        <img
                          src={LessonIcon}
                          alt="icon"
                          className="lesson-icon"
                        />
                        <span className="lesson-title">{lesson.title}</span>
                      </div>
                      <span className="lesson-duration">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="course-banner">
          <h2>{selectedCourse.title}</h2>
          <p className="course-description">{selectedCourse.description}</p>

          <div className="course-meta">
            <p>👥 {selectedCourse.studentCount} học sinh ghi danh</p>
            <p>
              ⭐ {selectedCourse.rating} ({selectedCourse.reviewCount} đánh giá)
            </p>
            <p>🎓 Giáo viên: {selectedCourse.teacher}</p>
            <p>🎓 Trình độ: Thạc sĩ</p>
            <p>📚 Cấp độ: {selectedCourse.level}</p>
            <p>⏱️ Thời lượng: {selectedCourse.duration}</p>
            <p>📺 Bài giảng: {selectedCourse.lessonCount}</p>
            <p>📅 Cập nhật: {selectedCourse.updatedAt}</p>
          </div>
        </div>
      </div>

      {selectedLessonVideo && (
        <div className="video-popup-overlay" onClick={closeVideo}>
          <div
            className="video-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeVideo}>
              ×
            </button>
            <h3 className="video-title">{selectedLessonTitle}</h3>
            <iframe
              width="100%"
              height="400"
              src={selectedLessonVideo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video player"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chitietkhoahoc;
