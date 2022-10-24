import React, {useState} from "react";



const Todo = ({title , completed ,removeTodoItemProps,editTodoItemProps}) =>{
     const [isEditing, setIsEditing]= useState(false);
     const [value, setValue]= useState(title);
     const [tempValue, setTempValue]= useState(title);
     const [completedState, setCompleted]= useState(completed);

     const handleDivDoubleClick =() =>{
        setIsEditing(true);
     }
     const handleInputKeyDown = (e) =>{
        const key= e.keyCode; // pour avoir le key de champ du saiser
        if(key === 13){    //la valeur 13 c'est la valeur d'entrer
                editTodoItemProps({ title: tempValue });
                setValue(tempValue);  //value va avoir la valeur de tempValue
                setIsEditing(false);  //pour sortie du cas de modification
        }else if(key === 27){ //la valeur 27 c'est la valeur d'sortie 
        setTempValue(value); //tempvalue va avoir la valeur de value de formulaire
        setIsEditing(false);
        }
     }
     const handleInputOnChange = (e) =>{
        setTempValue(e.target.value);


     }
     const handleClick = () =>{
        setCompleted((oldCompleted)=> {
        const newState=!oldCompleted;
        editTodoItemProps({completed : newState});
        return newState
     });  //l'ancien valeur va prender sans inverse

     }
return(
        isEditing ?
        <div className="row">
          <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
            <div className="ui input fluid">
               <input
               autoFocus="true"
               onKeyDown={handleInputKeyDown}
               onChange= {handleInputOnChange}
               value={tempValue}
               />
            </div>
          </div>
        </div> :
    <div className="row">
            <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
            <h3 className={"ui header" + (completedState ? " green" : "")}>{value}</h3>
            </div>
           <div className="column  one wide">
            <button
             onClick={handleClick}
             className={"ui button circular icon"+ (completedState ? " blue " : " green ")} ><i className="white check icon"></i></button></div>
           <div className="column one wide "><button
            onClick={removeTodoItemProps}
            className="ui button circular icon red"
           ><i className="white remove icon"></i></button></div>

        </div>


);

}
export default Todo;