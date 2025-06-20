import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Khoahoc.css';
import LessonIcon from '../images/Lesson.png';
import khoahocImage from '../images/khoahoc.png'; // fallback image

const Khoahoc = ({ setActivePage, setSelectedCourse }) => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        //Khi có API thật, bật đoạn này lên và xóa phần mock phía dưới
        /*
        const response = await fetch('/api/courses');
        if (!response.ok) {
          throw new Error('Không thể tải khóa học. Vui lòng thử lại sau.');
        }
        const data = await response.json();
        setCourses(data);
        setError('');
        */

        // ✅ MOCK DATA - Dùng khi chưa có API
        setTimeout(() => {
          const mockData = [
            {
              title: "Toán lớp 1 cơ bản",
              description: "Khóa học cơ bản giúp bé làm quen với các con số và phép tính đơn giản.",
              teacher: "Cô Nguyễn Thị Hồng",
              lessonCount: 25,
              studentCount: 120,
              rating: 4.8,
              reviewCount: 20,
              level: "Cơ bản",
              duration: "12 giờ",
              updatedAt: "01/06/2025",
              image: khoahocImage,
              color: "#3498DB"
            },
            {
              title: "Toán lớp 2 cơ bản",
              description: "Tiếp tục rèn luyện tư duy và kỹ năng toán học nâng cao cho học sinh lớp 2.",
              teacher: "Cô Nguyễn Thị Hồng",
              lessonCount: 30,
              studentCount: 85,
              rating: 4.6,
              reviewCount: 15,
              level: "Cơ bản",
              duration: "15 giờ",
              updatedAt: "28/05/2025",
              image: khoahocImage,
              color: "#E9E91E"
            },
            // Thêm nhiều khóa học nếu muốn
          ];
          setCourses(mockData);
          setError('');
          setLoading(false);
        }, 1500); // Giả lập delay API

      } catch (err) {
        setError(err.message);
        setCourses([]);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses-container">
      <div className="content-background">
        <h1 className="title-main">KHÓA HỌC TOÁN</h1>
        <p className="subtitle-main">Chọn khóa học phù hợp để bắt đầu hành trình chinh phục Toán!</p>

        {loading ? (
          <div className="loading-spinner"></div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="course-cards">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div
                  className="card-header"
                  style={{ backgroundColor: course.color || '#3498DB', cursor: 'pointer' }}
                  onClick={() => {
                    setSelectedCourse(course);
                    navigate('/courses/detail');
                  }}
                >
                  {course.title}
                </div>

                <div className="card-title">{course.title}</div>
                <div className="card-description">{course.description}</div>
                <div className="teacher-name">{course.teacher}</div>
                <p className="lessons">
                  <img src={LessonIcon} alt="Lesson Icon" className="lesson-icon" />
                  {course.lessonCount} bài học
                </p>

                <div
                  className="enroll-button"
                  onClick={() => navigate('/register-course')}
                  style={{ cursor: 'pointer' }}
                >
                  Ghi danh
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Khoahoc;
