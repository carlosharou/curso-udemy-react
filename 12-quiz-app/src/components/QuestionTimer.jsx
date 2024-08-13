import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [ remainingTime, setRemainingTime ] = useState(timeout);


    useEffect(() => {
        const timer =  setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prev => prev - 100);
        }, 100);

        return () => {//funcion de limpieza del useEffect, para limpiar todo antes de iniciar o cuando termina de ejecutarse el useEffecy
            clearInterval(interval);
        };
    }, []);


    return (
        <progress
            id="question-time"
            max={timeout}
            value={remainingTime}
            className={mode}
        />
    );
}