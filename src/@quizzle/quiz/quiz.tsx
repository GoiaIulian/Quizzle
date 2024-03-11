import * as React from 'react';
import { Question } from '@quizzle/api';
import classes from './quiz.module.css';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import useQuiz from './useQuiz';
import { QuestionDisplay } from '@quizzle/question';

interface Props {
    quiz: Question[];
}

const Quiz = ({ quiz }: Props) => {
    const { questions, checkAnswer, setAnswer } = useQuiz({ quiz: quiz });

    const [questionNumber, setQuestionNumber] = React.useState<number>(0);

    const nextQuestion = () => {
        setQuestionNumber((prev) => (prev < questions.length - 1 ? prev + 1 : 0));
    };
    const previousQuestion = () => {
        setQuestionNumber((prev) => (prev > 0 ? prev - 1 : questions.length - 1));
    };

    if (quiz === undefined) {
        return null;
    }

    return (
        <div className={classes.root}>
            <p>
                {questionNumber + 1}/{questions.length}
            </p>
            <QuestionDisplay
                question={questions[questionNumber]}
                questionIndex={questionNumber}
                checkAnswer={checkAnswer}
                setAnswer={setAnswer}
            />
            <div className={classes.navigation}>
                <IoIosArrowDropleftCircle
                    size={25}
                    className={classes.navButton}
                    onClick={previousQuestion}
                />
                <IoIosArrowDroprightCircle
                    size={25}
                    className={classes.navButton}
                    onClick={nextQuestion}
                />
            </div>
        </div>
    );
};

export default Quiz;
