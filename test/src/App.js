import { useState } from 'react';
import './App.css';
import FormBody from './components/FormBody';
import UserRow from './components/UserRow';


let users = [];
function App() {
  const [user, setUser] = useState();
  let newUser = {};  
  
  function handlerSubmit(e) {
    e.preventDefault();
    newUser =  {
      name: e.target[0].value,
      surname: e.target[1].value,
      email: e.target[2].value
    };

    addUser(newUser);
    
    getUser()
  };

  //Добавление данных в Локальное хранилище
  function addUser(user) {     
    if (localStorage.users) {
      users = JSON.parse(localStorage.users);
    }
    users.push(user);
    
    localStorage.setItem("users", JSON.stringify(users));
  };

  //Получение данных из локального хранилища
  function getUser() {    
    setUser(JSON.parse(localStorage.users));    
  };

  return (
    <div className="App">
      <div className=' container'>    
          <FormBody submit={handlerSubmit}></FormBody>
          <div className="list-users">
            <h2 className="list-users__title">Список пользователей</h2>
            <div className="list-users__table table">
                <ul className="table__header table-list">
                    <li className="table__header-item table-item">
                        Имя
                    </li>
                    <li className="table__header-item table-item">
                        Фамилия
                    </li>
                    <li className="table__header-item table-item">
                        Почта
                    </li>
                    <li className="table__header-item table-item">
                        Действия
                    </li>
                </ul>
                <ul className="table__body table-list">
                      {users.map((user, index) => (
                          <UserRow user={user} key={index}></UserRow>
                      ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
