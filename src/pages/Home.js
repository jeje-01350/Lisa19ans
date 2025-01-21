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

const WelcomeCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
`;

const StartButton = styled.button`
  padding: 15px 40px;
  border: none;
  border-radius: 10px;
  background: #ff8fa3;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05);
    background: #ff6b8b;
  }
`;

const questions = [
  {
    question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
    options: ["Blanc", "Noir", "Rose", "Bleu"],
    correctAnswer: "Blanc"
  },
  {
    question: "Combien font 2+2 ?",
    options: ["3", "4", "22", "Fish"],
    correctAnswer: "4"
  },
  {
    question: "Quel est le plus mignon des animaux ?",
    options: ["Le panda", "Le chat", "Le chien", "Toi"],
    correctAnswer: "Toi"
  }
];

function Home() {
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
      >
        <WelcomeCard>
          <h1>💝 Coucou ma Lisa chérie 💝</h1>
          <img 
            src="https://media.giphy.com/media/LnKM6jbBenbVXp1qA9/giphy.gif" 
            alt="Love Heart"
            style={{ maxWidth: '200px', margin: '20px 0' }}
          />
          <p>J'ai préparé une petite surprise pour toi...</p>
          <StartButton onClick={() => navigate('/quiz')}>
            Commencer l'aventure 💕
          </StartButton>
        </WelcomeCard>
      </motion.div>
    </Container>
  );
}

export default Home; 