import { useGame } from "./useGame";

export default function Game() {
    const { word, startGame } = useGame();

    return (
        <div>
            <button onClick={() => startGame("easy")}>Easy</button>
            <button onClick={() => startGame("medium")}>Medium</button>
            <button onClick={() => startGame("hard")}>Hard</button>

            {word && <h2>{word}</h2>}
        </div>
    );
}
