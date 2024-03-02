import classes from './home.module.css';
import { Quizz, useApi } from '@quizzle/api';
import { Start } from '@quizzle/start';

const Home = () => {
    const { response } = useApi<Quizz>();

    return (
        <div className={classes.root}>
            <Start />
            {response ? <div>{JSON.stringify(response)}</div> : null}
        </div>
    );
};

export default Home;
