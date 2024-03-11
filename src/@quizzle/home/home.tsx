import classes from './home.module.css';
import { Quizz, useApi } from '@quizzle/api';
import { Quiz } from '@quizzle/quiz';
import { Start } from '@quizzle/start';

const Home = () => {
    const { response, fetchData } = useApi<Quizz>();

    if (response === undefined) {
        return (
            <div className={classes.root}>
                <Start getQuiz={fetchData} />
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <Quiz quiz={response.results} />
        </div>
    );
};

export default Home;
