import React ,{useState}  from "react";


const Form = ({ addTodo }) =>{
    const [InputValue, setInputValue]= useState("");

    const handleInputChange = (e) =>{ //pour permet de saisier dans le champ 
       setInputValue (e.target.value);
   };
    const handleSubmite = (e) => { //fonction pour valider le nouveau todo
        e.preventDefault();

        if(InputValue.trim() === "") return; //.trim() elimener les espace
        addTodo({title: InputValue, completed: false});
        setInputValue("");
    };

 return(
<form className="ui form" 
      onSubmit={handleSubmite}>
    <div className="ui grid center aligned">
        <div className="row">
            <div className="column five wide">
                 <input 
                 value={InputValue} 
                 onChange={handleInputChange} 
                 type="text"
                  placeholder="taper votre todo">

                  </input>
            </div>
            <div className="column one wide">
                  <button type="submit" className="ui button circular icon green"><i className="plus icon white"></i></button>
            </div>
      </div>
    </div>
</form>

);
}
export default Form;