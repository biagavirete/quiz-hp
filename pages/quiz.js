import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const QuizImage = styled.img`
    padding: 0;
    max-width: 350px;
    max-height: 145px;
`;

export const QuizOption = styled.div`
    width: 283px;
    height: 36px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    font-weight: 600;
    align-items: center;
    justify-content: center;
    padding-bottom: 2px;
`;

export const QuizButton = styled.button`
    width: 283px;
    height: 36px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.confirm};
    padding-top: 2px;
    color: ${({ theme }) => theme.colors.contrastText};
    font-weight: 600;
`;

export default function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>
          <Widget.Content>
            <QuizImage src="https://i.pinimg.com/originals/90/2e/ca/902eca5bae596c6c52a5a8a3dd15a287.jpg" alt="Plataforma 9 3/4" />
            <h3>Quando foi lançado o primeiro livro?</h3>
            <QuizOption>
              <p>1995</p>
            </QuizOption>
            <QuizOption>
              <p>1996</p>
            </QuizOption>
            <QuizOption>
              <p>1997</p>
            </QuizOption>
            <QuizOption>
              <p>1998</p>
            </QuizOption>
            <QuizButton>Confirmar</QuizButton>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
}
