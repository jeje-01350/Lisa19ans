import { motion } from 'framer-motion';
import styled from '@emotion/styled';

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

function FinalMessage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Message>
          <h1>💖 Ma Lisa chérie 💖</h1>
          <p>
            4 ans et demi de bonheur à tes côtés... Chaque jour passé avec toi est un cadeau.
            Tu es mon rayon de soleil, ma source de joie et mon amour infini.
          </p>
          <img 
            src="https://media.giphy.com/media/108M7gCS1JSoO4/giphy.gif" 
            alt="Love Bear"
            style={{ maxWidth: '200px', margin: '20px 0' }}
          />
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
          <h3>Je t'aime infiniment ! ❤️</h3>
        </Message>
      </motion.div>
    </Container>
  );
}

export default FinalMessage; 