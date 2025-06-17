// src/pages/AdminPage.js
import React, { useState, useEffect } from 'react';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';

const AdminPage = () => {
    const mockCourses = [
        {
            id: 1,
            courseName: 'Khóa Học React Cơ Bản',
            description: 'Khóa học này giúp bạn làm quen với React.js',
            teacher: 'Nguyễn Văn A',
            lessonCount: 10,
        },
        {
            id: 2,
            courseName: 'Khóa Học Node.js Nâng Cao',
            description: 'Khóa học này giúp bạn hiểu sâu về Node.js và Express',
            teacher: 'Trần Thị B',
            lessonCount: 12,
        },
    ];

    const [courses, setCourses] = useState(mockCourses);
    const [courseToEdit, setCourseToEdit] = useState(null);

    useEffect(() => {
        // Gọi API lấy dữ liệu khóa học (mock data ở đây)
    }, []);

    const handleAddCourse = () => {
        setCourseToEdit(null); // Đặt lại để quay lại form thêm khóa học
    };

    const handleEditCourse = (course) => {
        setCourseToEdit(course);

        // Cuộn trang về đầu để người dùng có thể chỉnh sửa khóa học
        window.scrollTo({
            top: 0,  // Cuộn về vị trí đầu trang
            behavior: 'smooth'  // Cuộn mượt mà
        });
    };

    const handleSubmit = (course) => {
        if (courseToEdit) {
            // Nếu có khóa học đang chỉnh sửa, thực hiện cập nhật
            setCourses(courses.map(c => (c.id === courseToEdit.id ? course : c)));
        } else {
            // Nếu không, thêm mới khóa học
            setCourses([...courses, { ...course, id: courses.length + 1 }]);
        }

        // Sau khi thêm hoặc cập nhật, đóng form và quay lại form thêm
        setCourseToEdit(null);
    };

    const handleDeleteCourse = (id) => {
        setCourses(courses.filter(course => course.id !== id));
    };

    return (
        <div className="container">
            <h1>Quản Lý Khóa Học</h1>
            <CourseForm courseToEdit={courseToEdit} onSubmit={handleSubmit} />
            <CourseList
                courses={courses}
                onEdit={handleEditCourse}
                onDelete={handleDeleteCourse}
            />
        </div>
    );
};

export default AdminPage;
