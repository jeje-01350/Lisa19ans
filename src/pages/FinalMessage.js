import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useState } from 'react';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffe3e3 0%, #ffc9c9 100%);
  padding: 20px;
  text-align: center;
`;

const Message = styled.div`
  max-width: 600px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1.1em;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.2s, background 0.2s;

  &:hover {
    background: #ff5252;
    transform: scale(1.05);
  }
`;

function FinalMessage() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      question: "Es-tu prête ?",
      buttons: ["Pas encore...", "Oui, je suis prête !"]
    },
    {
      question: "Es-tu vraiment, vraiment sûre ?",
      buttons: ["Euh... non", "Oui, absolument !"]
    },
    {
      question: "Dernière chance de faire demi-tour... On continue ?",
      buttons: ["J'ai un peu peur...", "Allez, montre-moi !"]
    }
  ];

  const renderSteps = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{steps[step].question}</h2>
      <div>
        {steps[step].buttons.map((text, index) => (
          <Button
            key={index}
            onClick={() => index === 1 ? setStep(step + 1) : setStep(0)}
          >
            {text}
          </Button>
        ))}
      </div>
    </motion.div>
  );

  const renderFinalMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>💖 Ma Lisa chérie 💖</h1>
      <p>
        4 ans et demi de bonheur à tes côtés... Chaque jour passé avec toi est un cadeau.
        Tu es mon rayon de soleil, ma source de joie et mon amour infini.
      </p>
      <motion.img 
        src="https://media.giphy.com/media/108M7gCS1JSoO4/giphy.gif" 
        alt="Love Bear"
        style={{ maxWidth: '200px', margin: '20px 0' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2>🎁 Ta surprise ! 🎁</h2>
        <p>
          Pour célébrer notre amour et te remercier d'être la personne extraordinaire que tu es,
          je t'offre un voyage d'une semaine dans le pays de ton choix, 
          avec la personne de ton choix !
        </p>
        <p style={{ fontSize: '0.9em', fontStyle: 'italic' }}>
          (Même si j'espère secrètement être cette personne 😊)
        </p>
        <p>
          Ce cadeau est valable jusqu'à la fin de l'année prochaine.
          Prends ton temps pour choisir ta destination de rêve !
        </p>
        <p style={{ fontSize: '0.9em', color: '#ff6b6b', marginTop: '15px' }}>
          P.S.: Si les voyages ce n'est pas ton truc... 
          On peut toujours échanger contre un iPhone 15 ! 📱✨
          (Mais franchement, entre nous, les souvenirs d'un voyage ça dure plus longtemps qu'un téléphone... 
          même si c'est un iPhone ! 😉)
        </p>
        <h3>Je t'aime infiniment ! ❤️</h3>
      </motion.div>
    </motion.div>
  );

  return (
    <Container>
      <Message>
        {step < steps.length ? renderSteps() : renderFinalMessage()}
      </Message>
    </Container>
  );
}

export default FinalMessage; 