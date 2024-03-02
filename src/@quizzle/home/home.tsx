import React from "react";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <p className={classes.header}>Welcome</p>
        <p className={classes.subHeader}>click to start a quiz</p>
      </div>

      <div className={classes.circleButton}>
        <div className={classes.buttonBg1}></div>
        <div className={classes.buttonBg2}></div>
        <div className={classes.buttonBg3}></div>
        <p className={classes.text}>Quizzle</p>
      </div>
    </div>
  );
};

export default Home;
