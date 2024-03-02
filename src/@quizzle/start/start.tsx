import classes from './start.module.css';
import { Quizz, useApi } from '@quizzle/api';

const Start = () => {
    const { fetchData } = useApi<Quizz>();
    const handleClick = () => {
        fetchData('https://opentdb.com/api.php?amount=10');
    };

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <p className={classes.header}>Welcome</p>
                <p className={classes.subHeader}>click to start a quiz</p>
            </div>

            <div
                role='button'
                tabIndex={0}
                onClick={handleClick}
                onKeyDown={handleClick}
                className={classes.circleButton}
            >
                <div className={classes.buttonBg1}></div>
                <div className={classes.buttonBg2}></div>
                <div className={classes.buttonBg3}></div>
                <p className={classes.text}>Quizzle</p>
            </div>
        </div>
    );
};

export default Start;
