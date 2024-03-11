import * as React from 'react';
import { Question } from '@quizzle/api';
import { randomNumberInInterval } from '@quizzle/utils';

interface Input {
    quiz: Question[];
}

const useQuiz = ({ quiz }: Input) => {
    const [questions, setQuestions] = React.useState<Question[]>(quiz);

    const mixAnswers = (question: Question): string[] => {
        const rightAnswerPosition = randomNumberInInterval(
            0,
            question.incorrect_answers.length + 1,
        );
        const answers = [...question.incorrect_answers];
        answers.splice(rightAnswerPosition, 0, `${question.correct_answer}`);

        return answers;
    };

    const checkAnswer = (questionIndex: number, answer: string): boolean =>
        questions[questionIndex].correct_answer === answer;

    const setAnswer = (questionIndex: number, answer: string) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex] = { ...questions[questionIndex], selectedAnswer: answer };
        setQuestions(newQuestions);
    };

    React.useMemo(() => {
        const newQuestions = quiz.map<Question>((q) => ({ ...q, answers: mixAnswers(q) }));
        setQuestions(newQuestions);
    }, [quiz]);

    return {
        questions,
        setAnswer,
        checkAnswer,
    };
};

export default useQuiz;
