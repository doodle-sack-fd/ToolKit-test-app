import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
    const dispatch = useAppDispatch()
    const { users, isLoading, error } = useAppSelector(state => state.userReducer)


    useEffect(() => {
        dispatch(fetchUsers())
        console.log(users)
    }, [])

    return (
        <div className="App">
            {isLoading && <h1>Загрузка данных...</h1>}
            {error && <h1>Упс...Ошибка</h1>}
            {users.map(user =>
                <li>{user.name}</li>
            )}
        </div>
    );
}

export default App;
