import React from 'react';
import falseImg from './images/false.png';
import trueImg from './images/true.png';
import './ResultExam.css';

const ResultExam = ({ questions, answers, onRetry, onViewAnswers }) => {
  const correctCount = questions.reduce((count, q) => {
    return answers[q.id] === q.correctAnswer ? count + 1 : count;
  }, 0);
  const wrongCount = questions.length - correctCount;

  return (
    <div className="result-container">
      <h2 className="result-title">Bài tập cuối chương I</h2> <br></br>

      <h3 className="result-subtitle">Kết quả luyện tập</h3> <br></br> <br></br>

      <div className="result-summary">
        <div className="result-block">
          <img src={trueImg} alt="Đúng" className="result-icon" />
          <p className="result-label">Số câu đúng</p>
          <p className="result-number">{correctCount}</p>
        </div>

        <div className="result-block">
          <img src={falseImg} alt="Sai" className="result-icon" />
          <p className="result-label">Số câu sai</p>
          <p className="result-number">{wrongCount}</p>
        </div>
      </div>

      <div className="result-buttons">
        <button className="result-button disabled" disabled>Xem xếp hạng</button>
        <button className="result-button" onClick={onViewAnswers}>Xem đáp án</button>
        <button className="result-button" onClick={onRetry}>Luyện tập lại</button>
      </div>
    </div>
  );
};

export default ResultExam;
