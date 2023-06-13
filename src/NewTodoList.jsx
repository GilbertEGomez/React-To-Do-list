import { NewTodoItem } from "./NewTodoItem"

export function NewTodoList({todos,toggleTodo,deleteTodo}) {
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos" /* && means then. Default message if there is no todo array item*/}
    
        {/* wrapping curly braces lets you write javascript code within html. 
        Array function map() lets you map and and execute a function for item in the array. Whatever is returned will be the new value for that array item. 
        Note when returning an array of elements like below, we need to signify a key attribute with a unique value for the top most element.*/
        todos.map(todo => {
          return (
          <NewTodoItem 
            {...todo} // We can use the spread operator to add props of the same key value pairs of todo object to the component
            key = {todo.id}
            toggleTodo={toggleTodo}
            deleteTodo = {deleteTodo}/>)
          
        } ) }
      </ul>
    )
}