import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';


const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);
    const dispatch = useDispatch();


    const incrementHandler = () => {
        //dispatch({ type: 'INCREMENT' });
        dispatch(counterActions.increment());
    }


    const increaseHandler = () => {
        //dispatch({ type: 'INCREASE', amount: 5 });
        dispatch(counterActions.increase(5));
    }


    const decrementHandler = () => {
        //dispatch({ type: 'DECREMENT' });
        dispatch(counterActions.decrement());
    }


    const toggleCounterHandler = () => {
        //dispatch({ type: 'TOGGLE' });
        dispatch(counterActions.toggleCounter());
    };


    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && (<div className={classes.value}>{counter}</div>)}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};


export default Counter;


/*
import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';


class Counter extends Component {
    incrementHandler() {
        this.props.increment();
    }
    decrementHandler() {
        this.props.decrement();
    }
    toggleCounterHandler() {}


    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        );
    }
}


const mapStateToProps = state => {
    return {
        counter: state.counter
    };
}


const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
