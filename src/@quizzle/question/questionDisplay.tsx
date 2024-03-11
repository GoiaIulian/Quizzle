import { Question } from '@quizzle/api';
import classes from './questionDisplay.module.css';

interface Props {
    question: Question;
    questionIndex: number;
    checkAnswer: (questionIndex: number, answer: string) => boolean;
    setAnswer: (questionIndex: number, answer: string) => void;
}

const QuestionDisplay = ({ question, questionIndex, checkAnswer, setAnswer }: Props) => {
    const handleClick = (option: string) => {
        setAnswer(questionIndex, option);
    };

    if (question.selectedAnswer) {
        return (
            <div className={classes.question}>
                <p>{question.question}</p>
                <div className={`${classes.options} ${classes.alreadyAnswered}`}>
                    {question.answers?.map((option, index) => {
                        if (checkAnswer(questionIndex, option)) {
                            return (
                                <button
                                    className={`${classes.answer} ${classes.correct}`}
                                    key={index}
                                >
                                    {option}
                                </button>
                            );
                        } else if (question.selectedAnswer === option) {
                            return (
                                <button
                                    className={`${classes.answer} ${classes.incorrect}`}
                                    key={index}
                                >
                                    {option}
                                </button>
                            );
                        } else {
                            return (
                                <button className={classes.answer} key={index}>
                                    {option}
                                </button>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className={classes.question}>
            <p>{question.question}</p>
            <div className={classes.options}>
                {question.answers?.map((option, index) => (
                    <button
                        onClick={() => handleClick(option)}
                        className={classes.answer}
                        key={index}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;
