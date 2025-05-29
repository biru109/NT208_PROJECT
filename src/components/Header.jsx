// import React from 'react';
// import './Header.css'; // Import file CSS
// import logo from '../images/Vector.png'; // import ảnh vào trước
// import kinhlup from '../images/TimKiem.png'; 

// function Header() {
//   return (
//     <header className=" header fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//         {/* Logo và tên HiStudy */}
//       <div className="header-top">
//           <div className="header-left">
//             <img src={logo} alt="HiStudy Logo" className="logo" />
//             <span className="brand-name">  HiStudy</span>
//           </div>

//           {/* Ô tìm kiếm */}
//           <div className="search-bar">
//             <input type="text" placeholder="Tìm kiếm khóa học, bài học..." />
//             <button className="search-btn"><img src={kinhlup}></img></button>
//           </div>

//           {/* Nút đăng nhập và đăng ký */}
//           <div className="auth-buttons">
//             <button className="login-btn">Đăng nhập</button>
//             <button className="register-btn">Đăng ký</button>
//           </div>
//       </div>

//       {/* Menu điều hướng */}
//       <nav className="menu">
//         <a href="#" className="active">Trang chủ</a>
//         <a href="#">Khóa học</a>
//         <a href="#">Thi thử</a>
//         <a href="#">Tài liệu</a>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import './Header.css'; // Import file CSS
import logo from '../images/Vector.png'; // import ảnh vào trước
import kinhlup from '../images/TimKiem.png'; 

function Header({ setActivePage, activePage }) {
  return (
    <header className="header fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Logo và tên HiStudy */}
      <div className="header-top">
        <div className="header-left">
          <img src={logo} alt="HiStudy Logo" className="logo" />
          <span className="brand-name"> HiStudy</span>
        </div>

        {/* Ô tìm kiếm */}
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm khóa học, bài học..." />
          <button className="search-btn">
            <img src={kinhlup} alt="Search" />
          </button>
        </div>

        {/* Nút đăng nhập và đăng ký */}
        <div className="auth-buttons">
          <button className="login-btn">Đăng nhập</button>
          <button className="register-btn">Đăng ký</button>
        </div>
      </div>

      {/* Menu điều hướng */}
      <nav className="menu">
        <a
          href="#"
          className={activePage === 'home' ? 'active' : ''}
          onClick={() => setActivePage('home')}
        >
          Trang chủ
        </a>
        <a
          href="#"
          className={['courses', 'DetailedCourses'].includes(activePage) ? 'active' : ''}
          onClick={() => setActivePage('courses')}
        >
          Khóa học
        </a>
        <a
          href="#"
          className={activePage === 'exams' ? 'active' : ''}
          onClick={() => setActivePage('exams')}
        >
          Thi thử
        </a>
        <a
          href="#"
          className={activePage === 'resources' ? 'active' : ''}
          onClick={() => setActivePage('resources')}
        >
          Tài liệu
        </a>
      </nav>
    </header>
  );
}

export default Header;

