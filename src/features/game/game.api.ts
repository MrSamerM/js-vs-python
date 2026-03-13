// This is where the apis go such as the resful apis etc
import type { Difficulty } from "./types";

const difficultyRanges: Record<Difficulty, { min: number; max: number }> = {
    easy: { min: 3, max: 5 },
    medium: { min: 6, max: 10 },
    hard: { min: 11, max: 15 },
};

export async function fetchWordByDifficulty(difficulty: Difficulty): Promise<string> {
    const { min, max } = difficultyRanges[difficulty];
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    const difficultyLevel = { "easy": 1, "medium": 2, "hard": 3 }

    const response = await fetch(
        `https://random-word-api.herokuapp.com/word?length=${length}&diff=${difficultyLevel[difficulty]}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch word");
    }

    const [word] = await response.json();
    return word;
}
