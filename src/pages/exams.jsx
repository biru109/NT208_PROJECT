import React, { useEffect, useState } from 'react';
import './exams.css';
import CalculatorIcon from '../images/calculator.png';
import LessonIcon from '../images/Lesson.png';
import bulbDefault from '../images/bulb-default.png';
import bulbActive from '../images/bulb-active.png';
import DoExam from './DoExam';
import { useNavigate } from 'react-router-dom';

const Exams = ({ setAnswers, setQuestions }) => {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState("Lớp 1");
  const [currentExam, setCurrentExam] = useState(null);
  const [isDoingExam, setIsDoingExam] = useState(false);

  const [exercisesByGrade, setExercisesByGrade] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 🔄 Fetch dữ liệu (API hoặc mock)
  useEffect(() => {
    const fetchExams = async () => {
      try {
        setLoading(true);

        // ⚠️ Khi có API thật, bật đoạn này và cập nhật URL
        /*
        const response = await fetch('/api/exams');
        if (!response.ok) throw new Error('Không thể tải đề thi.');
        const data = await response.json();
        setExercisesByGrade(data);
        */

        // ✅ MOCK DATA
        setTimeout(() => {
          const mockData = {
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
              }
            ]
            // Có thể mở rộng các lớp khác nếu cần
          };

          setExercisesByGrade(mockData);
          setError('');
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setExercisesByGrade({});
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  const gradeTabs = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5"];

  // 👉 Nếu đang làm bài
  if (isDoingExam && currentExam) {
    return (
      <DoExam
        exam={currentExam}
        goBackToExamList={() => {
          setIsDoingExam(false);
          setCurrentExam(null);
        }}
        onSubmit={(answers, questions) => {
          setAnswers(answers);
          setQuestions(questions);
          navigate('/result');
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

      {loading ? (
        <div className="loading-spinner" style={{ marginTop: 30 }}></div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
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
      )}
    </div>
  );
};

export default Exams;
