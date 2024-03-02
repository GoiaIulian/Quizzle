import classes from './start.module.css';

interface Props {
    getQuiz: (url: string) => void;
}

const Start = ({ getQuiz }: Props) => {
    const handleClick = () => {
        getQuiz('https://opentdb.com/api.php?amount=10');
    };

    return (
        <>
            <div className={classes.title}>
                <p className={classes.header}>Welcome</p>
                <p className={classes.subHeader}>click to start a quiz</p>
            </div>

            <div className={classes.circleButton}>
                <div className={classes.buttonBg1}></div>
                <div className={classes.buttonBg2}></div>
                <div
                    role='button'
                    tabIndex={0}
                    onClick={handleClick}
                    onKeyDown={handleClick}
                    className={classes.buttonBg3}
                ></div>
                <p className={classes.text}>Quizzle</p>
            </div>
        </>
    );
};

export default Start;
