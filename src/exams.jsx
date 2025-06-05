import React, { useState } from 'react';
import './exams.css';
import CalculatorIcon from './images/calculator.png';
import LessonIcon from './images/Lesson.png';
import bulbDefault from './images/bulb-default.png';
import bulbActive from './images/bulb-active.png';
import DoExam from './DoExam';



const Exams = ({ setActivePage, setAnswers, setQuestions }) => {
  const [selectedGrade, setSelectedGrade] = useState("Lớp 1");
  const [currentExam, setCurrentExam] = useState(null);
  const [isDoingExam, setIsDoingExam] = useState(false);

  const gradeTabs = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5"];

  const exercisesByGrade = {
    "Lớp 1": [
      {
        title: "Đề thi Toán giữa kỳ I",
        subtitle: "Năm học 2023 - 2024",
        level: "Dễ",
        questionCount: 15,
        icon: CalculatorIcon,
        labelColor: "#F5BF11",
      },
      {
        title: "Đề thi Toán giữa kỳ II",
        subtitle: "Năm học 2023 - 2024",
        level: "Dễ",
        questionCount: 15,
        icon: CalculatorIcon,
        labelColor: "#F5BF11",
      },
      {
        title: "So sánh số lượng",
        subtitle: "So sánh nhiều hơn, ít hơn hoặc bằng nhau giữa các nhóm đồ vật.",
        level: "Trung bình",
        questionCount: 15,
        icon: CalculatorIcon,
        labelColor: "#F59E0B",
      },
    ],
    "Lớp 2": [
      {
        title: "Ôn tập học kỳ I",
        subtitle: "Năm học 2023 - 2024",
        level: "Trung bình",
        questionCount: 20,
        icon: CalculatorIcon,
        labelColor: "#F59E0B",
      },
      {
        title: "Phép cộng và trừ trong phạm vi 100",
        subtitle: "Rèn luyện kỹ năng tính toán nhanh.",
        level: "Dễ",
        questionCount: 10,
        icon: CalculatorIcon,
        labelColor: "#F5BF11",
      },
    ],
    "Lớp 3": [
      {
        title: "Bài tập hình học cơ bản",
        subtitle: "Phân biệt các hình: vuông, chữ nhật, tròn, tam giác.",
        level: "Trung bình",
        questionCount: 12,
        icon: CalculatorIcon,
        labelColor: "#F59E0B",
      },
      {
        title: "Ôn tập phép nhân - chia",
        subtitle: "Luyện tập bảng cửu chương và chia số.",
        level: "Khó",
        questionCount: 15,
        icon: CalculatorIcon,
        labelColor: "#EF4444",
      },
    ],
    "Lớp 4": [
      {
        title: "Toán nâng cao lớp 4",
        subtitle: "Đề thi thử học kỳ II",
        level: "Khó",
        questionCount: 18,
        icon: CalculatorIcon,
        labelColor: "#EF4444",
      },
      {
        title: "Phân số cơ bản",
        subtitle: "Hiểu và tính toán với phân số đơn giản.",
        level: "Trung bình",
        questionCount: 14,
        icon: CalculatorIcon,
        labelColor: "#F59E0B",
      },
    ],
    "Lớp 5": [
      {
        title: "Đề ôn thi vào THCS",
        subtitle: "Tổng hợp kiến thức Toán lớp 5",
        level: "Khó",
        questionCount: 20,
        icon: CalculatorIcon,
        labelColor: "#EF4444",
      },
      {
        title: "Giải toán có lời văn",
        subtitle: "Phát triển kỹ năng giải toán thực tế.",
        level: "Trung bình",
        questionCount: 15,
        icon: CalculatorIcon,
        labelColor: "#F59E0B",
      },
    ],
  };

if (isDoingExam && currentExam) {
  return (
    <DoExam
      exam={currentExam}
      setActivePage={() => {
        setIsDoingExam(false);
        setCurrentExam(null);
      }}
      onSubmit={(answers, questions) => {
        setAnswers(answers);
        setQuestions(questions);
        setActivePage('result');
      }}
    />
  );
}


  return (
    <div className="baitap-container">
      <h2 className="title">ĐỀ THI TOÁN {selectedGrade.toUpperCase()}</h2>
      <p className="subtitle">
        Luyện tập những đề thi được biên soạn bởi những Giáo viên giàu kinh nghiệm.
      </p>

      <div className="tabs">
        {gradeTabs.map((tab, idx) => (
          <button
            key={idx}
            className={`tab ${tab === selectedGrade ? 'active' : ''}`}
            onClick={() => setSelectedGrade(tab)}
          >
            <img
              src={tab === selectedGrade ? bulbActive : bulbDefault}
              alt="bulb icon"
              className="icon-img"
            />
            {tab}
          </button>
        ))}
      </div>

      <div className="cards">
        {(exercisesByGrade[selectedGrade] || []).map((item, index) => (
          <div className="card" key={index}>
            <div className="card-header-exams">
              <div className="label" style={{ backgroundColor: item.labelColor }}>
                {item.level}
              </div>
              <img src={item.icon} alt="Calculator Icon" className="card-icon" />
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <div className="card-meta">
                <img src={LessonIcon} alt="Lesson Icon" className="lesson-icon" />
                <span>{item.questionCount} câu</span>
              </div>
                  <button
                    className="start-btn"
                    onClick={() => {
                      setCurrentExam(item);
                      setIsDoingExam(true);
                    }}
                  >
                    Bắt đầu làm
                  </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;

