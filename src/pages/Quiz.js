import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe3e3 100%);
  padding: 20px;
`;

const questions = [
  {
    question: "Quel est notre premier restaurant ensemble ?",
    options: ["McDonald's", "Buffalo Grill", "Un japonais", "Je ne sais plus"],
    correctAnswer: "McDonald's"
  },
  {
    question: "Quelle est ma plus grande qualité selon toi ?",
    options: ["Ma gentillesse", "Mon humour", "Ma beauté", "Tout ça à la fois"],
    correctAnswer: "Tout ça à la fois"
  },
  {
    question: "Qui est le plus mignon entre nous deux ?",
    options: ["Toi", "Moi", "On est ex aequo", "Question piège"],
    correctAnswer: "Toi"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
    } else {
      navigate('/message');
    }
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="question-container"
      >
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
        <p className="question-counter">
          Question {currentQuestion + 1} sur {questions.length}
        </p>
      </motion.div>
    </Container>
  );
}

export default Quiz; 