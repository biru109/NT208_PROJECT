// src/components/CourseForm.js
import React, { useState, useEffect } from 'react';

const CourseForm = ({ courseToEdit, onSubmit }) => {
    const [courseData, setCourseData] = useState({
        courseName: '',
        description: '',
        teacher: '',
        lessonCount: ''
    });

    // Khi courseToEdit thay đổi (khi người dùng chỉnh sửa khóa học), điền vào form
    useEffect(() => {
        if (courseToEdit) {
            setCourseData({
                courseName: courseToEdit.courseName,
                description: courseToEdit.description,
                teacher: courseToEdit.teacher,
                lessonCount: courseToEdit.lessonCount
            });
        } else {
            // Reset lại form khi không có khóa học để chỉnh sửa
            setCourseData({
                courseName: '',
                description: '',
                teacher: '',
                lessonCount: ''
            });
        }
    }, [courseToEdit]); // Khi `courseToEdit` thay đổi, sẽ cập nhật lại giá trị form

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(courseData);  // Gửi dữ liệu lên AdminPage
        // Reset lại dữ liệu form sau khi submit
        setCourseData({
            courseName: '',
            description: '',
            teacher: '',
            lessonCount: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{courseToEdit ? 'Chỉnh Sửa Khóa Học' : 'Thêm Khóa Học'}</h2>
            <div>
                <label>Tên Khóa Học:</label>
                <input
                    type="text"
                    name="courseName"
                    value={courseData.courseName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Mô Tả:</label>
                <textarea
                    name="description"
                    value={courseData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Giáo Viên:</label>
                <input
                    type="text"
                    name="teacher"
                    value={courseData.teacher}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Số Bài Học:</label>
                <input
                    type="number"
                    name="lessonCount"
                    value={courseData.lessonCount}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">{courseToEdit ? 'Cập Nhật' : 'Thêm Khóa Học'}</button>
        </form>
    );
};

export default CourseForm;
