// src/pages/EditLessonsPage.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const EditLessonsPage = () => {
    const { courseId } = useParams();  // Lấy ID khóa học từ URL

    // Dữ liệu mẫu các bài học của khóa học
    const mockLessons = [
        { id: 1, title: 'Giới thiệu về React', videoLink: 'https://linktovideo.com/1' },
        { id: 2, title: 'Cài đặt môi trường React', videoLink: 'https://linktovideo.com/2' },
        { id: 3, title: 'Làm việc với State trong React', videoLink: 'https://linktovideo.com/3' },
    ];

    const [lessons, setLessons] = useState(mockLessons);
    const [newLesson, setNewLesson] = useState({ title: '', videoLink: '' });
    const [lessonToEdit, setLessonToEdit] = useState(null);

    // Reference cho phần form chỉnh sửa bài học
    const formRef = useRef(null);

    useEffect(() => {
        // Kiểm tra và cuộn đến form sau khi phần tử được render
        if (lessonToEdit && formRef.current) {
            formRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [lessonToEdit]);  // Cuộn chỉ khi `lessonToEdit` thay đổi

    useEffect(() => {
        // Tại đây bạn có thể gọi API để lấy danh sách bài học của khóa học theo `courseId`
        // Ví dụ:
        // axios.get(`/api/courses/${courseId}/lessons`).then(response => setLessons(response.data));
    }, [courseId]);

    const handleAddLesson = () => {
        const newLessonData = {
            id: lessons.length + 1,  // Tạo ID mới cho bài học
            title: newLesson.title,
            videoLink: newLesson.videoLink,
        };
        setLessons([...lessons, newLessonData]);
        setNewLesson({ title: '', videoLink: '' });  // Reset form sau khi thêm
    };

    const handleDeleteLesson = (id) => {
        setLessons(lessons.filter(lesson => lesson.id !== id));
    };

    const handleEditLesson = (id) => {
        const lessonToEdit = lessons.find(lesson => lesson.id === id);
        setLessonToEdit(lessonToEdit);  // Thiết lập bài học cần chỉnh sửa
    };

    const handleSaveLesson = () => {
        setLessons(lessons.map(lesson => 
            lesson.id === lessonToEdit.id ? lessonToEdit : lesson
        ));
        setLessonToEdit(null);  // Sau khi lưu, reset bài học chỉnh sửa
    };

    return (
        <div className="container">
            <h1>Chỉnh Sửa Bài Học của Khóa Học</h1>
            <h2>Khóa Học ID: {courseId}</h2>

            {/* Form thêm bài học */}
            <div className="add-lesson-form">
                <h3>Thêm Bài Học Mới</h3>
                <input
                    type="text"
                    placeholder="Tên bài học"
                    value={newLesson.title}
                    onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Link video bài học"
                    value={newLesson.videoLink}
                    onChange={(e) => setNewLesson({ ...newLesson, videoLink: e.target.value })}
                />
                <button onClick={handleAddLesson}>Thêm Bài Học</button>
            </div>

            {/* Hiển thị danh sách bài học */}
            <h3>Danh Sách Bài Học</h3>
            <ul>
                {lessons.map((lesson) => (
                    <li key={lesson.id}>
                        <h4>{lesson.title}</h4>
                        <p><strong>Link Video:</strong> <a href={lesson.videoLink} target="_blank" rel="noopener noreferrer">{lesson.videoLink}</a></p>
                        <button onClick={() => handleEditLesson(lesson.id)}>Chỉnh sửa</button>
                        <button onClick={() => handleDeleteLesson(lesson.id)}>Xóa</button>
                    </li>
                ))}
            </ul>

            {/* Form chỉnh sửa bài học */}
            {lessonToEdit && (
                <div ref={formRef} className="edit-lesson-form">
                    <h3>Chỉnh Sửa Bài Học: {lessonToEdit.title}</h3>
                    <input 
                        type="text" 
                        value={lessonToEdit.title}
                        onChange={(e) => setLessonToEdit({ ...lessonToEdit, title: e.target.value })}
                    />
                    <input 
                        type="text" 
                        value={lessonToEdit.videoLink}
                        onChange={(e) => setLessonToEdit({ ...lessonToEdit, videoLink: e.target.value })}
                    />
                    <button onClick={handleSaveLesson}>Lưu</button>
                    <button onClick={() => setLessonToEdit(null)}>Hủy</button>
                </div>
            )}
        </div>
    );
};

export default EditLessonsPage;
