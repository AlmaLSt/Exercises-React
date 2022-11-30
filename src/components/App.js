import React from 'react';
import axios from 'axios';

import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import Context from './Context';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todos: []
//     }

//     // this.changeDoneOnTodo = this.changeDoneOnTodo.bind(this);
//     // this.updateTodos = this.updateTodos.bind(this);
//   }

//   getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         return response.json()
//     }).then(response => {
//       // const text = response.title;
//       // const done = response.completed;
//       const {
//         title: text,
//         completed: done,
//       } = response;

//       this.setState({todos: [{text, done}, ...this.state.todos]});
//     });
//   }

//   componentDidMount() {
//     this.getData();
//   }

//   componentWillUnmount() {}

//   changeDoneOnTodo = (n) => {
//     const newTodos = [...this.state.todos];
  
//     newTodos[n].done = !newTodos[n].done;
//     this.setState({ todos: newTodos });
//   }

//   updateTodos = (todo) => {
//     this.setState({todos: [todo, ...this.state.todos]});
//   }

//   render() {
//     const {
//       changeDoneOnTodo,
//       updateTodos,
//       state: {
//         todos,
//       }
//     } = this;

//     return (
//       <div className="wrapper">
//         <div className="card frame">
//           <Header todos={todos} />
//           <TodoList todos={todos} onClickCheckmark={changeDoneOnTodo}/>
//           <Form updateTodos={updateTodos}/>
//         </div>
//       </div>
//     );
//   }
// }

const URL = 'http://localhost:4000/todos';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  // CRUD
  // Create
  // Read
  // Update
  // Delete

  // GET (Read) ya está yendo a backend
  const getData = () => {
        // fetch(URL)
        // .then(response => response.json())
        // .then(response => setTodos([...response, ...todos]));
        axios.get(URL)
        .then(response => setTodos([...response.data]))
      }

  // PATCH (Update) ya está yendo a backend
  const updateTodo = (id, body) => {
    // fetch(`${URL}/${id}`, {
    // method: 'PATCH',
    // headers: {
    //     'Content-type': 'application/json',
    // },
    // body: JSON.stringify(body),
    // })
    // .then(response => response.json())
    // .then(response => {
    //   // Lógica de UI (Interfaz de usuario)
    //   const newTodos = [...todos];

    //   const index = newTodos.findIndex(element => element.id === response.id);
  
    //   if (index === -1) {
    //       return;
    //   }
  
    //   newTodos[index].done = !newTodos[index].done;
    //   setTodos(newTodos);
    // })

    axios.patch(`${URL}/${id}`, body)
    .then(response => {
      // Lógica de UI (Interfaz de usuario)
      const newTodos = [...todos];

      const index = newTodos.findIndex(element => element.id === response.data.id);
  
      if (index === -1) {
          return;
      }
  
      newTodos[index].done = !newTodos[index].done;
      setTodos(newTodos);
    }).catch(error => {
      if (error.code === "ERR_NETWORK") {
        setError('Es nuestro error, perdón, pero los gatos los rompieron los cables. :-(, estamos trabajando para mejorar. Por favor intente más tarde.')
      }

      setTimeout(() => {
        setError(null);
      }, 2000);
    })
  };

  // POST (Create) todavía no implementado en backend
  const updateTodos = todo => {
    setTodos([todo, ...todos]);
  }

  // DELETE (Delete) todavía no impolementado en backend
  const deleteTodo = index => {
    // copiar los elementos del array todos
    // desde el inicio hasta index (sin el elemento index)
    // de index + 1, hasta el final.
    // const head = todos.slice(0, index);
    // const end = todos.slice(index + 1);
    // setTodos([...head, ...end]);

    setTodos(
      [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
      ]
    );
  }

  return (
    <div className="wrapper">
      <div className="card frame">
        <Context.Provider value={{
          onClickCheckmark: updateTodo,
          onClickCross: deleteTodo,
        }}>
          <Header todos={todos} />
          <TodoList todos={todos} />
          <Form updateTodos={updateTodos} />
          {error}
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
