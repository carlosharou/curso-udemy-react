import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';


const Auth = () => {
    const dispatch = useDispatch();


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formData = new FormData(document.getElementById('authForm'));
        const obj = Object.fromEntries(formData);
        console.log(obj);

        dispatch(authActions.login());
    }


    return (
        <main className={classes.auth}>
            <section>
                <form id='authForm' onSubmit={handleSubmit}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password' 
                            id='password' 
                            name='password' 
                            required
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
