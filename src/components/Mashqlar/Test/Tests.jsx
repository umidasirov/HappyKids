import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Testlar = () => {
    const [answers, setAnswers] = useState(Array(15).fill(null)); // Javoblarni saqlash
    const [showResult, setShowResult] = useState(false); // Testni yakunlashni ko'rsatish
    const [score, setScore] = useState(0); // Ball

    const testlar = [
        { id: 1, question: '5 + 3 = ?', options: [6, 7, 8, 9], correctAnswer: 8 },
        { id: 2, question: '12 - 4 = ?', options: [7, 8, 9, 6], correctAnswer: 8 },
        { id: 3, question: '3 * 6 = ?', options: [18, 20, 15, 12], correctAnswer: 18 },
        { id: 4, question: '9 / 3 = ?', options: [3, 4, 2, 1], correctAnswer: 3 },
        { id: 5, question: '7 + 6 = ?', options: [12, 14, 13, 15], correctAnswer: 13 },
        { id: 6, question: '15 - 9 = ?', options: [4, 5, 6, 7], correctAnswer: 6 },
        { id: 7, question: '8 * 2 = ?', options: [14, 15, 16, 17], correctAnswer: 16 },
        { id: 8, question: '18 / 6 = ?', options: [3, 4, 5, 6], correctAnswer: 3 },
        { id: 9, question: '4 * 5 = ?', options: [18, 20, 22, 24], correctAnswer: 20 },
        { id: 10, question: '7 * 3 = ?', options: [21, 20, 19, 18], correctAnswer: 21 },
        { id: 11, question: '11 + 5 = ?', options: [16, 17, 18, 19], correctAnswer: 16 },
        { id: 12, question: '6 * 7 = ?', options: [42, 40, 38, 36], correctAnswer: 42 },
        { id: 13, question: '5 * 9 = ?', options: [45, 46, 44, 47], correctAnswer: 45 },
        { id: 14, question: '14 - 5 = ?', options: [8, 9, 7, 6], correctAnswer: 9 },
        { id: 15, question: '8 + 9 = ?', options: [16, 17, 18, 19], correctAnswer: 17 },
    ];

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const calculateScore = () => {
        let score = 0;
        testlar.forEach((test, index) => {
            if (answers[index] === test.correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const handleSubmit = () => {
        const totalScore = calculateScore();
        setScore(totalScore);
        setShowResult(true);
    };

    const getResultMessage = () => {
        if (score === 15) return 'Ajoyib! Siz barcha savollarga to\'g\'ri javob berdingiz!';
        if (score >= 12) return 'Yaxshi! Siz juda yaxshi ishladingiz!';
        if (score >= 8) return 'Qoniqarli! Siz ko\'p savollarga to\'g\'ri javob berdingiz!';
        return 'Xafa bo\'lmang, yana urinib ko\'ring!';
    };

    return (
        <div className="testlar-container p-4">
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                    <li className="breadcrumb-item"><Link to="/activities">Mashqlar</Link></li>
                    <li className="breadcrumb-item"><Link to="/activities/test">Testlar</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Matematika</li>
                </ol>
            </nav>
            <h2>Matematika Testlari</h2>
            <div className="test-body">
                {testlar.map((test, index) => (
                    <div key={test.id} className="test-item">
                        <p>{test.question}</p>
                        <div className="options">
                            {test.options.map((option, i) => (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name={`test-${index}`}
                                        value={option}
                                        checked={answers[index] === option}
                                        onChange={() => handleAnswerChange(index, option)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="score">
                <button onClick={handleSubmit}>Testni yakunlash</button>
            </div>

            {showResult && (
                <div className={`result-message ${score === 15 ? 'perfect' : score >= 12 ? 'good' : 'try-again'}`}>
                    <h3>{getResultMessage()}</h3>
                    <p>Sizning ball: {score} / 15</p>
                </div>
            )}
        </div>
    );
};

export default Testlar;
