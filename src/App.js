import React, { useState } from 'react';
import Header from './components/Header';
import Khoahoc from './Khoahoc';
import Chitietkhoahoc from './Chitietkhoahoc';
import Exams from './exams';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null); // Lưu khoá học được chọn

  return (
    <div>
      {/* Header luôn hiển thị và nhận activePage, setActivePage */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Nội dung theo activePage */}
      {activePage === 'home' && (
        <div>
          <h1>Trang chủ</h1>
          {/* Bạn có thể thêm nội dung trang chủ ở đây */}
        </div>
      )}

      {activePage === 'courses' && (
        <Khoahoc activePage={activePage} setActivePage={setActivePage} 
          setSelectedCourse={setSelectedCourse}
        />
      )}

      {activePage === 'DetailedCourses' && (
        <Chitietkhoahoc activePage={activePage} setActivePage={setActivePage} 
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      )}

      {activePage === 'exams' && <Exams />}

      {/* Các trang khác như exams, resources nếu có thể thêm tương tự */}
    </div>
  );
}

export default App;

