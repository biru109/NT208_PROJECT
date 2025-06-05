
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Khoahoc from './Khoahoc';
import Chitietkhoahoc from './Chitietkhoahoc';
import Exams from './exams';
import DoExam from './DoExam';
import ResultExam from './ResultExam';
import ReviewAnswers from './ReviewAnswers';


function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [doingExam, setDoingExam] = useState(null); // NEW
  const [examAnswers, setExamAnswers] = useState({});
  const [examQuestions, setExamQuestions] = useState([]);

    useEffect(() => {
    console.log('examAnswers thay đổi:', examAnswers);
  }, [examAnswers]);

  useEffect(() => {
    console.log('examQuestions thay đổi:', examQuestions);
  }, [examQuestions]);

  useEffect(() => {
    console.log('activePage thay đổi:', activePage);
  }, [activePage]);

const handleExamSubmit = (answers, questions) => {
  console.log("handleExamSubmit đã được định nghĩa:", handleExamSubmit);

  setExamAnswers(answers);
  setExamQuestions(questions);
  setActivePage('result');  // thêm dòng này để chuyển trang
};



  useEffect(() => {
  if (doingExam) {
    setActivePage('doexam');
      }
    }, [doingExam]);


  return (
    <div>
      <Header activePage={activePage} setActivePage={setActivePage} />


          {activePage === 'home' && (
            <div>
              <h1>Trang chủ</h1>
            </div>
          )}

      {activePage === 'courses' && (
        <Khoahoc
          activePage={activePage}
          setActivePage={setActivePage}
          setSelectedCourse={setSelectedCourse}
        />
      )}

      {activePage === 'DetailedCourses' && (
        <Chitietkhoahoc
          activePage={activePage}
          setActivePage={setActivePage}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      )}

      {activePage === 'exams' && (
        <Exams setActivePage={setActivePage} 
        setDoingExam={setDoingExam} 
        setAnswers={setExamAnswers}
        setQuestions={setExamQuestions}  // Đảm bảo giá trị này tồn tại
        />
      )}

      {activePage === "doexam" && doingExam && (
        <DoExam
          key={doingExam?.id || "default"}
          exam={doingExam}
          setActivePage={setActivePage}
          onSubmit={handleExamSubmit}  // Đảm bảo giá trị này tồn tại
        />
      )}



      {activePage === 'result' && examQuestions && (
        <ResultExam
          questions={examQuestions}
          answers={examAnswers}
          onRetry={() => {
            setExamAnswers(null);
            setExamQuestions(null);
            setDoingExam(null);
            setActivePage('exams');  // quay lại luyện tập
          }}
          onViewAnswers={() => {
            setActivePage('reviewAnswers');
          }}
        />
      )}

      {activePage === 'reviewAnswers' && examQuestions && (
  <ReviewAnswers
    questions={examQuestions}
    answers={examAnswers}
    setActivePage={setActivePage}
  />
        )}


    </div>

  );
}

export default App;
