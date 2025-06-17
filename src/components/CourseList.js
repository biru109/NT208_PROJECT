// src/components/CourseList.js
import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ courses, onEdit, onDelete, onEditExercises, onDeleteExercise }) => {
    // Kiểm tra nếu courses là mảng và không phải undefined
    if (!Array.isArray(courses)) {
        return <div>Không có khóa học nào để hiển thị</div>;
    }

    return (
        <div className="container">
            <h2>Danh Sách Khóa Học</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <h3>{course.courseName}</h3>
                        <p>{course.description}</p>
                        <p><strong>Giáo Viên:</strong> {course.teacher}</p>
                        <p><strong>Số Bài Học:</strong> {course.lessonCount}</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {/* Nút Sửa Khóa Học */}
                            <button onClick={() => onEdit(course)}>Sửa Khóa Học</button>
                            {/* Nút Chỉnh Sửa Bài Học */}
                            <Link to={`/edit-lessons/${course.id}`}>
                                <button>Chỉnh sửa Bài Học</button>
                            </Link>
                            {/* Nút Xóa Khóa Học */}
                            <button onClick={() => onDelete(course.id)}>Xóa Khóa Học</button>
                        </div>

                        {/* Hiển thị danh sách bài tập của khóa học */}
                        <h4>Các Bài Tập</h4>
                        {/* Kiểm tra nếu course.exercises là mảng */}
                        {Array.isArray(course.exercises) && course.exercises.length > 0 ? (
                            <ul>
                                {course.exercises.map(exercise => (
                                    <li key={exercise.id}>
                                        <p>{exercise.title}</p>
                                        <button onClick={() => onEditExercises(course.id, exercise)}>Chỉnh sửa Bài Tập</button>
                                        <button onClick={() => onDeleteExercise(course.id, exercise.id)}>Xóa Bài Tập</button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Chưa có bài tập cho khóa học này.</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
