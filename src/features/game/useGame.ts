// This is where all of the logical things go. The use states hooks, all of the js stuff that are normally here, but now the apis
//Are being called from the .api.ts instead of doing it entirly in the hook

import { useState } from "react";
import type { Difficulty } from "./types";
import { fetchWordByDifficulty } from "./game.api";

export function useGame() {
    const [word, setWord] = useState<string>("");

    const startGame = async (difficulty: Difficulty) => {
        const result = await fetchWordByDifficulty(difficulty);
        setWord(result);
    };

    return { word, startGame };
}
