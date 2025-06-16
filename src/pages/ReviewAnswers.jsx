import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '3%',
    fontFamily: "'Noto Sans', sans-serif",
    backgroundColor: '#f8f9fa',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  breadcrumb: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
    textAlign: 'center',
  },
  instruction: {
    fontSize: '14px',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: '20px',
  },
  questionBox: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    textAlign: 'center',
  },
  questionText: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  image: {
    display: 'block',
    margin: '10px auto',
    maxWidth: '100%',
    height: 'auto',
  },
  answerBox: {
    padding: '10px 12px',
    borderRadius: '6px',
    marginTop: '8px',
    marginBottom: '6px',
  },
  correctBox: {
    backgroundColor: '#d4edda',
    border: '1px solid #38b000',
  },
  wrongBox: {
    backgroundColor: '#f8d7da',
    border: '1px solid #d90429',
  },
  button: {
    marginTop: '30px',
    padding: '10px 20px',
    backgroundColor: '#2a64ff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

const ReviewAnswers = ({ questions, answers }) => {
  const navigate = useNavigate();

  return (
    <div>
    <div style={styles.container} >
      <p style={styles.breadcrumb}>
        Trang chủ &gt;&gt; Khóa học &gt;&gt; Lớp 1 &gt;&gt; Toán lớp 1 nâng cao &gt;&gt; Bài tập cuối chương I
      </p>

      <h2 style={styles.title}>Đáp án bài tập cuối chương I</h2>
      <p style={styles.instruction}>Thí sinh đọc kỹ đề trước khi làm bài</p>

      {questions.map((q, index) => {
        const userAnswer = answers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;
        const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== '';

        return (
          <div key={q.id} style={styles.questionBox}>
            <p style={{ ...styles.questionText, textAlign: 'left' }}>
              <strong>Câu {index + 1}:</strong> {q.text}
            </p>

            {q.image && <img src={q.image} alt="minh họa" style={styles.image} />}
            {q.content && (
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '-8px' }}>
                {q.content}
              </p>
            )}

            {q.type === 'text' && (
              <div>
                <div
                  style={{
                    ...styles.answerBox,
                    ...(isCorrect ? styles.correctBox : styles.wrongBox),
                  }}
                >
                  <p>
                    <strong>Đáp án của bạn:</strong>{' '}
                    <strong>{isAnswered ? userAnswer : 'Chưa trả lời'}</strong>
                  </p>
                  {!isCorrect && (
                    <p>
                      <strong>Đáp án đúng:</strong>{' '}
                      <strong>{q.correctAnswer}</strong>
                    </p>
                  )}
                </div>
              </div>
            )}

            {q.type === 'choice' && (
              <div>
                {q.choices.map((choice, i) => {
                  const isUserChoice = userAnswer === choice;
                  const isCorrectChoice = q.correctAnswer === choice;

                  const boxStyle = isUserChoice && !isCorrectChoice
                    ? styles.wrongBox
                    : isCorrectChoice
                    ? styles.correctBox
                    : {};

                  return (
                    <div
                      key={i}
                      style={{
                        ...styles.answerBox,
                        ...boxStyle,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <input
                        type="radio"
                        checked={isUserChoice}
                        readOnly
                        style={{ marginRight: '8px' }}
                      />
                      <strong>{choice}</strong>
                    </div>
                  );
                })}

                {!isAnswered && (
                  <p style={{ ...styles.answerBox, ...styles.wrongBox }}>
                    <strong>Bạn chưa trả lời câu này</strong>
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}

      <button style={styles.button} onClick={() => navigate('/result')}>
        Quay lại kết quả
      </button>
    </div>
        </div>
  );
};

export default ReviewAnswers;
