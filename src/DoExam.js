

import React, { useState, useEffect } from 'react';
import './doexam.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import pic_exam from './images/pic_exam.png';
import { useNavigate } from 'react-router-dom';



const DoExam = ({ exam, goBackToExamList, onSubmit }) => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      text: 'Em hãy điền từ/cụm từ/số thích hợp vào các ô trống:',
      content: '3 - 1 = ',
      type: 'text',
      correctAnswer: '2'
    },
    {
      id: 2,
      text: 'Phép tính thích hợp cho hình ảnh dưới là:',
      image: pic_exam,
      choices: ['1 + 2 = 3', '1 + 2 = 4', '1 + 2 = 5', '1 + 2 = 6'],
      type: 'choice',
      correctAnswer: '1 + 2 = 3'
    },

    {
      id: 3,
      text:'Chọn phép tính đúng với hình ảnh:',
      image:pic_exam,
      choices: ['6 - 2 = 4', '5 + 3 = 7', '4 + 2 = 6', '4 + 4 = 8'],
      type: 'choice',
      correctAnswer: '6 - 2 = 4'
    },

    {
      id: 4,
      text:'Em hãy điền đáp án đúng:',
      content:'5 + 4 =',
      type: 'text',
      correctAnswer: '9'
    },

    {
      id: 5,
      text: 'Em hãy điền đáp án đúng:',
      content: '8 - 3 = ',
      type: 'text',
      correctAnswer: '5'
    },

    {
      id: 6,
      text: 'Em hãy chọn phép tính đúng:',
      choices: ['2 + 3 = 5', '2 + 3 = 6', '2 + 3 = 4', '2 + 3 = 7'],
      type: 'choice',
      correctAnswer: '2 + 3 = 5'
    },

    {
      id: 7,
      text: 'Em hãy điền đáp án đúng:',
      content: '9 - 5 = ',
      type: 'text', 
      correctAnswer: '4'
    },

    {
      id: 8,
      text: 'Em hãy chọn phép tính đúng với hình ảnh:',
      image: pic_exam, 
      choices: ['3 + 1 = 4', '3 - 1 = 2', '3 x 1 = 3', '3 / 1 = 3'],
      type: 'choice',
      correctAnswer: '3 - 1 = 2'
    },
    {
      id: 9,
      text: 'Em hãy điền đáp án đúng:',
      content: '6 + 2 = ',
      type: 'text',
      correctAnswer: '8'
    },

    {
      id: 10,
      text: 'Em hãy chọn phép tính đúng với hình ảnh:',
      image: pic_exam,
      choices: ['4 + 1 = 5', '4 - 1 = 3', '4 x 1 = 4', '4 / 1 = 4'],
      type: 'choice',
      correctAnswer: '4 + 1 = 5'
    }


  ];

  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  //Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("Hết giờ làm bài!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `00 : ${m} : ${s}`;
  };

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  return (
    <div>
    <div className="doexam-container">
      <div className="exam-content">

    <div className="breadcrumb">
      <Link to="/">Trang chủ</Link> &gt;&gt;&nbsp;
      <Link to="/courses">Khóa học</Link> &gt;&gt;&nbsp;
      <Link to="/courses/lop-1">Lớp 1</Link> &gt;&gt;&nbsp;
      <Link to="/courses/lop-1/toan-nang-cao">Toán lớp 1 nâng cao</Link> &gt;&gt;&nbsp;
      <span>{exam?.title}</span>
    </div>



      <div className="exam-header">
        <h2>{exam?.title || 'Không rõ'}</h2>
        <p>Thí sinh đọc kỹ đề trước khi làm bài</p>
      </div>


        {questions.map((q) => (
          <div className="question-box" key={q.id} id={`question-${q.id}`}
>
       
        <p>
          <strong style={{ color: 'red' }}>Câu {q.id}:</strong> {q.text}
        </p>



            {q.image && <img src={q.image} alt="Ảnh minh họa" className="question-image" />}
            {q.type === 'text' && (
              <>
                <span>{q.content}</span>
                <input
                  type="text"
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                />
              </>
            )}

            
            {q.type === 'choice' && (
              <div className="choices-container">
                {q.choices.map((c, i) => (
                  <label key={i} className="choice">
                    <input
                      type="radio"
                      name={`q${q.id}`}
                      checked={answers[q.id] === c}
                      onChange={() => handleAnswer(q.id, c)}
                    />
                    {c}
                  </label>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

      <div className="exam-sidebar">
        <div className="timer-box">
          Thời gian làm bài<br />
          <span>{formatTime(timeLeft)}</span>
        </div>
        <div className="question-nav">
          {questions.map((q) => (
            <button
              key={q.id}
              className={answers[q.id] ? 'answered' : ''}
              onClick={() => {
                const element = document.getElementById(`question-${q.id}`);
                if (element)
                {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {q.id}
            </button>
          ))}
        </div>

        <button
          className="submit-btn"
          onClick={() => {
            const unanswered = questions.filter(q => !answers[q.id] || answers[q.id].toString().trim() === '');

            if (unanswered.length > 0) {
              alert(`Bạn chưa trả lời đầy đủ. Còn ${unanswered.length} câu chưa làm.`);
              const firstUnanswered = document.getElementById(`question-${unanswered[0].id}`);
              if (firstUnanswered) {
                firstUnanswered.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              return; // ⛔ không nộp nếu còn câu chưa làm
            }

            const confirmSubmit = window.confirm("Bạn có chắc chắn muốn nộp bài không?");
            if (confirmSubmit) {
              if (typeof onSubmit === 'function') {
                onSubmit(answers, questions);
              } else {
                console.error("❌ Lỗi: onSubmit không phải là một hàm!");
              }
            }
          }}

        >
          Nộp bài
        </button>




        <button className="back-btn" onClick={goBackToExamList}>← Quay lại</button>

      </div>
    </div>
    </div>
  );
};

DoExam.propTypes = {
  exam: PropTypes.object,
  goBackToExamList: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


export default DoExam;

