import React from 'react';
import './Khoahoc.css';
import LessonIcon from './images/Lesson.png';
import khoahocImage from './images/khoahoc.png'; // Add images or relevant ones

const Khoahoc = ({setActivePage, setSelectedCourse }) => {
  const courses = [
    {
      title: "Toán lớp 1 cơ bản",
      description: "Khóa học cơ bản giúp bé làm quen với các con số và phép tính đơn giản.",
      teacher: "Cô Nguyễn Thị Hồng",
      lessons: 25,
      image: khoahocImage,
      color: "#3498DB"
    },
    {
      title: "Toán lớp 2 cơ bản",
      description: "Khóa học cơ bản giúp bé làm quen với các con số và phép tính đơn giản.",
      teacher: "Cô Nguyễn Thị Hồng",
      lessons: 25,
      image: khoahocImage,
      color: "#E9E91E"
    },
    // Add more course objects as needed
  ];

  return (
    <div>

        <div className="courses-container">
          <div className="content-background">
            <h1 className="title-main">KHÓA HỌC TOÁN</h1>
            <p className="subtitle-main">Chọn khóa học phù hợp để bắt đầu hành trình chinh phục Toán!</p>

            <div className="course-cards">
              {courses.map((course, index) => (
                <div key={index} className="course-card">
                  <div className="card-header"
                    style={{ backgroundColor: course.color, cursor: 'pointer' }}
                    onClick={() => {
                      setSelectedCourse(course);
                      setActivePage('DetailedCourses');
                    }}
                  >
                  {course.title}
                  </div>

                  <div className="card-title"> {course.title}</div>
                  <div className="card-description">{course.description}</div>
                  <div className="teacher-name">{course.teacher}</div>
                  <p className="lessons">
                    <img src={LessonIcon} alt="Lesson Icon" className="lesson-icon" />
                    {course.lessons} bài học
                  </p>
                  <div className="enroll-button"> Ghi danh </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Khoahoc;

