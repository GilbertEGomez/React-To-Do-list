import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm" // Importing child component
import { NewTodoList } from "./NewTodoList"

export default function App() {
  /*
  useState is an object that contains two properties, one is a variable, another is to setter to change the value of the variable.
  useState parameter is to initalize the variable with a pre-set value you designate (hence hello world).

  YOU CANNOT MUTATE STATE VARIABLES, it's a constant

  Usually we specify these variables from useState using a deconstructor:
  const [variable,settername] = useState(default value)
  */
  const [todos,setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS") // Grab the "ITEMS" key value from the local storage JSON.
    if (localValue === null) return []
    return JSON.parse(localValue) //Return the expected array of todos we had previously into the state.
  })

  /* useEffect is a hook that passes two parameters, a function to execute and a array of objects.
   It will listen for any objects that changed in the array and execute the function you specified */
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) //Store a key called "ITEMS" with the array of todos object in the local storage json file of the browser.
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, // By spreading todos array (...variable), we are shadowing copying previous values from the todos array variable which
                      // allows us to insert new values with previous data.
    {id: crypto.randomUUID(), // We are adding a new object to the todo array variable with properties. You can think of objects like dictionaries in python or java.
      title: title, 
      completed: false},
      ]
      })
  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id) //If the item's id is not what was passed, skip it and return the object without the specified id.
    })
  }

console.log(todos) //Helps us visualize the array updating in the console

  return (
    <>
    <NewTodoForm onSubmit = {addTodo /* Adding a react prop that references our function so we can call it within NewTodoForm*/}/> 
      <h1 className="header">Todo List</h1>
    <NewTodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
  
}

