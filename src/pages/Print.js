import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import frame from '../Images/frame.png';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe3e3 100%);
  padding: 20px;

  @media print {
    background: none;
    padding: 20px;
  }
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media print {
    box-shadow: none;
    padding: 0;
    background: none;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #ff6b8b;
  margin-bottom: 2.5rem;
  font-family: 'Dancing Script', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Letter = styled.div`
  text-align: left;
  margin: 2rem 0;
  line-height: 2;
  font-size: 1.2rem;
  color: #4a4a4a;
  font-family: 'Quicksand', sans-serif;

  p {
    margin-bottom: 1.8rem;
  }
`;

const QRContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  
  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const Footer = styled.div`
  margin-top: 3rem;
  font-style: italic;
  color: #ff8fa3;
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;

  p {
    margin: 0.5rem 0;
  }
`;

const Print = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{ width: '100%', maxWidth: '800px' }}
      >
        <Content>
          <Title>Mon Cœur 💝</Title>
          
          <Letter>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p>
                Cette année n'a pas été des plus simples, avec ses hauts et ses bas, 
                ses moments de doute et d'incertitude. Mais à travers toutes ces épreuves, 
                notre amour n'a fait que se renforcer.
              </p>
              
              <p>
                Ensemble, nous sommes capables de surmonter ces difficultés, même si cela ne sera pas facile.
                Je suis là pour toi, pour nous deux, et je le serai toujours.
                Je te promets de m'adapter, de t'écouter et de te soutenir dans chaque moment.
              </p>

              <p>
                Aujourd'hui, je veux te proposer de prendre un nouveau départ, 
                d'écrire ensemble les prochains chapitres de notre histoire. 
                Car c'est avec toi que je veux construire mon avenir, 
                partager mes rêves et mes espoirs.
              </p>

              <p>
                Scanne ce QR code pour commencer une aventure spéciale, 
                une aventure qui, je l'espère, nous mènera vers un avenir encore plus radieux.
              </p>
            </motion.div>
          </Letter>

          <QRContainer>
            <motion.img 
              src={frame} 
              alt="QR Code" 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            />
          </QRContainer>

          <Footer>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p>Avec tout mon amour,</p>
              <p>❤️</p>
            </motion.div>
          </Footer>
        </Content>
      </motion.div>
    </Container>
  );
};

export default Print; 