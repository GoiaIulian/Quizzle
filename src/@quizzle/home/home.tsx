import classes from './home.module.css';
import { Quizz, useApi } from '@quizzle/api';
import { Start } from '@quizzle/start';

const Home = () => {
    const { response, fetchData } = useApi<Quizz>();

    return (
        <div className={classes.root}>
            {response ? <div>{JSON.stringify(response)}</div> : <Start getQuiz={fetchData} />}
        </div>
    );
};

export default Home;
