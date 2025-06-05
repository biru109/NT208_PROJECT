import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import Header from './components/Header';
import Khoahoc from './Khoahoc';
import Chitietkhoahoc from './Chitietkhoahoc';
import Exams from './exams';
import DoExam from './DoExam';
import ResultExam from './ResultExam';
import ReviewAnswers from './ReviewAnswers';
import Home from './pages/Home';
import BangXepHang from './pages/BangXepHang';
import Register from './pages/DangKy';
import Login from './pages/DangNhap';
import QuenMatKhau from './pages/QuenMatKhau';
import DangKyKhoaHoc from './pages/DangKyKhoaHoc';
import TaiLieu from './pages/TaiLieu';

// AppWrapper để bọc Router
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [doingExam, setDoingExam] = useState(null);
  const [examAnswers, setExamAnswers] = useState({});
  const [examQuestions, setExamQuestions] = useState([]);

  const navigate = useNavigate();

  const handleExamSubmit = (answers, questions) => {
    setExamAnswers(answers);
    setExamQuestions(questions);
    navigate('/result');
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/courses"
          element={
            <Khoahoc setSelectedCourse={setSelectedCourse} />
          }
        />
        <Route
          path="/courses/detail"
          element={
            <Chitietkhoahoc
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />
          }
        />
        <Route
          path="/exams"
          element={
            <Exams
              setDoingExam={(exam) => {
                setDoingExam(exam);
                navigate('/doexam');
              }}
              setAnswers={setExamAnswers}
              setQuestions={setExamQuestions}
            />
          }
        />
        <Route
          path="/doexam"
          element={
            <DoExam
              exam={doingExam}
              onSubmit={handleExamSubmit}
            />
          }
        />
        <Route
          path="/result"
          element={
            examQuestions.length > 0 ? (
              <ResultExam
                questions={examQuestions}
                answers={examAnswers}
                onRetry={() => {
                  setExamAnswers({});
                  setExamQuestions([]);
                  setDoingExam(null);
                  navigate('/exams');
                }}
                onViewAnswers={() => {
                  navigate('/reviewAnswers');
                }}
              />
            ) : (
              <div>Chưa có kết quả.</div>
            )
          }
        />
        <Route
          path="/reviewAnswers"
          element={
            <ReviewAnswers
              questions={examQuestions}
              answers={examAnswers}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<QuenMatKhau />} />
        <Route path="/register-course" element={<DangKyKhoaHoc />} />
        <Route path="/docs" element={<TaiLieu />} />
        <Route path="/ranking" element={<BangXepHang />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;
