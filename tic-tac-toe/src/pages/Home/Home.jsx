import React, { useContext } from "react";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SoundEffectsContext } from "../../contexts/SoundEffectsContext";

function Home() {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SoundEffectsContext);
  return (
    <Container columnBased>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
}

export default Home;
