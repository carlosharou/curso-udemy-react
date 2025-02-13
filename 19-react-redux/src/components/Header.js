import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';


const Header = () => {
    const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
    const dispatch = useDispatch();


    const handlerLogout = () => {
        dispatch(authActions.logout());
    }


    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            { isAuthenticated && (
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                        <li>
                            <button onClick={handlerLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
