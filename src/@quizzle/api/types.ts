export interface Quizz {
    response_code: number;
    results: Question[];
}

export interface Question {
    type: AnswerType;
    difficulty: Difficulty;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    answers: string[] | undefined;
}

export enum AnswerType {
    multiple = 'multiple',
    single = 'single',
}

export enum Difficulty {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard',
}
