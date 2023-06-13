import { useState } from "react"

export function NewTodoForm(props) { //Added a parameter for prop referencing. We can also destructure by {onSubmit} and call onSubmit directly.
    
  /*
  In the new item form, we are setting the value field of the input element to be specified by the newItem variable from the useState.
  Then, we are connecting a callback function to the onChange Event so we can change the value of the variable from the state.
  */
  const [newItem, setNameItem] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    props.onSubmit(newItem) //React Props (also known as attributes for html) will allow you to give access to functions or values from parent components.
                     //For example we can give the nested component (<NewTodoForm/>) a prop called "addTodo" and set the value to a javascript function from the parent. 
                     //We then can reference the connected function from within NewTodoForm component.

    setNameItem("") //clearing input field after entering info
  }

  return (
  <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" value={newItem} onChange = {(e) => setNameItem(e.target.value)} id="item"/>
      </div>
      <button className="btn">Add</button>
  </form>
  )
}