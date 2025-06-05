import React, { useState } from 'react';
import './Chitietkhoahoc.css';
//import Header from './components/Header';
import LessonIcon from './images/lesson.png';

const Chitietkhoahoc = ({setActivePage, selectedCourse}) => {
  const [openChapters, setOpenChapters] = useState({}); // theo dõi chương đang mở
  const [selectedLessonVideo, setSelectedLessonVideo] = useState(null);
  const [selectedLessonTitle, setSelectedLessonTitle] = useState("");

  function convertYouTubeUrlToEmbed(url) {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}`;
}

const openVideo = (lesson) => {
  const embedUrl = convertYouTubeUrlToEmbed(lesson.videoUrl);
  setSelectedLessonVideo(embedUrl);
  setSelectedLessonTitle(lesson.title);
};

const closeVideo = () => {
  setSelectedLessonVideo(null);
  setSelectedLessonTitle("");
};

  // Dữ liệu mẫu
  const chapters = [
  {
    title: "Chương 1: Làm quen với số",
    videoCount: 5,
    lessons: [
      { title: "Số đếm từ 1 đến 5", duration: "5 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ" },
      { title: "Ghép số với lượng", duration: "4 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "So sánh số lượng", duration: "6 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Số đếm từ 6 đến 10", duration: "5 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Ôn tập tổng hợp", duration: "5 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"}
    ]
  },
  {
    title: "Chương 2: Phép cộng trong phạm vi 10",
    videoCount: 6,
    lessons: [
      { title: "Khái niệm phép cộng", duration: "4 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Cộng không nhớ", duration: "5 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Cộng có nhớ", duration: "5 phút" , videoUrl: "hhttps://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Thực hành phép cộng", duration: "6 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Giải bài toán bằng phép cộng", duration: "5 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Ôn tập", duration: "5 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"}
    ]
  },
  {
    title: "Chương 3: Hình học cơ bản",
    videoCount: 3,
    lessons: [
      { title: "Nhận diện hình tròn, vuông", duration: "5 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Vẽ hình cơ bản", duration: "6 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"},
      { title: "Ứng dụng hình học", duration: "7 phút" , videoUrl: "https://www.youtube.com/watch?v=TvLNwCq51tQ"}
    ]
  }
];

  const toggleChapter = (index) => {
    setOpenChapters(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

return (
  <div>
    {/* PHẦN HEADER KHÓA HỌC: nằm 1 dòng riêng, full width */}
    <div className="course-header">
      <div className="breadcrumb">
        <span
          className="breadcrumb-link"
          onClick={() => setActivePage('home')}
        >
          Trang chủ
        </span>
        {' >> '}
        <span
          className="breadcrumb-link"
          onClick={() => setActivePage('courses')}
        >
          Khóa học
        </span>
        {' >> '}
        <span className="breadcrumb-current">{selectedCourse.title}</span>
      </div>

      <h1 className="course-title-chitietkhoahoc">{selectedCourse.title}</h1>
      <p className="teacher-name-chitietkhoahoc">{selectedCourse.teacher}</p>
    </div>

    {/* THÂN KHÓA HỌC: gồm 2 cột chính */}
    <div className="course-detail-container">
      {/* BÊN TRÁI: Nội dung chương học */}
      <div className="chapter-section">
        <h2 className="section-title">Nội dung khóa học</h2>

        {chapters.map((chapter, index) => (
          <div key={index} className="chapter-card">
            <div className="chapter-header" onClick={() => toggleChapter(index)}>
              <div>
                <div className="chapter-title">{chapter.title}</div>
                <div className="chapter-info">{chapter.videoCount} bài học</div>
              </div>
              <div className="toggle-icon">{openChapters[index] ? '▲' : '▼'}</div>
            </div>

            {openChapters[index] && (
              <div className="lesson-list">
                {chapter.lessons.map((lesson, idx) => (
                  <div key={idx} className="lesson-item" onClick={() => openVideo(lesson)}>
                    <div className="lesson-title-wrapper">
                      <img src={LessonIcon} alt="icon" className="lesson-icon" />
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

      {/* BÊN PHẢI: Thông tin khóa học + Ghi danh */}
      <div className="course-banner">
        <h2>{selectedCourse.title}</h2>
        <p className="course-description">{selectedCourse.description}</p>

        <div className="course-meta">
          <p>👥 {selectedCourse.studentCount} học sinh ghi danh</p>
          <p>⭐ {selectedCourse.rating} ({selectedCourse.reviewCount} đánh giá)</p>
          <p>🎓 Giáo viên: {selectedCourse.teacher}</p>
          <p>🎓 Trình độ: Thạc sĩ</p>
          <p>📚 Cấp độ: {selectedCourse.level}</p>
          <p>⏱️ Thời lượng: {selectedCourse.duration}</p>
          <p>📺 Bài giảng: {selectedCourse.lessonCount}</p>
          <p>📅 Cập nhật: {selectedCourse.updatedAt}</p>
        </div>

        <div className="enroll-button">Ghi danh ngay</div>
      </div>
    </div>

    {/* POPUP VIDEO */}
    {selectedLessonVideo && (
      <div className="video-popup-overlay" onClick={closeVideo}>
        <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeVideo}>×</button>
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