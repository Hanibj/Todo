import React from "react";

import Todo from "./Todo";

const Liste = ({editTodoListeProps,liste, removeTodoListeProps}) =>{
  const renderedListe= liste.map(
    (item) => 
    <Todo  
    title={item.title} 
    completed={item.completed}
     removeTodoItemProps={(e)=>removeTodoListeProps(item._id)} 
     editTodoItemProps={(updatedValue) =>editTodoListeProps(item._id, updatedValue)}
     key={item.title}/>);
    return (
      <div className="ui grid center aligned">
       
          {renderedListe}
      </div>


    );


}

export default Liste;