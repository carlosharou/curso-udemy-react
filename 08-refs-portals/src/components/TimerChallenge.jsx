import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemainig] = useState(targetTime * 1000);
    const timer = useRef();
    const dialogRef = useRef();
    const timerIsActive = timeRemaining > 0 && timeRemaining < (targetTime * 1000);

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialogRef.current.open();
    }

    const handleReset = () => {
        setTimeRemainig(targetTime * 1000);
    }

    const handlerStart = () => {
        /*timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialogRef.current.open();
        }, targetTime * 1000);

        setTimerStarted(true);*/
        timer.current = setInterval(() => {
            setTimeRemainig(prev => prev - 10);
        }, 10);
    }

    const handlerStop = () => {
        //clearTimeout(timer.current);
        clearInterval(timer.current);
        dialogRef.current.open();
    }

    return (
        <>
            <ResultModal
                ref={dialogRef}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={timerIsActive ? handlerStop : handlerStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time in running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}