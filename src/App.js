
import './App.css';
import { actions ,useStore } from './store';
function App() {
  const [state,dispatch] = useStore()
  const {todos, todoInput} = state
  const handleAdd = ()=>{
    dispatch(actions.addTodo(todoInput))
  }
  console.log(todos)


  console.log(todoInput)
  return (
    <div className="App">
      Please type in your todo list
      <br/>
      <input value={todoInput}
      placeholder='Enter todo...'
      onChange={e=>dispatch(actions.setTodoInput(e.target.value))}/>

      <button onClick={handleAdd}>ADD</button>
 
    {todos.map((todo,index)=>{
        return(<li key={index}>{todo}</li>)
      })}
    </div>
  );
}

export default App;
