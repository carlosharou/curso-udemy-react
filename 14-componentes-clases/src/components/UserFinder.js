import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/UsersContext';
import ErrorBoundary from './ErrorBoundary';


class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }


    componentDidMount() {// solo se ejecuta una vez; que es cuando se crea el componente la primera vez
        // send http request
        this.setState({ filteredUsers: this.context.users });
    }


    componentDidUpdate(prevProps, prevState) {// se ejecuta cada que algo cambia en el componente
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }


    searchChangeHandler = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    };


    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
    
}

/*const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    }, [searchTerm]);

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Fragment>
            <div className={classes.finder}>
                <input type='search' onChange={searchChangeHandler} />
            </div>
            <Users users={filteredUsers} />
        </Fragment>
    );
};*/

export default UserFinder;