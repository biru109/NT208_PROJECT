// src/pages/EditExamPage.js
import React, { useState } from 'react';
import "./EditExamPage.css"

const EditExamPage = () => {
    const [exams, setExams] = useState([
        { id: 1, name: 'Bài Tập Trắc Nghiệm 1', timeLimit: 30, numberOfQuestions: 10, questions: [] },
        { id: 2, name: 'Bài Tập Trắc Nghiệm 2', timeLimit: 40, numberOfQuestions: 15, questions: [] },
    ]);

    const [newExam, setNewExam] = useState({ name: '', timeLimit: '', numberOfQuestions: '' });
    const [selectedExam, setSelectedExam] = useState(null);
    const [isEditingQuestion, setIsEditingQuestion] = useState(false);

    // Thêm bài tập mới
    const handleAddExam = () => {
        const newId = exams.length ? exams[exams.length - 1].id + 1 : 1;
        const newExamData = { ...newExam, id: newId, questions: [] };
        setExams([...exams, newExamData]);
        setNewExam({ name: '', timeLimit: '', numberOfQuestions: '' }); // Reset form
    };

    // Chỉnh sửa bài tập
    const handleEditExam = (exam) => {
        setSelectedExam(exam);
    };

    // Lưu thay đổi bài tập
    const handleSaveExam = () => {
        setExams(exams.map(exam => (exam.id === selectedExam.id ? selectedExam : exam)));
        setSelectedExam(null); // Reset after save
    };

    // Hủy chỉnh sửa bài tập
    const handleCancelEdit = () => {
        setSelectedExam(null); // Reset edit mode
    };

    // Thêm câu hỏi
    const handleAddQuestion = () => {
        const newQuestion = {
            id: selectedExam.questions.length + 1,
            text: '',
            options: ['', '', '', ''],
            correctAnswer: ''
        };
        setSelectedExam({ ...selectedExam, questions: [...selectedExam.questions, newQuestion] });
    };

    // Xóa câu hỏi
    const handleDeleteQuestion = (questionId) => {
        setSelectedExam({ ...selectedExam, questions: selectedExam.questions.filter(q => q.id !== questionId) });
    };

    // Sửa câu hỏi
    const handleChangeQuestion = (questionId, field, value) => {
        setSelectedExam({
            ...selectedExam,
            questions: selectedExam.questions.map(q =>
                q.id === questionId ? { ...q, [field]: value } : q
            )
        });
    };

    // Mở/đóng chỉnh sửa câu hỏi
    const handleToggleEditQuestions = () => {
        setIsEditingQuestion(!isEditingQuestion);
    };

    // Xóa bài tập
    const handleDeleteExam = (examId) => {
        setExams(exams.filter(exam => exam.id !== examId));
    };

    return (
        <div className="container">
            <h1>Sửa Bài Tập</h1>

            {/* Display Exam List */}
            <h2>Danh Sách Bài Tập</h2>
            <ul>
                {exams.map(exam => (
                    <li key={exam.id}>
                        <h3>{exam.name}</h3>
                        <p>Số câu hỏi: {exam.numberOfQuestions}</p>
                        <p>Thời gian: {exam.timeLimit} phút</p>
                        <button onClick={() => handleEditExam(exam)}>Sửa</button>
                        {/* Nút Xóa bài tập */}
                        <button onClick={() => handleDeleteExam(exam.id)}>Xóa Bài Tập</button>
                    </li>
                ))}
            </ul>

            {/* Add New Exam */}
            <h3>Thêm Bài Tập Mới</h3>
            <input
                type="text"
                placeholder="Tên Bài Tập"
                value={newExam.name}
                onChange={(e) => setNewExam({ ...newExam, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Số Câu Hỏi"
                value={newExam.numberOfQuestions}
                onChange={(e) => setNewExam({ ...newExam, numberOfQuestions: e.target.value })}
            />
            <input
                type="number"
                placeholder="Thời Gian (phút)"
                value={newExam.timeLimit}
                onChange={(e) => setNewExam({ ...newExam, timeLimit: e.target.value })}
            />
            <button onClick={handleAddExam}>Thêm Bài Tập</button>

            {/* Edit Selected Exam */}
            {selectedExam && (
                <div>
                    <h3>Sửa Bài Tập: {selectedExam.name}</h3>
                    <input
                        type="text"
                        value={selectedExam.name}
                        onChange={(e) => setSelectedExam({ ...selectedExam, name: e.target.value })}
                    />
                    <input
                        type="number"
                        value={selectedExam.numberOfQuestions}
                        onChange={(e) => setSelectedExam({ ...selectedExam, numberOfQuestions: e.target.value })}
                    />
                    <input
                        type="number"
                        value={selectedExam.timeLimit}
                        onChange={(e) => setSelectedExam({ ...selectedExam, timeLimit: e.target.value })}
                    />

                    {/* Chỉnh sửa câu hỏi */}
                    {isEditingQuestion && (
                        <div>
                            <h4>Các Câu Hỏi</h4>
                            <ul>
                                {selectedExam.questions.map(question => (
                                    <li key={question.id}>
                                        <p>Câu hỏi {question.id}:</p>
                                        <input
                                            type="text"
                                            value={question.text}
                                            onChange={(e) => handleChangeQuestion(question.id, 'text', e.target.value)}
                                            placeholder="Câu hỏi"
                                        />
                                        <div>
                                            {question.options.map((option, idx) => (
                                                <input
                                                    key={idx}
                                                    type="text"
                                                    value={option}
                                                    onChange={(e) =>
                                                        handleChangeQuestion(question.id, 'options', [
                                                            ...question.options.slice(0, idx),
                                                            e.target.value,
                                                            ...question.options.slice(idx + 1),
                                                        ])
                                                    }
                                                    placeholder={`Đáp án ${idx + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <select
                                            value={question.correctAnswer}
                                            onChange={(e) => handleChangeQuestion(question.id, 'correctAnswer', e.target.value)}
                                        >
                                            <option value="">Chọn Đáp Án Đúng</option>
                                            <option value="A">Đáp án A</option>
                                            <option value="B">Đáp án B</option>
                                            <option value="C">Đáp án C</option>
                                            <option value="D">Đáp án D</option>
                                        </select>
                                        <button onClick={() => handleDeleteQuestion(question.id)}>Xóa Câu Hỏi</button>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={handleAddQuestion}>Thêm Câu Hỏi</button>
                        </div>
                    )}

                    <button onClick={handleSaveExam}>Lưu Thay Đổi</button>
                    <button onClick={handleCancelEdit}>Hủy</button>
                </div>
            )}
        </div>
    );
};

export default EditExamPage;