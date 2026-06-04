import "./StartScreen.css";

const StartScreen = ({ startGame, easy, meddium, hard, difficulty }) => {
  return (
    <div className="start">
      <h1>Acerte as Palavras</h1>
      <p>Selecione a dificuldade!</p>
      <button onClick={easy}>Fácil</button>
      <button onClick={meddium}>Médio</button>
      <button onClick={hard}>Difícil</button>
      <p>Dificuldade selecionada: {difficulty}</p>
      <p>Clique no botão abaixo para começar a jogar!</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
