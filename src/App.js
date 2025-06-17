// frontend/src/App.js
import React from 'react';
import AdminCourse from './pages/AdminCourse';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditLessonsPage from './pages/EditLessonsPage';
import Header from './components/Header';
import EditExamPage from './pages/EditExamPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/managecourse" element={<AdminCourse />} />
        <Route path="/edit-lessons/:courseId" element={<EditLessonsPage />} />
        <Route path="/edit-exam" element={<EditExamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
